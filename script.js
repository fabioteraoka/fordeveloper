const sectionCards = document.querySelector("section.cards");
const card = document.querySelector("div.card");

// let show = true; 
// const menuSection = document.querySelector(".menu-section")
// const menuToggle = menuSection.querySelector(".menu-toggle")




function sections(a) {
  cleanPage(a);
  sectionHosting(a);

}
function follow(a){
  cleanPage(a);
  sectionFollow(a);
}

function sectionHosting(a) {
  devtools.map((devtool) => {
    const cardClone = card.cloneNode(true);
    if (a === devtool.section) {
      // cardClone.querySelector("div").href = devtool.link;
      cardClone.querySelector(".name").href = devtool.link;
      cardClone.querySelector(".name").innerHTML = devtool.name;
      cardClone.querySelector("h3").innerHTML = devtool.section;
      cardClone.querySelector("a").href = devtool.link;
    //   cardClone.querySelector("img").src = devtool.logo;
      cardClone.querySelector(".description").innerHTML = devtool.description;
      sectionCards.appendChild(cardClone);

    }
  });
  card.remove();
}

function sectionFollow(a) {
  devFollow.map((devFollow) => {
    const cardClone = card.cloneNode(true);
    if (a === devFollow.section) {
      // cardClone.querySelector("div").href = devFollow.link;
      cardClone.querySelector(".name").href = devFollow.link;
      cardClone.querySelector(".name").innerHTML = devFollow.name;
      cardClone.querySelector("h3").innerHTML = devFollow.rede;
      // cardClone.querySelector("a").href = devFollow.link;
      cardClone.querySelector("img").src = devFollow.logo;
      // cardClone.querySelector(".description").innerHTML = devFollow.description;
      sectionCards.appendChild(cardClone);

    }
  });
  card.remove();
}

function cleanPage() {
  sectionCards.innerHTML = "";
}

// Modal actions
// const modalOverlay = document.querySelector(".modal-overlay");
// const modal = document.querySelector(".modal");
// const cards = [...document.querySelectorAll(".cards .card")];

// cards.forEach(card => {
//   card.addEventListener("click", () => {
//     modal.querySelector(
//       "iframe"
//     ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
//     modalOverlay.classList.add("active");
//     modal.classList.add("active");
//     document.querySelector("body").style.overflow = "hidden";
//   });
// });

// document.querySelector(".close-modal").addEventListener("click", () => {
//   modalOverlay.classList.remove("active");
//   modal.classList.remove("active");
//   modal.querySelector("iframe").src = ``;
//   document.querySelector("body").style.overflow = "initial";
// });


