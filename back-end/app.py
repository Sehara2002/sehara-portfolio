from fastapi import FastAPI
from functions import (
    addProject,
    addPost,
    getAllPosts,
    getAllProjects
)
app = FastAPI()

# sample_project = {
#     "project_title":"Portfolio",
#     "desc":"This is my personal portfolio",
#     "project_type":"Individual",
#     "team_members":["Sehara Arunodya Fernando"],
#     "link":"Not yet"
# }
@app.get("/")
async def getHello():
    return "Hello World"

@app.post("/addproject")
async def AddNewProject(title,desc,ptype,members,link):
    sample_project = {
    "project_title":title,
    "desc":desc,
    "project_type":ptype,
    "team_members":list(members.split(',')),
    "link":link
}
    result = await addProject(sample_project)
    return {"Message":"Project added Successfully"}

@app.get("/allprojects")
async def allProjects():
    all_projects = await getAllProjects()
    return all_projects

@app.get("/getallposts")
async def allposts():
    return await getAllPosts()