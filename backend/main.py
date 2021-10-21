from fastapi import FastAPI
from supabase_client import Client
from dotenv import dotenv_values
from pydantic import BaseModel
from fastapi_socketio import SocketManager

app = FastAPI()
socket_manager = SocketManager(app=app)
config = dotenv_values(".env")

supabase = Client(
    api_url=config.get("SUPABASE_URL"),
    api_key=config.get("SUPABASE_KEY")
)


class Message(BaseModel):
    msg: str
    user_id: int


@app.get("/api/v1/messages/{room_id}")
async def get(room_id: int):
    error, r = await supabase.table("messages").select("message,"
                                                       "user:users(username)").eq("room_id", room_id).query()
    return r


@app.post("/api/v1/room/{room_id}/message")
async def create_message(room_id: int, message: Message):

    error, r = await supabase.table("messages").insert([{"room_id": room_id, "user_id": message.user_id, "message": message.msg}])
    if error:
        return error
    await app.sio.emit('message', {'msg': "hey"})
    return r


@app.sio.on('connect')
async def handle_connect(sid, *args, **kwargs):
    await app.sio.emit('connect', 'User joined')
