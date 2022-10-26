/* eslint-disable @next/next/no-img-element */
import Image from "next/future/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { projects } from "../data/project";
import Link from "next/link";

export default function Projects() {
	return (
		<div className=" container px-4 mx-auto ">
			<div className="overflow-x-hidden w-full ">
				<h2 className=" max-w-max mx-0 text-left relative mt-16 mb-2 text-4xl lg:text-5xl font-bold md:w-max">
					{projects.title}
				</h2>
			</div>
			<p className="text-lg ">{projects.desc}</p>
			<div className=" mt-1">
				{projects.projects.map((item, index, image, tags) => {
					return (
						<div key={index} className="p-6  mb-6 hover:drop-shadow-xl">
							<div className="h-min overflow-hidden rounded-md ">
								<Image
									className=" hover:rounded-xl  hover:scale-105 transition-all duration-500 rounded-lg"
									src={item.image}
									width={900}
									height={500}
									layout="responsive"
									alt={projects.title}
								/>
							</div>
							<div className=" pl-2 mt-6">
								<a
									href={item.link}
									className="cursor-pointer hover:underline underline-offset-4"
									target="_blank"
									rel="noreferrer"
								>
									<h3 className="  lg:text-3xl text-2xl  group  font-medium flex flex-row gap-3 ">
										{item.title}
										<RiArrowRightUpLine
											size="1.2em"
											className="dark:text-[#d6d6d6] text-[#111111]   group-hover:rotate-45 transition duration-300 group-hover:translate-x-2"
										/>
									</h3>
								</a>
								<p className=" mb-2 mt-2 text-gray-800 dark:text-gray-200  text-lg">
									{item.desc}
								</p>
							</div>
							<div className=" m-2 mt-4 flex flex-1 gap-2 ">
								{item.tags.map((tags) => {
									return (
										<p
											key={tags}
											className=" text-sm lg:text-md  rounded-3xl	lg:py-3 py-2   px-3 lg:px-4 bg-[#262626] hover:bg-black dark:hover:bg-[#4e4e4e]  text-white  font-medium  transition duration-500 "
										>
											{tags}
										</p>
									);
								})}
							</div>

							<div className="flex items-center flex-wrap  pt-5  group  ">
								{item.link && (
									<a
										href={item.link}
										className="flex items-center rounded-full py-2 px-2 bg-[#262626] text-[#d9d9d9]  font-medium  hover:bg-[#151515]  dark:hover:bg-[#4e4e4e] transition duration-500 "
										target="_blank"
										rel="noreferrer"
									>
										<span className="ml-2 py-1 text-lightText  transition-colors duration-200 flex flex-row gap-3 ">
											{item.link.replace("https://", " ")}
											<RiArrowRightUpLine
												size="1.5em"
												color="#f6f6f6"
												className="mr-2 group-hover:rotate-45 transition duration-300 group-hover:translate-x-2"
											/>
										</span>
									</a>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
