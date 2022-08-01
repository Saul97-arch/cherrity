import type { NextPage } from 'next'
import xml2js from "xml2js";

import { useEffect, useReducer, useState } from 'react'
import { CharityResponse, Project } from './types/ProjectTypes';
import { AirbnbCard } from './components/Card';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import ProjectsService from './services/ProjectServices';

const Home: NextPage = () => {
  const [project, setProjectArr] = useState<Array<Project>>();

  type ActionType =
    | { type: "request" }
    | { type: "sucess", results: Project[] }
    | { type: "error" };


  type State = {
    data?: Project[];
    isLoading: boolean;
  }

  const imgReducer = (state: State, action: ActionType) => {
    switch (action.type) {
      case "request":
        // .images.concat(action.images
        console.log(state)
        return {isLoading: true }
      case "sucess":
        console.log(state)
        return { isLoading: false, data: action.results }
      default:
        return state;
    }
  };
  
  const [imgData, imgDispatch] = useReducer(imgReducer, { isLoading: false });
  
  const getByReducer = () => {
    imgDispatch({ type: 'request'});
    ProjectsService.getAllProjects().then((data) => {
      const parser = new xml2js.Parser();
      parser.parseString(data.data, function (err, res: CharityResponse) {
        console.log(res.projects.project)
        imgDispatch({ type: 'sucess', results : res.projects.project})
        console.log(imgData);
        console.log("SAHAUHSA");
      });
    });
  }

  const getProjects = () => {
    ProjectsService.getAllProjects().then((data) => {
      const parser = new xml2js.Parser();
      parser.parseString(data.data, function (err, res: CharityResponse) {
        setProjectArr(res.projects.project); // TODO trocar a ordem das propriedades
        console.log(res);
        console.log("SAHAUHSA");
      });
    });
  };

  useEffect(() => {
    getByReducer();
  }, [imgDispatch]);

  return (
    <Box>
      <Box>
        hueahae
      </Box>
      <Flex wrap={'wrap'}>
        {imgData.data?.map((project, index) => {
          return (
            <AirbnbCard
              imageUrl={project.image.at(0)?.imagelink[3].url.at(0)} key={index}
              imgDescription={project.title[0]}
            />
          )
        })}
      </Flex>

      <Box>
        asdasdasd
      </Box>
    </Box>
  )
}

export default Home;
