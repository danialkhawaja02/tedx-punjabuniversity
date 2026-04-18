export interface Speaker {
  id: string;
  name: string;
  title: string;
  socialLink: string;
  image?: string;
}

import imgMashhood from "/src/assets/images/Mashhood.webp";
import imgNousheen from "/src/assets/images/DrNousheen.webp";
import imgBushra from "/src/assets/images/DrBushra.webp";
import imgDanial from "/src/assets/images/MDanial.webp";
import imgHamera from "/src/assets/images/Hamera.webp";
import imgIftikhar from "/src/assets/images/Iftikhar.webp";
import imgRidah from "/src/assets/images/DrRidah.webp";


export const SPEAKERS: Speaker[] = [
  {
    id: "01",
    name: "Mashhood Rastgar",
    title: "Technology Leader & Entrepreneur",
    socialLink: "https://www.linkedin.com/in/mashhoodr/",
    image: imgMashhood
  },
  {
    id: "02",
    name: "Dr. Nousheen Zaidi",
    title: "Environmental Health Researcher",
    socialLink: "https://www.linkedin.com/in/nousheen-zaidi-83129420a/",
    image: imgNousheen
  },
  {
    id: "03",
    name: "Dr. Bushra Nisar Khan",
    title: "Academic & Zoology Researcher",
    socialLink: "https://www.researchgate.net/profile/Bushra-Khan-21",
    image: imgBushra
  },
  {
    id: "04",
    name: "Muhammad Danial",
    title: "Digital Content Creator",
    socialLink: "https://www.instagram.com/m1danial/",
    image: imgDanial
  },
  {
    id: "05",
    name: "Hamera Aisha",
    title: "Wildlife Conservationist, WWF Pakistan",
    socialLink: "https://www.linkedin.com/in/hamera-aisha-06ab4758/",
    image: imgHamera
  },
  {
    id: "06",
    name: "Iftikhar Thakur",
    title: "Actor, Comedian & Philanthropist",
    socialLink: "https://www.instagram.com/ifitkharthakur9/",
    image: imgIftikhar
  },
  {
    id: "07",
    name: "Dr. Ridah Khan",
    title: "Medical Doctor, Broadcaster & TV Presenter",
    socialLink: "https://www.instagram.com/ridahnoor/",
    image: imgRidah
  }
];
