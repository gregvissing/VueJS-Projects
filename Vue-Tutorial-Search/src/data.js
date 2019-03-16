export let technologies = {
  angular: { label: "AngularJS", color: "#dd0031" },
  node: { label: "NodeJS", color: "#8bc849" },
  python: { label: "Python", color: "#fdcd3d" },
  react: { label: "React", color: "#06c4f9" },
  ror: { label: "Ruby on Rails", color: "#961122" },
  vue: { label: "VueJS", color: "#41b883" },
  webpack: { label: "Webpack", color: "#1d71b2" }
}

export let tutorials = [
  {
    title: "A Better Way to Learn Angular 2",
    url: "https://thinkster.io/tutorials/learn-angular-2",
    datePublished: "2017-05-01",
    description: "The de facto roadmap for learning Angular 2. This tutorial series will teach you Angular 2's fundamental concepts paired with real world examples, descriptions, and screencasts.",
    tech: ["angular"]
  },
  {
    title: "Building Real World, Production Quality Apps with React and Redux",
    url: "https://thinkster.io/tutorials/build-a-real-world-react-redux-application",
    datePublished: "2017-05-01",
    description: "While most tutorials online cover the basics of React, Redux, and other tools individually, the purpose of this tutorial is to cover all of them in a cohesive manner.",
    tech: ["react"]
  },
  {
    title: "Learn to Build Modern Web Apps with AngularJS and Ruby on Rails",
    url: "https://thinkster.io/tutorials/angular-rails",
    datePublished: "2017-05-01",
    description: "The goal of this tutorial is to guide you through the creation of a Reddit/Hacker News clone using Rails 4 and AngularJS. By completing this tutorial, you will gain a basic understanding of Rails and AngularJS, using Rails to build a JSON REST API that interacts with an AngularJS frontend.",
    tech: ["angular", "ror"]
  },
  {
    title: "Tutorial: Intro To React",
    url: "https://facebook.github.io/react/tutorial/tutorial.html",
    datePublished: "2017-04-11",
    description: "Today, we're going to build an interactive tic-tac-toe game. We will be learning how to build this game step by step throughout this tutorial.",
    tech: ["react"]
  },
  {
    title: "Create Element Transitions with Vue.js",
    url: "http://codepen.io/Splode/post/create-element-transitions-with-vue-js",
    datePublished: "2017-04-10",
    description: "Vue.js (Vue) offers a simple way to transition between elements on the page, allowing for either simple transitions between CSS properties or complex animations (or both!). In this example I'll demonstrate the basics of Vue transitions by creating a menu-expand toggle button.",
    tech: ["vue"]
  },
  {
    title: "A Vue.js introduction for people who know just enough jQuery to get by",
    url: "https://medium.freecodecamp.com/vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77",
    datePublished: "2017-04-10",
    description: 'I\'ll take readers — who are presumed to have some level of proficiency with JavaScript fundamentals and jQuery — on a journey through the world of VueJS as we build a clone of Twitter’s "compose tweet" component.',
    tech: ["vue"]
  },
  {
    title: "How To Develop An Interactive Command Line Application Using Node.js",
    url: "https://www.smashingmagazine.com/2017/03/interactive-command-line-application-node-js/",
    datePublished: "2017-03-14",
    description: "Writing command line tools has also become easier than ever before because of Node.js — not just any command line tools, but tools that are interactive, useful and less time-consuming to develop.",
    tech: ["node"]
  },
  {
    title: "Webpack: A Detailed Introduction",
    url: "https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/",
    datePublished: "2017-02-21",
    description: "JavaScript module bundling has been around for a while. RequireJS had its first commits in 2009, then Browserify made its debut, and since then several other bundlers have spawned across the Internet. Among that group, webpack has jumped out as one of the best. If you’re not familiar with it, I hope this article will get you started with this powerful tool.",
    tech: ["webpack"]
  },
  {
    title: "Build Your First React.js App",
    url: "https://egghead.io/courses/build-your-first-react-js-application",
    datePublished: "2017-01-24",
    description: "When you've completed this series you will have built a full-blown web application using React, and should have the tools needed to start building your own applications today.",
    tech: ["react"]
  },
  {
    title: "Invent Your Own Computer Games with Python",
    url: "https://inventwithpython.com/chapters/",
    datePublished: "2016-12-17",
    description: "Programming isn't hard. But it is hard to find learning materials that teach you to do interesting things with programming. This book will teach you how to program your own computer games. You'll learn a useful skill and have fun games to show for it!",
    tech: ["python"]
  },
  {
    title: "Multi-Line Lambdas in Python",
    url: "https://programmingideaswithjake.wordpress.com/2016/10/01/multi-line-lambdas-in-python/",
    datePublished: "2016-10-01",
    description: "I love Python, but I am able to see plenty of faults with it. In this article, I attempt to provide a very roundabout way of working around one of those faults: the lack of multi-line lambdas.",
    tech: ["python"]
  },
  {
    title: "React Tutorial: Cloning Yelp",
    url: "https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/",
    datePublished: "2016-05-19",
    description: "This post will guide you through building a full React app, even with little to no experience in the framework. We're going build a Yelp clone in React",
    tech: ["react", "node"]
  },
  {
    title: "Learn Vuex by Building a Notes App",
    url: "https://coligo.io/learn-vuex-by-building-notes-app/",
    datePublished: "2016-04-20",
    description: "In this tutorial we'll be learning how to use Vuex in our VueJs projects by building a notes application. We'll briefly go over what Vuex is, when to use it, and how to structure your project for use with a Vuex application.",
    tech: ["vue"]
  },
  {
    title: "Snake with Pygame",
    url: "https://pythonspot.com/en/snake-with-pygame/",
    datePublished: "2016-03-21",
    description: "In this tutorial you will learn how to build the game snake.  The game is an arcade game and it has very simple logic, which is why it is an ideal example to demonstrate how to build games with Pygame.",
    tech: ["python"]
  },
  {
    title: "A Guide For Building A React Redux CRUD App",
    url: "https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f",
    datePublished: "2016-03-06",
    description: 'In this blog I\'ll provide a general approach on how to build a Blog app that has 3 pages and show navigate between them. Further, I\'ll also establish a pattern for making async requests and handling four async states: "loading", "success", "error" and "success-and-navigate".',
    tech: ["react"]
  },
  {
    title: "Building Your Second React.js App",
    url: "https://medium.com/learning-new-stuff/building-your-second-react-js-app-eb66924b3774",
    datePublished: "2016-01-30",
    description: "This is the second post in a series of tutorials on React.js. The first one took you through building a very simple profile page with the popular Javascript library. This time we'll introduce some more basic concepts: State, Event handlers, Component life cycles, React & API's",
    tech: ["react"]
  },
  {
    title: "Build AirBnb with Ruby on Rails, Bootstrap, jQuery and PayPal",
    url: "https://code4startup.com/projects/airalien-clone-airbnb-with-ruby-on-rails-bootstrap-jquery-and-paypal",
    datePublished: "2015-12-08",
    description: "In this project, I will walk you through steps to develop app like AirBnb with core functionalities from scratch. ",
    tech: ["ror"]
  },
  {
    title: "A Comprehensive Guide to Test-First Development with Redux, React, and Immutable",
    url: "http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html",
    datePublished: "2015-09-10",
    description: "This tutorial will guide you through building a full-stack Redux and Immutable-js application from scratch. We'll go through all the steps of constructing a Node+Redux backend and a React+Redux frontend for a real-world application, using test-first development.",
    tech: ["react", "node", "webpack"]
  },
  {
    title: "Let's Build: Instagram (With Ruby on Rails)",
    url: "https://www.devwalks.com/lets-build-instagram-in-rails-part-1/",
    datePublished: "2015-06-30",
    description: "Follow along and together we'll build awesome applications that will build your competence through glorious repetition and embracing the skills that employers want.",
    tech: ["ror"]
  },
  {
    title: "How to build a Pinterest Clone in Rails 4",
    url: "https://www.youtube.com/watch?v=abcnfFS_DS8",
    datePublished: "2014-09-27",
    description: 'Week 4 of my 12 Web Apps in 12 Weeks. This week I built a Pinterest like application with users, pins, image uploading, and "likes". ',
    tech: ["ror"]
  },
  {
    title: "Hacking Secret Ciphers with Python",
    url: "https://inventwithpython.com/hacking/chapters/",
    datePublished: "2013-04-14",
    description: "Movies and TV shows always make hacking look like magic. It's not magic. It's based on computers, and it's not hard to learn. This book assumes you know nothing about cryptography or programming, and helps you learn, step by step, how to write programs that can hack encrypted messages.",
    tech: ["python"]
  },
  {
    title: "Build a Dropbox-like File Sharing Site with Ruby on Rails",
    url: "https://code.tutsplus.com/tutorials/build-a-dropbox-like-file-sharing-site-with-ruby-on-rails--net-17940",
    datePublished: "2011-01-30",
    description: "In this Tuts+ Premium tutorial, we'll learn how to build a file-sharing web application, like Dropbox, using Ruby on Rails.",
    tech: ["ror"]
  }
]

