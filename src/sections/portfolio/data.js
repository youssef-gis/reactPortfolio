import Image1 from "../../assets/project1.jpg";
import Image10 from "../../assets/project10.jpg";
import Image2 from "../../assets/project2.jpg";
import Image11 from "../../assets/project11.jpg";
import Image7 from "../../assets/project7.jpg";
import Image12 from "../../assets/project12.jpg";
import Image13 from "../../assets/project13.jpg";
import Image14 from "../../assets/project14.jpg";
import Image15 from "../../assets/project15.jpg";
import Image16 from "../../assets/project16.jpg";
import Image17 from "../../assets/project17.png";
import Image18 from "../../assets/project18.png";

const data = [
   {
    id: 1,
    category: "Front End",
    image: Image18,
    title: "Modern E-Commerce Platform",
    desc: "A fully functional e-commerce platform built with Next.js 15, Tailwind CSS v4, and TypeScript. Features include a dynamic product carousel, responsive product pages with interactive cart controls, real-time cart state using Zustand, and secure Stripe checkout integration.",
    demo: "",
    github: "https://github.com/youssef-gis/Ecommerce-Platform",
   },
   {
    id: 2,
    category: "Front End",
    image: Image17,
    title: "Best Movies Explorer (Front End)",
    desc: "A React-based UI that lets you find trending movies, built with React + Tailwind + Vite. Features animated, dynamic search component, and styled movie cards. Deployed via GitHub Pages.",
    demo: "https://youssef-gis.github.io/best_movies/",
    github: "https://github.com/youssef-gis/best_movies",
  },
  {
  id: 3,
  category: "data visualization",
  image: Image16,
  title: "🚲 Bike Sales Dashboard",
  desc: "Developed an interactive Tableau dashboard to analyze bike sales performance across regions, product categories, and customer segments. The dashboard enables dynamic filtering and visualization of key sales indicators, helping stakeholders understand trends and opportunities.",
  demo: "https://public.tableau.com/app/profile/youssef.arhrib/viz/BikeSalesDashboard_17488094209810/Dashboard1?publish=yes",
  github: "https://public.tableau.com/app/profile/youssef.arhrib/viz/BikeSalesDashboard_17488094209810/Dashboard1?publish=yes"
},
 {
  id: 4,
  category: "data analysis",
  image: Image15,
  title: "🚗 NYC Vehicle Crashes Data Analysis (2021–2024)",
  desc: "This project analyzes vehicle crash data in New York City from 2021 to 2024 using Python. It covers data cleaning, temporal and spatial analysis, and visualization of crash trends by borough, vehicle type, time, and contributing factors. Tools used include Pandas, Seaborn, Matplotlib, GeoPandas, and Folium.",
  demo: "",
  github: "https://nbviewer.org/github/youssef-gis/nyc_vehicule_collisions/blob/main/nyc_vehicule_collisions.ipynb"
},
    {
    id: 5,
    category: "data analysis",
    image: Image14,
    title: "🗺️ Network Analysis of Paris's Streets with Python (Data Analysis)",
    desc: "This project applies network analysis techniques to explore and understand the structure of Paris's road network using Python. By leveraging powerful tools like OSMnx, NetworkX, GeoPandas, and Folium, the project extracts, analyzes, and visualizes urban infrastructure to uncover hidden patterns in city design and transportation flow.",       
    demo: "",
    github: "https://nbviewer.org/github/youssef-gis/Road-Network-Analysis/blob/main/road_network_analysis.ipynb",
  },
    {
    id: 6,
    category: "data analysis",
    image: Image13,
    title: "📊 Data Analytics with SQL: Classic Models Case Study (Data Analysis)",
    desc: "This project demonstrates practical SQL skills applied to real-world business scenarios using the Classic Models sample database. It includes advanced query examples for calculating sales performance, customer trends, product profitability, and more. Ideal for showcasing SQL knowledge in data analytics, reporting, and data-driven decision making.",       
    demo: "",
    github: "https://github.com/youssef-gis/SQL-Classic-models-Analytics",
  },
    {
    id: 7,
    category: "data mining",
    image: Image12,
    title: "Automated Scraper for Marathon Race Results (Data Mining)",
    desc: "This project focuses on mining marathon race results from multiple publicly available websites, each with its own structure and pagination system. I developed a custom Python scraping pipeline to extract detailed runner performance data and race metadata, which is then cleaned and compiled into a structured CSV file.",
    demo: "",
    github: "https://github.com/youssef-gis/Scraping-Marathon-Results",
  },
  {
    id: 8,
    category: "data analysis",
    image: Image1,
    title: "📊 GeoSpatial Analysis - Zomato Data Analysis Project 🔥 (Data Analysis)",
    desc: "Zomato Food Delivery service is available in 24 countries and more than 10,000 cities as of 2019. The major objective is to perform Exploratory Data Analysis, Geospatial Analysis using Zomato dataset",
    demo: "",
    github: "https://github.com/youssef-gis/Zomato-Spatial-Analysis",
  },
  {
    id: 9,
    category: "data analysis",
    image: Image10,
    title: "📊 Analysis of global warming (Data Analysis)",
    desc: "Analysis of global warming involves examining the causes, impacts, and potential solutions related to the increase in Earth's average surface temperature over time.",
    demo: "",
    github: "https://github.com/youssef-gis/Analysis_of_global_warming",
  },
  {
    id: 10,
    category: "data analysis",
    image: Image11,
    title: "Uncovering Crime Trends in the City of Angels with Python (Data Analysis)",
    desc: "Los Angeles is a sprawling metropolis known for its beaches, entertainment industry, and cultural diversity. But beneath the surface lies a complex web of urban challenges, one of which is crime.We’ll take a data-driven look at crime in Los Angeles using Python, exploring patterns, trends, and insights hidden in publicly available crime data.",
    demo: "",
    github: "https://github.com/youssef-gis/Los-Angeles-crimes-Analysis",
  },
  {
    id: 11,
    category: "backend",
    image: Image7,
    title: " WEB-GIS application for BI business management and mapping (Backend)",
    desc: "This web application is a comprehensive solution designed to streamline business management and mapping processes. It combines powerful tools and features to help businesses effectively manage their operations. ",
    demo: "https://youssef-gis-affaires-bi-ouarzazate.streamlit.app",
    github: "https://github.com/youssef-gis/affaires_bi_ouarzazate",
  },
  {
    id: 12,
    category: "backend",
    image: Image2,
    title: "Real Estate geoAppLication (Backend)",
    desc: "Build a location-based real estate webapplication. Which it is going to be a full stack web application with GeoDjango powering the backend and React Js the frontend. The backend will be build as an API with Django Rest Framework (DRF) and the requests are made to the API with React.",
    demo: "",
    github: "https://github.com/youssef-gis/real-estate-webapp_backend",
  },

];

export default data;
