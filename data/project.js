import profile from "../public/static/profile.png";
import Convo from "../public/static/projects/Convo.png";

export const hero = {
	title: "Hey there! I'm Vishal Maurya.",
	desc: "I'm a web developer and designer building things people love.",
};

export const projects = {
	title: "Selected Projects",
	desc: "Here are some of my favorite projects that I've worked on.",
	projects: [
		{
			id: 0,
			title: "Snappy",
			desc: "Snappy is an image-sharing social media app built with ReactJS, TailwindCSS and Sanity. ",
			image: "/static/projects/snappy_1.png",
			link: "https://snappyy.netlify.app",
			tags: ["React", "TailwindCSS", "Sanity"],
		},

		{
			id: 1,
			title: "Blog app",
			desc: "A blog app made with Next Js, Tailwind CSS and GraphCMS.",
			image: "/static/projects/img1.png",
			link: "https://v1shalm-blog.vercel.app",
			tags: ["NextJS", "TailwindCSS", "GraphCMS" ],
		},

		{
			id: 2,
			title: "Sick Clothing",
			desc: "Ecommerce app built with Next.js , Sanity and Stripe.",
			image: "/static/projects/ecommerce.png",
			link: "https://sickclothing.vercel.app",
			tags: [ "NextJS", "TailwindCSS", "Sanity", "Stripe"],
		},
		{
			id: 3,
			title: "Youtube Clone",
			desc: "Youtube clone built with React.js , Material UI and Youtube API.",
			image: "/static/projects/Yt-clone.png",
			link: "https://clone-yt.vercel.app",
			tags: ["React", "Material UI", "API"],
		},

		{
			id: 4,
			title: "Searchify",
			desc: "A Google Search Clone made with React JS, Tailwind CSS and Google Search API.",
			image: "/static/projects/Searchify.png",
			link: "https://searchify-app.netlify.app",
			tags: ["React", "TailwindCSS", "API"],
		},

		// {
		// 	id: 0,
		// 	title: "Convo",
		// 	desc: "A Chat app made with React JS , Firebase with Social Authentication such as Google and Facebook.",
		// 	image: "/static/projects/Convo.png",
		// 	link: "https://conv0.netlify.app",
		// 	tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
		// },
	],
};

export const allprojects = {
	title: "All Projects",
	desc: "Here are some of my favorite projects that I've worked on.",
	projects: [
		{
			id: 0,
			title: "Snappy",
			desc: "Snappy is an image-sharing social media app built with ReactJS, TailwindCSS and Sanity. ",
			image: "/static/projects/snappy.png",
			link: "https://snappyy.netlify.app",
			tags: ["React", "NextJS", "SCSS", "API"],
		},

		{
			id: 1,
			title: "Sick Clothing",
			desc: "Ecommerce app built with Next.js , Sanity and Stripe.",
			image: "/static/projects/ecommerce.png",
			link: "https://sickclothing.vercel.app",
			tags: ["Node", "Javascript", "NPM", "HTML"],
		},

		{
			id: 2,
			title: "Youtube Clone",
			desc: "Youtube clone built with React.js , Material UI and Youtube API.",
			image: "/static/projects/Yt-clone.png",
			link: "https://clone-yt.vercel.app",
			tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
		},

		{
			id: 4,
			title: "Blog app",
			desc: "A blog app made with Next Js, Tailwind CSS and GraphCMS.",
			image: "/static/projects/img1.png",
			link: "https://v1shalm-blog.vercel.app",
			tags: ["HTML", "CSS", "Javascript", "Gumroad"],
		},
		{
			id: 5,
			title: "Searchify",
			desc: "A Google Search Clone made with React JS, Tailwind CSS and Google Search API.",
			image: "/static/projects/Searchify.png",
			link: "https://searchify-app.netlify.app",
			tags: ["React", "CSS", "JSON"],
		},

		{
			id: 6,
			title: "Convo",
			desc: "A Chat app made with React JS , Firebase with Social Authentication such as Google and Facebook.",
			image: "/static/projects/Convo.png",
			link: "https://conv0.netlify.app",
			tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
		},

		{
			id: 7,
			title: "Searchify",
			desc: "A Google Search Clone made with React JS, Tailwind CSS and Google Search API.",
			image: "/static/projects/Searchify.png",
			link: "https://searchify-app.netlify.app",
			tags: ["React", "CSS", "JSON"],
		},
	],
};

export const skill = {
	title: "My Stack",
	skills: [
		{
			title: "HTML",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		},
		{
			title: "CSS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		},
		{
			title: "Javascript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
		{
			title: "Sass",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
		},
		{
			title: "TailwindCSS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
		},
		{
			title: "React",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		},
		{
			title: "NextJS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
			style: { filter: "invert(1)" },
		},
		{
			title: "Typescript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		},
		{
			title: "NodeJS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		},
		{
			title: "Git",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		},
		{
			title: "Firebase",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
		},
		{
			title: "Figma",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
		},
	],
};

export const contact = {
	title: "Contact Me",
	email: "v1shalm1604@gmail.com",
	github: "@v1shalm",
	linkedin: "@v1shalm",
};
