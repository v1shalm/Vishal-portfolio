import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";




export default function Home() {
	return (
		<div className="space-y-14 lg:space-y-24">
			<Head>
				<title>Vishal maurya</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="max-w-4xl mx-auto mt-16 antialiased">
				<Hero />
				<Projects />
			</main>
		</div>
	);
}
