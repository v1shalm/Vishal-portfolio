import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navigation = () => {
	return (
		<motion.div
			// variants={navVariants}
			// initial="hidden"
			// whileInView="show"
			className="sticky top-0 z-20 py-2 bg-white  md:py-6 md:mb-6 dark:bg-black backdrop-filter backdrop-blur-lg  bg-opacity-30   border-b border-gray-100   dark:backdrop-filter  dark:backdrop-blur-lg  dark:bg-opacity-30"
		>
			<div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
				<Link
					href="/"
					className={
						"font-extrabold text-xl tracking-wider transition-colors text-gray-900 hover:text-red-500 uppercase dark:text-white"
					}
				>
					Vishal
				</Link>
				<ThemeSwitch />
			</div>
		</motion.div>
	);
};

export default Navigation;
