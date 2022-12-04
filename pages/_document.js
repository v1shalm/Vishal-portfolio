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

					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://metatags.io/" />
					<meta
						property="og:title"
						content="Vishal Maurya - Frontend Developer"
					/>
					<meta
						property="og:description"
						content="I am a Frontend Developer based in India with a knack for building things. Through constant learning and creation, I produce aesthetic applications to the highest standard."
					/>
					<meta
						property="og:image"
						content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
					/>

					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://metatags.io/" />
					<meta
						property="twitter:title"
						content="Vishal Maurya - Frontend Developer"
					/>
					<meta
						property="twitter:description"
						content="I am a Frontend Developer based in India with a knack for building things. Through constant learning and creation, I produce aesthetic applications to the highest standard."
					/>
					<meta
						property="twitter:image"
						content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
					/>

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
