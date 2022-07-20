import type { NextPage } from 'next'
import axios from 'axios';
import xml2js from "xml2js";

import { useEffect, useState } from 'react'
import { CharityResponse, Project } from './types/ProjectTypes';

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
  }, [image])

  return (
    <div>
      {project?.map((project, index) => {
        return (
          <div key={index}>
            <p>{project.title}</p>
            <img src={project.image.at(0)?.imagelink[3].url.at(0)} />
          </div>
        )
      })}
    </div>
  )
}

export default Home
