import React from "react";
import Image from "next/image";
import profile from "../public/static/profile.png";
import { motion } from "framer-motion";



const Hero = () => {
	return (
		<div className="container px-4 mx-auto relative ">
			<div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-left  ">
				<motion.div className="lg:px-4 lg:mt-12 bg-cover bg-hero-pattern  ">
					<h1 className="text-6xl  lg:text-8xl   font-extrabold  text-black dark:text-white  ">
						I enjoy{" "}
						<span className="text-transparent bg-clip-text bg-[#3B46F1]">
							building{" "}
						</span>{" "}
						and{" "}
						<span className="text-transparent bg-clip-text bg-[#66F270]">
							{" "}
							developing
						</span>{" "}
						for the web.
					</h1>
					<div className=" font-medium mt-6 text-gray-900 dark:text-white">
						<p className="  mb-4 lg:text-lg ">
							I am a Frontend Developer based in India with a knack for building
							things. Through constant learning and creation, I produce
							aesthetic applications to the highest standard.
						</p>
					</div>
				</motion.div>
			</div>

		</div>
	);
};

export default Hero;
