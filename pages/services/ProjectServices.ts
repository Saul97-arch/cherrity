import axios from "axios";
import http from "../services/http-common"
import { CharityResponse } from "../types/ProjectTypes";

const getAllProjects = () => {
    return http.get<CharityResponse>("/projectservice/all/projects?api_key=83bb4162-61f7-4ce6-bef1-20f702e27ad5");
};


const ProjectsService = {
    getAllProjects
};

export default ProjectsService;
