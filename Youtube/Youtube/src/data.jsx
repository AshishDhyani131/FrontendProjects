import img1 from "./assets/img1.jpg";
import person1 from "./assets/person1.jpg";
import img2 from "./assets/img2.jpg";
import person2 from "./assets/person2.jpg";
import img3 from "./assets/img3.jpg";
import person3 from "./assets/person3.jpg";
import img4 from "./assets/img4.jpg";
import person4 from "./assets/person4.jpg";
import img5 from "./assets/img5.jpg";
import person5 from "./assets/person5.jpg";
import img6 from "./assets/img6.jpg";
import person6 from "./assets/person6.jpg";
export const list = [
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 fill-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    desc: "Home",
    isActive: true,
  },
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    desc: "Shorts",
    isActive: false,
  },
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    ),
    desc: "Subscription",
    isActive: false,
  },
];
export const yourList = [
  {
    SVG: null,
    desc: `You`,
    isActive: false,
  },
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    desc: `Your Channel`,
    isActive: false,
  },
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    desc: `History`,
    isActive: false,
  },
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    desc: `Your videos`,
    isActive: false,
  },
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
    desc: `Watch later`,
    isActive: false,
  },
  {
    SVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    ),
    desc: `Show more`,
    isActive: false,
  },
];
export const sectionHeaderList = [
  {
    desc: "All",
    isActive: true,
  },
  {
    desc: "Gaming",
    isActive: false,
  },
  {
    desc: "CSS",
    isActive: false,
  },
  {
    desc: "News",
    isActive: false,
  },
  {
    desc: "Excercise Equipment",
    isActive: false,
  },
  {
    desc: "Computer Programming",
    isActive: false,
  },
  {
    desc: "Trailers",
    isActive: false,
  },
  {
    desc: "History",
    isActive: false,
  },
  {
    desc: "Mixes",
    isActive: false,
  },
  {
    desc: "Songs",
    isActive: false,
  },
  {
    desc: "Movies",
    isActive: false,
  },
  {
    desc: "Plays",
    isActive: false,
  },
  {
    desc: "football",
    isActive: false,
  },
];

export const mainBodyData = [
  {
    img: img1,
    person: person1,
    title: "Front end dev reacts to amazing CSS-only Codepens",
    name: "Kevin Powell",
    views: "1.5M",
    time: "2 years ago",
  },
  {
    img: img2,
    person: person2,
    title: "Top 5 NPS changes that everyone should now",
    name: "ET Money",
    views: "2M",
    time: "1 year ago",
  },
  {
    img: img3,
    person: person3,
    title: "PRINCE OF PERSIA SANDS OF TIME: Complete Walkthrough",
    name: "The Rad Brad",
    views: "805K",
    time: "3 months ago",
  },
  {
    img: img4,
    person: person4,
    title: "2024 Frontend Development Roadmap",
    name: "Kylie Jenner",
    views: "20M",
    time: "1 month ago",
  },
  {
    img: img5,
    person: person5,
    title: "Top 5 full body exercises to make your body fully shredded",
    name: "Cristopher Nolan",
    views: "5M",
    time: "3 years ago",
  },
  {
    img: img6,
    person: person6,
    title: "NASA hubble telescope captures image of black hole",
    name: "NASA official",
    views: "50M",
    time: "3 days ago",
  },
];
