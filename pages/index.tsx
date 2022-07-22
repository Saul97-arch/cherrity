import type { NextPage } from 'next'
import axios from 'axios';
import xml2js from "xml2js";
import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CharityResponse, Project } from './types/ProjectTypes';
import { AirbnbCard } from './components/Card';
import { Flex, Spacer, Center, Text } from '@chakra-ui/react'


const Home: NextPage = () => {
  const [image, setImage] = useState<string | undefined>("")
  const [project, setProjectArr] = useState<Array<Project>>();

  async function getData() {
    await axios.get<CharityResponse>("https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=83bb4162-61f7-4ce6-bef1-20f702e27ad5",
      {
        headers: {
          ContentType: "application/xml",
          Accept: 'application/xml'
        }
      }).then(data => {
        const parser = new xml2js.Parser();
        parser.parseString(data.data, function (err, res: CharityResponse) {
          console.log(res.projects.project);
          //setImage(res.projects.projectList.at(6)?.image.at(0)?.imagelink[5].url.at(0));
          setProjectArr(res.projects.project); // TODO trocar a ordem das propriedades
          console.log("IMAGEM AHHH " + res.projects);
        })
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Flex h="14vh" bg="#91B7C7" mb="16">
        <Center w='100px' bg='green.500'>
          <Text>Cherrity</Text>
        </Center>
      </Flex>
      <Flex direction={"column"} align="center" p="4">
        {project?.map((project, index) => {
          // console.log(project.image.at(0)?.imagelink[3].url.at(0));
          return (
            <AirbnbCard imageUrl={project.image.at(0)?.imagelink[3].url.at(0)} key={index} projectName={project.title[0]} regions={project.region} />
          );
        })}
      </Flex>
      <Flex h="24vh" bg="#91B7C7">

      </Flex>
    </div>

  )
}

export default Home
