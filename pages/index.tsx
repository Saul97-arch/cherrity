import type { NextPage } from 'next'
import axios from 'axios';
import xml2js from "xml2js";

import { useEffect, useState } from 'react'
import { CharityResponse, Project } from './types/ProjectTypes';
import { AirbnbCard } from './components/Card';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import ProjectsService from './services/ProjectServices';

const Home: NextPage = () => {
  const [project, setProjectArr] = useState<Array<Project>>();

  const getProjects = () => {
    ProjectsService.getAllProjects().then((data) => {
      const parser = new xml2js.Parser();
      parser.parseString(data.data, function (err, res: CharityResponse) {
        setProjectArr(res.projects.project); // TODO trocar a ordem das propriedades
        console.log(res);
        console.log("SAHAUHSA")
      });
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Box>
      <Box>
        hueahae
      </Box>
      <Flex wrap={'wrap'}>
        {project?.map((project, index) => {
          return (
            <AirbnbCard imageUrl={project.image.at(0)?.imagelink[3].url.at(0)} key={index} />
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
