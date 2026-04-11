export interface Speaker {
  id: string;
  name: string;
  title: string;
  socialLink: string;
  image?: string;
}

export const SPEAKERS: Speaker[] = [
  {
    id: "01",
    name: "Mashhood Rastgar",
    title: "Technology Leader & Entrepreneur",
    socialLink: "",
    image: "https://picsum.photos/seed/tech/400/500"
  },
  {
    id: "02",
    name: "Dr. Nousheen Zaidi",
    title: "Environmental Health Researcher",
    socialLink: "https://www.linkedin.com/in/nousheen-zaidi-83129420a/",
    image: "https://picsum.photos/seed/science/400/500"
  },
  {
    id: "03",
    name: "Dr. Bushra Nisar Khan",
    title: "Academic & Zoology Researcher, Punjab University",
    socialLink: "https://www.researchgate.net/profile/Bushra-Khan-21",
    image: "https://picsum.photos/seed/nature/400/500"
  },
  {
    id: "04",
    name: "Muhammad Danial",
    title: "Digital Content Creator",
    socialLink: "https://www.instagram.com/m1danial/",
    image: "https://picsum.photos/seed/creator/400/500"
  },
  {
    id: "05",
    name: "Hamera Aisha",
    title: "Wildlife Conservationist, WWF Pakistan",
    socialLink: "https://www.linkedin.com/in/hamera-aisha-06ab4758/",
    image: "https://picsum.photos/seed/wildlife/400/500"
  },
  {
    id: "06",
    name: "Iftikhar Thakur",
    title: "Actor, Comedian & Philanthropist",
    socialLink: "",
    image: "https://picsum.photos/seed/finance/400/500"
  },
  {
    id: "07",
    name: "Dr. Ridah Khan",
    title: "Medical Doctor, Broadcaster & TV Presenter",
    socialLink: "",
    image: "https://picsum.photos/seed/aesthetic/400/500"
  }
];
