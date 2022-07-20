import type { NextPage } from 'next'
import axios, { AxiosResponse } from 'axios';
import xml2js from "xml2js";

import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { type } from 'os';

type ImageLink = {
  $ : {size : string};
  url : Array<string>;
  title : string;
};

type Image = {
  $ : { id : string },
  imagelink : Array<ImageLink>
};

type CountryData = {
  iso3166CountryCode : Array<string>;
  name : Array<string>;
};

type CountryItem = {
  country : Array<CountryData>
};

type DataProject = {
  $ : string; // this is the number of projects available
  hasNext : string;
  nextProjectId : string;
  project : Array<Project>;
};

type Theme = {
  theme : Array<ThemeData>
};

type ThemeData = {
  id : Array<string>;
  name : Array<string>;
};

type Project = {
  active: string;
  activities: string;
  additionalDocumentation : string;
  contactAddress : string;
  contactAddress2 : string;
  contactCity : string;
  contactCountry : string;
  contactUrl : string;
  countries : Array<CountryItem>;
  country : Array<string>;
  funding : string;
  goal : string;
  id : string;
  image : Array<Image>;
  longTermImpact : Array<string>;
  need : Array<String>;
  numberOfDonations : Array<String>;
  projectLink : Array<string>;
  region : Array<string>;
  status : Array<string>;
  summary : Array<string>;
  title : Array<string>;
  themes : Array<Theme>
};

type CharityResponse = {
  projects: DataProject;
};

async function getData() {

  let images ;
  const data = await axios.get<CharityResponse>("https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=83bb4162-61f7-4ce6-bef1-20f702e27ad5",
    {
      headers: {
        ContentType: "application/xml",
        Accept: 'application/xml'
      }
    }).then(data => {
      let parser = new xml2js.Parser();
      parser.parseString(data.data, function (err, res : CharityResponse) {
        // console.log(res.projects.project.at(0)?.image.at(0)?.imagelink[1].url.at(0));
        images = res.projects.project.at(0)?.image.at(0)?.imagelink;
      })
    });

  return images;    
}


const Home: NextPage = () => {

  return (
   <button onClick={getData}>sadasd</button>
  )
}

export default Home
