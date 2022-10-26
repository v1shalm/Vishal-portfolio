import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Image from "next/future/image";
import useSWR from "swr";
import {SiSpotify} from 'react-icons/si'

export default function Home() {
	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data } = useSWR("/api/spotify", fetcher);
	return (
		<div className="space-y-14 lg:space-y-24">
			<Head>
				<title>Vishal maurya</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="max-w-4xl mx-auto mt-16 antialiased">
				{console.log(data)}
				<Hero />
				<Projects />
				<div className=" ">
					<a
						target="_blank"
						rel="noopener noreferer noreferrer"
						href={
							data?.isPlaying
								? data.songUrl
								: "https://open.spotify.com/user/mauryav518?si=3af39fdb2c3f4c44"
						}
						className="relative flex w-72 items-center space-x-4 rounded-md  p-5 transition-shadow hover:shadow-md"
					>
						<div className="w-16 flex justify-center items-center">
							{data?.isPlaying ? (
								<img
									className="w-16 rounded-md shadow-sm"
									src={data?.albumImageUrl}
									alt={data?.album}
								/>
							) : (
								<SiSpotify size={64} color={"#1ED760"} />
							)}
						</div>

						<div className="flex-1">
							<p className="component font-bold">
								{data?.isPlaying ? data.title : "Not Listening"}
							</p>
							<p className="font-dark text-xs">
								{data?.isPlaying ? data.artist : "Spotify"}
							</p>
						</div>
						<div className="absolute right-1.5 bottom-1.5">
							<SiSpotify size={20} color={"#1ED760"} />
						</div>
					</a>
				</div>
			</main>
		</div>
	);
}
