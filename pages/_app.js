import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";


function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title="Vishal Maurya"
				titleTemplate="Vishal Mauryal"
				defaultTitle="Vishal Maurya"
				description="I am a Frontend Developer based in India with a knack for building things. Through constant learning and creation, I produce aesthetic applications to the highest standard."
				canonical="https://v1shal.vercel.app/"
				openGraph={{
					url: "https://v1shal.vercel.app/",
					title: "Vishal Mauryal",
					description:
						"I am a Frontend Developer based in India with a knack for building things. Through constant learning and creation, I produce aesthetic applications to the highest standard.",
					images: [
						{
							url: "/portfolio.png",
							width: 800,
							height: 420,
							alt: "Vishal Maurya",
						},
					],
				}}
				twitter={{
					handle: "@v1shalm",
					site: "@v1shalm",
					cardType: "summary_large_image",
				}}
			/>
			<ThemeProvider attribute="class" enableSystem={true}>
				<Navigation />
				<Component {...pageProps} />
				<Analytics />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
