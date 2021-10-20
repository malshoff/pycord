from fastapi import FastAPI
from supabase_client import Client
from dotenv import dotenv_values

app = FastAPI()
config = dotenv_values(".env")

supabase = Client(
    api_url=config.get("SUPABASE_URL"),
    api_key=config.get("SUPABASE_KEY")
)


@app.get("/")
async def get():
    error, r = await supabase.table("rooms").select("*").query()
    return r
