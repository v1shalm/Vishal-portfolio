import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";


function MyApp({ Component, pageProps }) {
	return (
		<>
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
