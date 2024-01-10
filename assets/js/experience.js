AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "data:image/png;base64,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",
    place: "Glific",
    time: "(May - August 2023)",
    desp: "<li>Spearheaded backend development initiatives, harnessing the power of Elixir, GraphQL, GCS, and Phoenix technologies at Glific resulting in 15+ PRs.</li> <li>Enhanced project accessibility and functionality by simplifying documentation, increasing template customization, optimizing data handling, enabling direct data transfer, improving team-centric communication, tailoring email addresses,    implementing precise flow sorting, enhancing test coverage, and streamlining project setup.</li>",
  },
  {
    title: "Web Development Intern",
    cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKddA2Ucwu2d0B_UqK_QBP5ppzwhiTWubv7MVZYOYRhQ&s",
    place: "Parivahan Sampda",
    time: "(Feb - May, 2023)",
    desp: "<li>Collaborated on a cross-functional team to develop a responsive web application for an automobile magazine. Additionally, actively contributed to code resolving over 10 critical issues, enhancing overall application stability.</li><li>Created an internal dashboard, reducing report generation time by 25 percent and significantly enhancing team productivity and efficiency.</li>",
  },
  // {
  //   title: "Research Intern",
  //   cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
  //   place: "IIT, Bombay",
  //   time: "(Dec, 19 - Jan, 20)",
  //   desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2023",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Participated and contributed in the prestigious GSSOC",
  },
  {
    title: "Code 4 Gov Tech 2023",
    cardImage: "https://static.wixstatic.com/media/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png/v1/fill/w_640,h_652,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png",
    description:
      "Selected for the second cohort to contribute technical expertise as a Software Development Engineer (SDE).",
  },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   // {
//   //   title: "LADC",
//   //   subtitle: "Core Team",
//   //   image: "assets/images/experience-page/uplift.png",
//   //   desp: "Core Member of Literacy and Debating Club",
//   // },
//   // {
//   //   title: "Entrepreurship Cell",
//   //   subtitle: "Senior Executive",
//   //   image: "assets/images/experience-page/ulhacks.png",
//   //   desp: "Senior Executive at Media team of E-Cell NIT Jalandhar",
//   //   // href: "https://ulhacks.com/",
//   // },
//   // {
//   //   title: "WaffleHacks",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/wafflehacks.png",
//   //   desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//   //   href: "https://wafflehacks.org/",
//   // },
//   // {
//   //   title: "Elevate Tech",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/elevate.png",
//   //   desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//   //   href: "https://elevatetech.codes/",
//   // },
//   // {
//   //   title: "PitchTeen",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/pitchteen.png",
//   //   desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
//   //   href: "https://www.linkedin.com/company/pitchteen/about/",
//   // },
//   // {
//   //   title: "Hack-A-Solution",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/hackasolution.png",
//   //   desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//   //   href: "https://hackasolution.devpost.com/",
//   // },
//   // {
//   //   title: "UniGlobe Hacks",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/uniglobe.png",
//   //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//   //   href: "https://uniglobe-hacks.devpost.com/",
//   // },
//   // {
//   //   title: "AtlasHacks",
//   //   subtitle: "Mentor",
//   //   image: "assets/images/experience-page/atlas.png",
//   //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//   //   href: "https://atlashacks2.devpost.com/",
//   // },
//   // {
//   //   title: "NeoHacks",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/neo.png",
//   //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//   //   href: "https://neohacks.org/",
//   // },
//   // {
//   //   title: "Mission Inspired",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/mission.png",
//   //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//   //   href: "https://www.missioninspired.org/hackathon",
//   // },
//   // {
//   //   title: "Hack3",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/hack3.png",
//   //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//   //   href: "https://hack3.co/",
//   // },
//   // {
//   //   title: "JITHack",
//   //   subtitle: "Mentor",
//   //   image: "assets/images/experience-page/jithack.png",
//   //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//   //   href: "https://jithack.netlify.app/",
//   // },
//   // {
//   //   title: "Recess Hacks",
//   //   subtitle: "Mentor",
//   //   image: "assets/images/experience-page/recess.png",
//   //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//   //   href: "https://recesshacks.com/",
//   // },
//   // {
//   //   title: "Citro Tech",
//   //   subtitle: "Mentor",
//   //   image: "assets/images/experience-page/citro.png",
//   //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//   //   href: "https://citro.tech/",
//   // },
//   // {
//   //   title: "NHacks",
//   //   subtitle: "Judge",
//   //   image: "assets/images/experience-page/nhacks.png",
//   //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//   //   href: "https://nhacks-vi.devpost.com/",
//   // },
// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp, href }) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="${href}" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
