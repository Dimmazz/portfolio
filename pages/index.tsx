import Head from 'next/head'

import AboutMe from '../components/AboutMe/AboutMe'
import ContentViewer from '../components/ContentViewer/ContentViewer'
import Footer from '../components/Footer/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>MazuSad Portfolio</title>
        <meta name="description" content="Portfolio of Frontend Developer MazuSad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="./favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
      </Head>
      <div className="main-container">
        <header className="header">
          <AboutMe />
        </header>
        <main className="main">
          <ContentViewer />
        </main>
        <Footer />
      </div>
    </>
  )
}