const devtools = [
    {
      id: "001",
      name: "Netlify",
      section: "Hosting",
      link: "https://app.netlify.com/",
      logo: "./image/netlify.svg",
      description:
        "Netlify is an all-in-one platform for automating modern web projects. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow. Integrate dynamic functionality like serverless functions, user authentication, and form handling as your projects grow.",
    },
    {
      id: "002",
      name: "Heroku",
      section: "Hosting",
      link: "https://dashboard.heroku.com/",
      logo: "./image/heroku.svg",
      description:
        "Heroku is a platform as a service based on a managed container system, with integrated data services and a powerful ecosystem, for deploying and running modern apps. The Heroku developer experience is an app-centric approach for software delivery, integrated with today’s most popular developer tools and workflows.",
    },
    {
      id: "003",
      name: "Vercel",
      section: "Hosting",
      link: "https://vercel.com/",
      logo: "./image/vercel.svg",
      description:
        "Vercel combines the best developer experience with an obsessive focus on end-user performance.Our platform enables frontend teams to do their best work.",
    },
    {
      id: "004",
      name: "Unsplash",
      section: "Image",
      link: "https://unsplash.com/",
      logo: "./image/unsplash.svg",
      description:
        "Over 2 million free high-resolution images brought to you by the world’ s most generous community of photographers.",
    },
    {
      id: "005",
      name: "Undraw",
      section: "Image",
      link: "https://undraw.co/illustrations",
      logo: "./image/undraw.svg",
      description:"Browse to find the images that fit your needs and click to download. Use the on - the - fly color image generation to match your brand identity.",
    },
    {
        id: "006",
        name: "Pexels",
        section: "Video",
        link: "https://pexels.com",
        logo: "./image/pexels.svg",
        description:
          "The best free stock photos & videos shared by talented creators.",
      },
      {
        id: "007",
        name: "Coverr",
        section: "Video",
        link: "https://coverr.co",
        logo: "./image/coverr.png",
        description:"We consist of forward-looking videos, created to inspire, energize and support you.",
      },
      {
        id: "008",
        name: "Flaticon",
        section: "Icons",
        link: "https://Flaticon.com",
        logo: "./image/flaticon.png",
        description:"Flaticon is home to many talented icon designers. Each works in different styles and explores different concepts, so you can totally find the right icons for your project.",
      },
      {
        id: "009",
        name: "Icons8",
        section: "Icons",
        link: "https://icons8.com/animated-icons",
        logo: "./image/icons8.svg",
        description:"Icons, illustrations, photos, music, and design tools",
      },
      {
        id: "010",
        name: "Font Awesome",
        section: "Fonts",
        link: "https://fontawesome.com",
        logo: "./image/awesome.svg",
        description:"Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.",
      },
      {
        id: "011",
        name: "Google Fonts",
        section: "Fonts",
        link: "https://fonts.google.com/",
        logo: "./image/google.svg",
        description:"Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons, makes it easy to integrate expressive type and icons seamlessly—no matter where you are in the world.",
      },
      {
        id: "012",
        name: "FreePik",
        section: "Image",
        link: "https://www.freepik.com/",
        logo: "",
        description:"For personal and commercial use. Download in .AI and .EPS format.",
      },
      {
        id: "013",
        name: "FavIcon",
        section: "Generator",
        link: "http://tools.dynamicdrive.com/favicon/",
        logo: "",
        description:"Use this online tool to easily create a favicon (favorites icon) for your site. A favicon is a small, 16x16 image that is shown inside the browser's location bar and bookmark menu when your site is called up. It is a good way to brand your site and increase it's prominence in your visitor's bookmark menu.",
      },
      {
        id: "014",
        name: "IconFinder",
        section: "Icons",
        link: "https://www.iconfinder.com/",
        logo: "",
        description:"Filter through the world’s largest marketplace for icons with flexibility and ease. Made up by submissions from top designers around the world, and curated by our team.",
      },
      {
        id: "015",
        name: "Data",
        section: "Generator",
        link: "https://mockaroo.com/",
        logo: "",
        description:"It's hard to put together a meaningful UI prototype without making real requests to an API. By making real requests, you'll uncover problems with application flow, timing, and API design early, improving the quality of both the user experience and API. With Mockaroo, you can design your own mock APIs, You control the URLs, responses, and error conditions. Paralellize UI and API development and start delivering better applications faster today!",
      },
      {
        id: "016",
        name: "UUID",
        section: "Generator",
        link: "https://www.uuidgenerator.net/",
        logo: "",
        description:"The UUIDs generated by this site are provided AS IS without warranty of any kind, not even the warranty that the generated UUIDs are actually unique. You are responsible for using the UUIDs and assume any risk inherent to using them. You are not permitted to use the UUIDs generated by this site if you do not agree to these terms. Do not use any UUIDs found on cached versions of this page.",
      },
      {
        id: "017",
        name: "Webcode",
        section: "Generator",
        link: "https://webcode.tools/",
        logo: "",
        description:"Welcome to Web Code Tools; the best tools for web developers. Here, you’ll find code generators to help you with your front-end web projects. If you don't see something that you wish was here, send me an email and I'll do my best to create a tool for you.",
      },
      {
        id: "018",
        name: "Griddy",
        section: "Generator",
        link: "https://griddy.io/",
        logo: "",
        description:"CSS Grid Generator",
      },
      {
        id: "019",
        name: "CSSReference",
        section: "CSS",
        link: "https://cssreference.io/",
        logo: "",
        description:"Learn by example: cssreference.io is a free visual guide to CSS. It features the most popular properties, and explains them with illustrated and animated examples.",
      },
      {
      id: "020",
      name: "RocketSeat",
      section: "Learning",
      link: "https://app.rocketseat.com.br/",
      logo: "",
      description:"Evolua rápido como a tecnologia.",
      },
      {
        id: "021",
        name: "Learn to Code",
        section: "Learning",
        link: "https://learn.shayhowe.com/",
        logo: "",
        description:"Learn to Code HTML & CSS has one goal — to teach people how to build beautiful and intuitive websites by way of clear and organized lessons. The guide covers a variety of web design and development topics, ranging from beginner to advanced skill levels.",
      },
      {
        id: "022",
        name: "Free Code Camp",
        section: "Learning",
        link: "https://www.freecodecamp.org/",
        logo: "",
        description:"Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.",
      },
      {
        id: "023",
        name: "Mem Dev",
        section: "Learning",
        link: "https://www.mem.dev",
        logo: "",
        description:"We partnered up with the founder of JavaScript Mastery to make sure that you acquire and retain knowledge in the simplest way possible. JavaScript Mastery is baking mem.dev right into their educational content, helping you learn how to learn.",
      },
      {
        id: "024",
        name: "Figma",
        section: "Mockup",
        link: "https://www.figma.com",
        logo: "",
        description:"Explore files and plugins made just for Figma",
      },
      {
        id: "025",
        name: "Zeplin",
        section: "Mockup",
        link: "https://www.zeplin.io",
        logo: "",
        description:"We’re a small team from Istanbul and San Francisco, scratching our own itch. Thousands of product teams from all around the world use Zeplin to bring their ideas into life.",
      },
      {
        id: "026",
        name: "Awwards",
        section: "Design",
        link: "https://www.awwwards.com/websites",
        logo: "",
        description:"The awards of design, creativity and innovation on the internet",
      },
      {
        id: "027",
        name: "Dribbble",
        section: "Design",
        link: "https://www.dribbble.com",
        logo: "",
        description:"Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.",
      },
      {
        id: "028",
        name: "Exercism",
        section: "Learning",
        link: "https://www.exercism.io",
        logo: "",
        description:"We are working with our community and leading researchers to build a deeper understanding of how people code and think. We're using this knowledge to improve Exercism in order to provide opportunity for people of all backgrounds by helping them develop their programming skills through practice and mentorship.",
      },
      {
        id: "029",
        name: "Codewars",
        section: "Learning",
        link: "https://www.codewars.com/",
        logo: "",
        description:"Codewars is a collective effort by its users. They are creators - authoring kata to teach various techniques, solving kata with solutions that enlighten others, and commenting with constructive feedback. The leaders among them moderate the content and community.",
      },
      {
        id: "030",
        name: "CSS-trick",
        section: "CSS",
        link: "https://css-tricks.com/",
        logo: "",
        description:"These days CSS-Tricks is really about building websites and all that entails, mostly from a front-end perspective. We have staff writers (see below) and loads of guest authors, so the content you find here will be as diverse as they are.",
      },
      {
        id: "031",
        name: "Web Toolkit",
        section: "Generator",
        link: "https://www.webtoolkitonline.com/",
        logo: "",
        description:"This site web is a set of free online tools for helping development.",
      },
      {
        id: "032",
        name: "Stackedit",
        section: "Generator",
        link: "https://stackedit.io/",
        logo: "",
        description:"StackEdit’s Markdown syntax highlighting is unique. The refined text formatting of the editor helps you visualize the final rendering of your files.",
      },
      {
        id: "033",
        name: "CSS Stripes",
        section: "Generator",
        link: "https://stripesgenerator.com/",
        logo: "",
        description:"Stripes Generator",
      },
      {
        id: "034",
        name: "CSS Generator",
        section: "Generator",
        link: "https://cssgenerator.org/",
        logo: "",
        description:"A CSS generator that helps you demonstrate and quickly generate CSS declarations for your website. It comes with many useful generator tools with many options and they demonstrate instanly. Thus it also helps demonstrates many CSS properties in a visual understandable way. Please choose one of the tools above and then adjust the options accordingly. CSS declarations are just one click away.",
      },
      {
        id: "035",
        name: "Imgur",
        section: "Image",
        link: "https://imgurinc.com/",
        logo: "",
        description:"Imgur is the easiest way to discover and enjoy the magic of the Internet. It’s where you’ll find the funniest, most informative and inspiring images, memes, GIFs, and visual stories served up in an endless stream of bite-sized fun. Powered by a passionate community of people from all around the world, anyone can join to share cool stuff and vote the best to the top.",
      },
      {
        id: "036",
        name: "FlexBoxFroggy",
        section: "Learning",
        link: "https://flexboxfroggy.com/",
        logo: "",
        description:"Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code!",
      },
      {
        id: "037",
        name: "CSS Generator",
        section: "Generator",
        link: "https://css-generator.netlify.app/",
        logo: "",
        description:"CSS Generator netlify",
      },
      {
        id: "038",
        name: "Animista",
        section: "Generator",
        link: "https://animista.net/",
        logo: "",
        description:"ANIMISTA IS A PLACE WHERE YOU CAN PLAY WITH A COLLECTION OF PRE-MADE CSS ANIMATIONS, TWEAK THEM AND GET ONLY THOSE YOU WILL ACTUALLY USE.",
      },
      {
        id: "039",
        name: "Flex Boxes",
        section: "Generator",
        link: "https://the-echoplex.net/flexyboxes/",
        logo: "",
        description:"Flex Box Generator",
      },
      {
        id: "040",
        name: "CSSportal",
        section: "Generator",
        link: "https://www.cssportal.com/css-generators.php",
        logo: "",
        description:"CSS Portal is home to many examples of CSS and how it can be used in website design. Here you'll find all CSS properties and many CSS generators to help with all you design needs.",
      },
      {
        id: "041",
        name: "Behance",
        section: "Design",
        link: "https://www.behance.net/",
        logo: "",
        description:"Explore files and plugins made just for Figma",
      },
  ];
  


