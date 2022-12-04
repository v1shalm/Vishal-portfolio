/* eslint-disable react/no-unknown-property */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="title"
						content="Vishal Maurya — Frontend Developer based in India"
					/>
					<meta
						name="description"
						content="I am a Frontend Developer based in India with a knack for building things. Through constant learning and creation, I produce aesthetic applications to the highest standard."
					/>
					<meta property="og:image" content="../portfolio.png" />

					<meta
						name="google-site-verification"
						content="7FrX-8kUDgJAoy2kxK1EFCSF34HNK6cMo3PpKMmDjs4"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
