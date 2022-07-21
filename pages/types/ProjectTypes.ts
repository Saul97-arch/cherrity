export type ImageLink = {
    $: { size: string };
    url: Array<string>;
    title: string;
};

export type AirbnbCardProps = {
    imageUrl?: string
}

export type CharityResponse = {
    projects: DataProject;
};
  
export type Image = {
    $: { id: string },
    imagelink: Array<ImageLink>
};

export type CountryData = {
    iso3166CountryCode: Array<string>;
    name: Array<string>;
};


export type CountryItem = {
    country: Array<CountryData>
};


export type DataProject = {
    $: string; // this is the number of projects available
    hasNext: string;
    nextProjectId: string;
    project: Array<Project>;
};


export type Theme = {
    theme: Array<ThemeData>
};


export type ThemeData = {
    id: Array<string>;
    name: Array<string>;
};


export type Project = {
    active: string;
    activities: string;
    additionalDocumentation: string;
    contactAddress: string;
    contactAddress2: string;
    contactCity: string;
    contactCountry: string;
    contactUrl: string;
    countries: Array<CountryItem>;
    country: Array<string>;
    funding: string;
    goal: string;
    id: string;
    image: Array<Image>;
    longTermImpact: Array<string>;
    need: Array<String>;
    numberOfDonations: Array<String>;
    projectLink: Array<string>;
    region: Array<string>;
    status: Array<string>;
    summary: Array<string>;
    title: Array<string>;
    themes: Array<Theme>
};