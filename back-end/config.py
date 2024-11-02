from motor.motor_asyncio import AsyncIOMotorClient

mongo_uri = "mongodb+srv://fernandomsa22:Shehara2002@cluster0.683r8uc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = AsyncIOMotorClient(mongo_uri)

database = client.portfolio_db

projects = database.get_collection("projects")
posts = database.get_collection("posts")
services = database.get_collection("services")