export let designations = [{
	area: "Neurology",
	center: "General Neurology",
	fund: "Albert Barnes Voorheis",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Neuromuscular Center",
	fund: "ALS Research",
	bbisHierarchy: "d1b14e18-0b9c-4c0e-8a19-5555cef86abc"
}, {
	area: "Psychiatry and Mood",
	center: "UC Memory Disorders Center",
	fund: "Alzheimer Research Fund - Psychiatry",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Memory Disorders Center",
	fund: "Alzheimer's Disease Center Fund",
	bbisHierarchy: "b1d9b975-661d-46b1-9128-e2aa3c5404a0"
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "Anna and Harold W. Huffman Endowed Chair in Glioblastoma Experimental Therapeutics",
	bbisHierarchy: "c6b86fb9-0322-48ac-b2ba-efa0c9746399"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Anonymous Psychiatry",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Memory Disorders Center",
	fund: "Bob and Sandy Heimann Endowed Chair in Research and Education of Alzheimers Disease",
	bbisHierarchy: "41be79ba-4b39-470c-920b-89848fad0070"
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "Brain Tumor Center Fund",
	bbisHierarchy: "bc52afc5-763d-4df1-a642-2de08695e61c"
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "Brain Tumor Center Marketing Fund",
	bbisHierarchy: "ecc94d60-094f-4f37-802a-03f1f7edd88c"
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "Brain Tumor Patient Care Fund",
	bbisHierarchy: "3e4dabb6-00bf-4b2b-9c7e-1a5171027ea1"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Caleb C. Whitaker, III Fund for Progressive Supranuclear Palsy",
	bbisHierarchy: "a18a5a8c-938a-4867-ac76-3c7c62cba65e"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Center for Treatment, Research and Education in Addictive Disorders Fund",
	bbisHierarchy: "d456943e-0977-4ca2-afb2-0b28fb248214"
}, {
	area: "Psychiatry and Mood",
	center: "UC Stress Center",
	fund: "Chris T. Sullivan Foundation PTSD Fund",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Cincinnati Woman's Club Visiting Lectureship Series",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "College of Medicine Neurology Fund",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "D. L. Kline Neuroscience Fund",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Department of Psychiatry Education Fund",
	bbisHierarchy: "d64c6268-cfd1-495f-9855-7d65a889e43c"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Dr. Stanley and Mickey Kaplan Endowed Chair in Psychiatry",
	bbisHierarchy: "aab62104-d8c8-48e3-be2b-9eb939d7a72d"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Dr. Stanley and Mickey Kaplan Endowment Fund",
	bbisHierarchy: "b23d1507-2cde-4e68-92a0-a2f0ecdb4078"
}, {
	area: "Neurology",
	center: "UC Waddell Center for Multiple Sclerosis",
	fund: "Dr. William G. and Rosemary R. Ansley Endowment Fund",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Ellen and Stewart B. Dunsker, MD Award for Clinical Research",
	bbisHierarchy: "ed7d9966-db46-4eac-8f37-27ee2aff7a51"
}, {
	area: "Neurology",
	center: "UC Epilepsy Center",
	fund: "Epilepsy Center Discretionary Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Epilepsy Center",
	fund: "Epilepsy Center Fund",
	bbisHierarchy: "94d7acf4-8bf3-4915-bd6e-0509ecb6db04"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Family Medicine and Psychiatry Dual Training Program Endowment Fund",
	bbisHierarchy: "e94124e5-ca82-4a85-85ef-d46fd8ab11eb"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Fibromyalgia and Chronic Pain Research Fund",
	bbisHierarchy: "96ac396d-0199-48ee-83d5-f1c98a7e2e3c"
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Frank H. Mayfield Endowed Chair for Neurological Surgery",
	bbisHierarchy: "4be3a4f6-afcb-4d7e-94a8-a9d0d09f7158"
}, {
	area: "Neurology",
	center: "General Neurology",
	fund: "Samaha Education Fund",
	bbisHierarchy: "9e22e1bf-4097-452a-aeb8-5dc56293b47f"
}, {
	area: "Psychiatry and Mood",
	center: "UC Memory Disorders Center",
	fund: "Fred W. Weisman Fund",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Gabriella and Mario Zuccarello, MD Skull Base Endowment Fund",
	bbisHierarchy: "c59c4721-94ed-4700-96dc-02c2ab3e1fb4"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Gardner Center Patient Care Fund",
	bbisHierarchy: ""
}, {
	area: "UC Gardner Neuroscience Institute",
	center: "UC Gardner Neuroscience Institute",
	fund: "Gardner Center UCGNI Programmatic Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "George and Elizabeth Wile Research Fund in Parkinson's",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "Glioblastoma Therapeutics Research Fund",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "Harold C. Schott Endowed Brain Tumor Molecular Therapeutics Chair Fund",
	bbisHierarchy: "747da4ff-8592-40ba-819e-986bb710f57c"
}, {
	area: "Neurology",
	center: "General Neurology",
	fund: "Harry M. Salzer, M.D., Memorial Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Epilepsy Center",
	fund: "Heldman Family Fund for Epilepsy",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Waddell Center for Multiple Sclerosis",
	fund: "Heldman Family Fund for Multiple Sclerosis",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Helen Stemen Ruder Fund in Neuroscience",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Henry A. Nasrallah, M.D. Endowed Lectureship Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "James J. and Joan A. Gardner Family Center for Par…n's Disease and Movement Disorders Endowment Fund",
	bbisHierarchy: "c4a3e57c-d1a6-47ad-9a2e-a00130a383ee"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "James J. and Joan A. Gardner Family Center for Parkinson's Disease and Movement Disorders Gift Fund",
	bbisHierarchy: "ee7acd86-870d-44bc-8a27-7d2db28ade8b"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "James J. and Joan A. Gardner Family Center for Parkinson's Disease Basic Research Endowment Fund",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "John Forsthoefel for Glioblastoma Research Fund",
	bbisHierarchy: "82a47cae-2ac1-4f80-b00e-979a49f482ad"
}, {
	area: "Neurosurgery",
	center: "",
	fund: "John M. Tew, MD Chair in Neurosurgical Oncology",
	bbisHierarchy: "fbaf5b55-b5da-4a92-bf0a-b07804014d71"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Josh E. Levine Foundation Bearcat Support Network Fund",
	bbisHierarchy: "6d241966-ba90-4548-8182-0595344b7816"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Kaplan Endowment",
	bbisHierarchy: "0ca9068d-0981-46c4-8824-f48fc32c969f"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Kaplan Fund in the Department of Psychiatry",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Kerman Family Fund for Parkinson's Research",
	bbisHierarchy: "4a3564a0-a33a-4da3-8198-48bbf1af27bc"
}, {
	area: "Neurology",
	center: "General Neurology",
	fund: "List Dr Walter",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Loren Braun Schizophrenia Research Endowment Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Louise and Raymond Koenig Fellowship Fund in Neurodegenerative Disorders",
	bbisHierarchy: "22a728d7-19eb-486c-a22e-7679207cc548"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Lurie Family Dementia Prevention Laboratory Fund",
	bbisHierarchy: "c2a46177-c63a-42f0-90c9-e4093555e646"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Lurie Psychiatric Lecture Series",
	bbisHierarchy: "3a335889-2789-4ff8-87e3-13a8efc7c5d7"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Martha Aden, MD Psychiatry Champion Award Fund",
	bbisHierarchy: "33c86a21-cf5f-4296-8bfb-9420d1cdcdfb"
}, {
	area: "Psychiatry and Mood",
	center: "UC Memory Disorders Center",
	fund: "Memory Disorders Center Fund",
	bbisHierarchy: "2c6958c6-a903-4fbe-ae32-d3c5613326ea"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Meriwether Gilmore Bipolar Research Fund",
	bbisHierarchy: "46e807f8-bfcb-40d4-b078-9ed6f4403631"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Mood Disorders Center of Excellence Fund",
	bbisHierarchy: "fcc8399e-351e-4d3f-bea4-cf42bc45d3c4"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Movement Disorders Educational and Professional Development Fund",
	bbisHierarchy: "55654c71-485a-44fa-9ec7-526ea801f8fe"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Movement Disorders Fellowship Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Movement Division Discretionary Fund",
	bbisHierarchy: "b1d8c5aa-ce10-421a-aba0-92dbad2a2a63"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Movement Education Fund",
	bbisHierarchy: "42353ba8-2e2e-41e6-9065-86c039b3bfd4"
}, {
	area: "Neurology",
	center: "UC Neurocritical Care Program",
	fund: "Neurocritical Care Fund",
	bbisHierarchy: "b5adb721-99d6-479e-8c78-fb519d7ad271"
}, {
	area: "Neurology",
	center: "General Neurology",
	fund: "Neurology Discretionary Fund",
	bbisHierarchy: "fdff223e-3661-433d-9c61-d7f4d9bd0a0a"
}, {
	area: "Neurology",
	center: "UC Neuromuscular Center",
	fund: "Neuromuscular Gift Fund",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Neuroscience Day Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "General Neurology",
	fund: "Neuroscience Institute Discretionary Fund",
	bbisHierarchy: "f62bf739-3349-4c1c-9634-ce6dde603fed"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Neuroscience Research Fund",
	bbisHierarchy: "7bba7329-6753-45a7-80c6-4580ffa8965a"
}, {
	area: "Neurology",
	center: "UC Neurocritical Care Program",
	fund: "Neuroscience Sponsored Programs",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Neurosurgery Discretionary Fund",
	bbisHierarchy: "39c2d73a-9b78-4272-a1f0-d220f1c797a3"
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Neurosurgery Fund",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Neurosurgery Fund",
	bbisHierarchy: "f45bf724-ff1e-4c21-bf7b-57d36e0ec94d"
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Neurosurgery Research Fund",
	bbisHierarchy: "b2128050-bdda-45e4-8afd-cf0a0ccac81b"
}, {
	area: "Neurology",
	center: "UC Comprehensive Stroke Center",
	fund: "Northern Kentucky Stroke Team Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Epilepsy Center",
	fund: "Pamela and Charles L. Shor Foundation for Epilepsy Research Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Parkinson's Basic Research Fund",
	bbisHierarchy: "b9266c56-52ed-4c6e-81c3-a62b34e52f48"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Parkinson's Patient Diagnostic Genetic Assistance",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Parkinson's Disease Rehab Conference Center",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Parkinson Research",
	bbisHierarchy: "934a7dd8-ede5-4aff-81e2-7823df7800de"
}, {
	area: "Neurology",
	center: "Physical Medicine and Rehabilitation",
	fund: "Physical Medicine and Rehabilitation Discretionary Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Precision Medicine Neurodegenerative Disease Fund",
	bbisHierarchy: "0e01b50b-e0e7-4970-bfd0-8ae97e1b5745"
}, {
	area: "Neurology",
	center: "UC Comprehensive Stroke Center",
	fund: "Princeton Conference Fund",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Professor Partnership Fund - J.A. Wilson Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Physical Medicine and Rehabilitation",
	fund: "Professor Rehab Qi*",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Physical Medicine and Rehabilitation",
	fund: "Professorship of Rehabilitation and Comprehensive Medicine Fund",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Psychiatry-Centers of Excellence Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Physical Medicine and Rehabilitation",
	fund: "Resident Enrichment Fund - PM&R",
	bbisHierarchy: ""
}, {
	area: "UC Gardner Neuroscience Institute",
	center: "UC Gardner Neuroscience Institute",
	fund: "Rieveschl Endowment for the Neuroscience Institute",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Comprehensive Stroke Center",
	fund: "Robert Rogan & Cooper Livingston Burchenal Fund",
	bbisHierarchy: "37e89a80-33f8-4ad9-a2c6-5a3b75c08e9e"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Rockefeller Foundation Fund on Psychiatry",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "General Neurology",
	fund: "Samuel A. Trufant and John G. Quinlan Award in Neurology Fund",
	bbisHierarchy: "83abadec-b284-4c91-9ed8-68aa6ee35bd3"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Schizophrenia Program Fund",
	bbisHierarchy: "ae81118b-4fd7-4330-a3c4-a1c8a131df8d"
}, {
	area: "UC Gardner Neuroscience Institute",
	center: "UC Gardner Neuroscience Institute",
	fund: "Scripps Fund for the Neuroscience Institute",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "Selma Schottenstein Harris Lab for Research in Parkinson's",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Stephen M. Strakowski, MD Research Award Fund",
	bbisHierarchy: "7635eca2-d7e7-4f42-8c11-23e36405f39a"
}, {
	area: "Neurology",
	center: "UC Waddell Center for Multiple Sclerosis",
	fund: "Strikeout MS Fund",
	bbisHierarchy: "c20165c2-f457-47e3-aa92-1e59dd980e6f"
}, {
	area: "Neurology",
	center: "UC Comprehensive Stroke Center",
	fund: "Stroke Research",
	bbisHierarchy: "5b8d2a36-7a0d-48c5-840c-4bdfbbc2181d"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "Susie Friedlander",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "The African American Youth Wellness Fund",
	bbisHierarchy: "7ad21543-d0f7-4d6c-a1e9-47c2e6850ac8"
}, {
	area: "Psychiatry and Mood",
	center: "UC Memory Disorders Center",
	fund: "The Dorothy Wood Whitaker and D. Elizabeth Price Chair for Brian Health",
	bbisHierarchy: "847f3404-1980-44f9-af94-b1d458f26014"
}, {
	area: "Psychiatry and Mood",
	center: "UC Mood Disorders Center",
	fund: "The Dr. Douglas Mossman Memorial Award Fund",
	bbisHierarchy: "7a086103-3875-4ff6-8e72-d6585dabc0da"
}, {
	area: "UC Gardner Neuroscience Institute",
	center: "UC Gardner Neuroscience Institute",
	fund: "The Joseph P. Broderick, MD Endowed Research Fund",
	bbisHierarchy: "07b46330-92c0-4cec-8d6d-4cde2c8bbe84"
}, {
	area: "Neurosurgery",
	center: "UC Neurotrauma Center",
	fund: "The Neurotrauma Development Fund",
	bbisHierarchy: "a22ca2be-391a-4762-a011-64706cfe529e"
}, {
	area: "Neurology",
	center: "General Neurology",
	fund: "The Oliver Family Neurorecovery Lab Fund",
	bbisHierarchy: "493ef968-0ffa-47ca-90df-2300c7e1ef85"
}, {
	area: "Neurology",
	center: "Physical Medicine and Rehabilitation",
	fund: "The Rehabilitation Research and Community Service Fund",
	bbisHierarchy: "b5d48aa3-a11e-49d5-8705-6b445bed9702"
}, {
	area: "Neurosurgery",
	center: "General Neurosurgery",
	fund: "Thoracic Cervical Vertebral Bodies Research Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Physical Medicine and Rehabilitation",
	fund: "UC Department of Physical Medicine and Rehabilitation Resident Academic Excellence Award Fund",
	bbisHierarchy: ""
}, {
	area: "UC Gardner Neuroscience Institute",
	center: "UC Gardner Neuroscience Institute",
	fund: "UC Gardner Neuroscience Institute Building Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Neurocritical Care Program",
	fund: "UC Gardner Neuroscience Institute Fund",
	bbisHierarchy: "05efd8f0-0417-4d14-b664-557ed44bafba"
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Neuromuscular Center",
	fund: "UCGNI ALS Clinic Fund",
	bbisHierarchy: ""
}, {
	area: "Psychiatry and Mood",
	center: "UC Stress Center",
	fund: "UCHF Joey Votto Military Family Stress Disorders Program",
	bbisHierarchy: ""
}, {
	area: "Neurosurgery",
	center: "UC Brain Tumor Center",
	fund: "UCMC Brain Tumor Center Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "UCMC Davis Phinney Parkinson's Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "UCMC Farmer Family Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "Gardner Family Center for Parkinson's Disease and Movement Disorders",
	fund: "UCMC Gardner Nurse Navigator Endowment",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Waddell Center for Multiple Sclerosis",
	fund: "Waddell Center Discretionary Fund",
	bbisHierarchy: "9bc6d14c-1d8c-46a6-bd22-29751ea96ec1"
}, {
	area: "Neurology",
	center: "UC Waddell Center for Multiple Sclerosis",
	fund: "Waddell Center Start Up Fund",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Waddell Center for Multiple Sclerosis",
	fund: "Waddell Chair in Multiple Sclerosis",
	bbisHierarchy: ""
}, {
	area: "Neurology",
	center: "UC Waddell Center for Multiple Sclerosis",
	fund: "Waddell Endowment Fund",
	bbisHierarchy: ""
}]