const sectionCards = document.querySelector("section.cards");
const card = document.querySelector("div.card");

function sections(a) {
  cleanPage(a);
  sectionHosting(a);
}

function sectionHosting(a) {
  devtools.map((devtool) => {
    const cardClone = card.cloneNode(true);
    if (a === devtool.section) {
      cardClone.querySelector("div").href = devtool.link;
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

function cleanPage() {
  sectionCards.innerHTML = "";
}


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
  ];