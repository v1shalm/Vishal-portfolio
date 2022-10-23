import React from "react";
import Image from "next/image";
import profile from "../public/static/profile.png";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="container px-4 mx-auto relative ">
			<div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left ">
				<motion.div className="lg:px-4 lg:mt-12">
					<h1 className="text-6xl  lg:text-8xl  font-extrabold  text-black dark:text-white ">
						I enjoy{" "}
						<span className=" text-transparent bg-clip-text text-[#3b46f1]">
							{" "}
							building{" "}
						</span>
						and
						<span className=" text-transparent bg-clip-text text-[#66f270]">
							{" "}
							designing{" "}
						</span>{" "}
						for the web.
					</h1>
					<div className=" font-medium mt-6 text-gray-900 dark:text-white">
						<p className=" pl-2 mb-4 lg:text-lg ">
							I am a Frontend Developer based in India with a knack for building
							things. Through constant learning and creation, I produce
							aesthetic software to the highest standard.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