const devFollow =[
    {
      id: "001",
      name: "Filipe Deschamps",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwnjmOwHGXldA8NPXJ4vIFtA4334qT5fspJMPoM4p=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/FilipeDeschamps",
    },
    {
      id: "002",
      name: "Mayk Brito",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/HIRhY9TY7pQ4EV_D4pQkftk2kEN2oX1wCBCxSyxKNx7VzAZpooyqhOUEBqGBwSHg4ZK31eInYg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/user/maykbrito",
    },
    {
      id: "003",
      name: "Coding Addict",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/CodingAddict",
    },
    {
      id: "004",
      name: "Roger Melo",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwnin7qqRZkktm9OuLtuqqlFL0zKYLbA9zQlF3jLY=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/RogerMelo",
    },
    {
      id: "005",
      name: "Easy Tutorial",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwngJOnqXAjdaVpCXl1DqBr66FiWTUTwKIWRSpO12zg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/EasyTutorialsVideo",
    },
    {
      id: "006",
      name: "Dev Soutinho",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwngefd3vA7dfIMPOptyG2rPVD17f0EdrtBA52JoR=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/DevSoutinho",
    },
    {
      id: "007",
      name: "Rocketseat",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwniZFvNe5OEM2bTjcGRdH8fOW06pr9HYSJCwDPK_BA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/RocketSeat",
    },
    {
      id: "008",
      name: "Matheus Battisti",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwnhHu9X02gDe9blsLBUtFzLEQi20eWIRmfNVJGaR=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/MatheusBattisti",
    },
    {
      id: "009",
      name: "Origamid",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwnh0cnioinxq6vVaY0R9DLCfBv4Vi5VDJnSFnqe9=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/Origamid/",
    },
    {
      id: "010",
      name: "Ania Kubów",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwnjSRt8sIbeM7P--pHoUDh67sDhaNTCMF_XiNOCvUw=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/c/AniaKub%C3%B3w",
    },
    {
      id: "011",
      name: "Florin Pop",
      rede: "Youtube",
      section:"Follow",
      logo: "https://yt3.ggpht.com/ytc/AAUvwni7l--cxhsMtvLBc7eqUNgsFIW6rsAE7fbSt4fz=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/florinpop",
    },
    {
      id: "012",
      name: "Prathkum",
      rede: "twitter",
      section:"Follow",
      logo: "https://pbs.twimg.com/profile_images/1394348205794480129/mprRHH9b_400x400.jpg",
      link: "https://twitter.com/Prathkum",
    },
    {
      id: "013",
      name: "George Moller",
      rede: "twitter",
      section:"Follow",
      logo: "https://pbs.twimg.com/profile_images/1379109905311928322/E0YheLeY_400x400.jpg",
      link: "https://twitter.com/_georgemoller",
    },
    {
      id: "014",
      name: "richwebdeveloper",
      rede: "Instagran",
      section:"Follow",
      logo: "./image/richwebdeveloper.jpeg",
      link: "https://www.instagram.com/richwebdeveloper/",
    },
    {
      id: "015",
      name: "girl.coding",
      rede: "Instagran",
      section:"Follow",
      logo: "./image/girl.coding.jpg",
      link: "https://www.instagram.com/girl.coding/",
    },
    {
      id: "016",
      name: "matheusfc.dev",
      rede: "Instagran",
      section:"Follow",
      logo: "./image/matheusfc.dev.jpg",
      link: "https://www.instagram.com/matheusfc.dev/",
    },
    {
      id: "017",
      name: "papodedev",
      rede: "Instagran",
      section:"Follow",
      logo: "./image/papodedev.jpg",
      link: "https://www.instagram.com/papodedev/",
    },
    {
      id: "018",
      name: "makenicecode",
      rede: "Instagran",
      section:"Follow",
      logo: "./image/makenicecode.jpg",
      link: "https://www.instagram.com/makenicecode/",
    },
    {
      id: "019",
      name: "webapp_creator",
      rede: "Instagran",
      section:"Follow",
      logo: "./image/webapp_creator.jpg",
      link: "https://www.instagram.com/webapp_creator/",
    },
    {
      id: "020",
      name: "developerspace",
      rede: "Instagran",
      section:"Follow",
      logo: "./image/developerspace.jpg",
      link: "https://www.instagram.com/developerspace/",
    },
]
