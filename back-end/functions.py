from config import projects,services,posts
from models import ProjectModel,PostModel

def viewProject(project):
    return {
        "id":str(project["_id"]),
        "title":str(project["project_title"]),
        "desc":str(project["desc"]),
        "type":str(project["project_type"]),
        "team_members":list(project["team_members"]),
        "link":str(project["link"])
    }

def viewPost(post):
    return {
        "id":str(post["_id"]),
        "title":str(post["post_title"]),
        "desc":str(post["description"]),
    }

async def addProject(project: dict)->str:
    new_project = await projects.insert_one(project)
    project_data = await projects.find_one({"_id":new_project.inserted_id})
    return viewProject(project_data)

async def addPost(post: dict)->str:
    new_post = await posts.insert_one(post)
    post_data = await posts.find_one({"_id":new_post.inserted_id})
    return viewProject(post_data)

    