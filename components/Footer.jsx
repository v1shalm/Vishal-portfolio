import React from "react";
import Link from 'next/link'
import {RiArrowRightUpLine} from "react-icons/ri"

const Footer = () => {
	return (
		<div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
			<div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
				<div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
				<div className="flex flex-col justify-between lg:flex-row items-center">
					<p className="  text-xl font-bold uppercase">Vishal Maurya</p>
					<div className="flex  pt-2 sm:space-x-4 space-x-6 font-medium lg:pt-0">
						<a
							href="mailto:v1shalm1604@gmail.com"
							className="transition-colors hover:text-green-500 flex gap-1"
						>
							Email
							<RiArrowRightUpLine className="mt-1" />
						</a>
						<a
							href="https://twitter.com/v1shal0"
							className="transition-colors hover:text-green-500 flex gap-1"
							target="_blank"
							rel="noreferrer"
						>
							Twitter
							<RiArrowRightUpLine className="mt-1" />
						</a>
						<a
							href="https://www.linkedin.com/in/v1shalm"
							className="transition-colors hover:text-green-500 flex gap-1"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
							<RiArrowRightUpLine className="mt-1" />
						</a>
						<a
							href="https://github.com/v1shalm"
							className="transition-colors hover:text-green-500 flex gap-1 "
							target="_blank"
							rel="noreferrer"
						>
							GitHub
							<RiArrowRightUpLine className="mt-1" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
