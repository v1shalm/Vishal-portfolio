import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps }) {
	return (
		<>
				<ThemeProvider attribute="class" enableSystem={true}>
					<Navigation />
					<Component {...pageProps} />
					<Footer />
				</ThemeProvider>
		</>
	);
}

export default MyApp;
