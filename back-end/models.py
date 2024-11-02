from pydantic import BaseModel,Field
from typing import Optional

class ProjectModel(BaseModel):
    id:Optional[str] = Field(alias='_id')
    project_title:str
    desc:str
    project_type:str
    team_members:list
    link:str

class PostModel(BaseModel):
    id:Optional[str] = Field(alias='_id')
    post_title:str
    description:str