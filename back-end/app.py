from fastapi import FastAPI
from functions import (
    addProject,
    addPost
)
app = FastAPI()

sample_project = {
    "project_title":"Portfolio",
    "desc":"This is my personal portfolio",
    "project_type":"Individual",
    "team_members":["Sehara Arunodya Fernando"],
    "link":"Not yet"
}
@app.get("/")
async def getHello():
    return "Hello World"

@app.get("/addproject")
async def AddNewProject():
    result = await addProject(sample_project)
    return result