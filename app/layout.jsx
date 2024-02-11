import '@styles/globals.css';
import Head from 'next/head';
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
    title: "Promptopia",
    description: "Discover and Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <Head>
        <script defer data-domain="promptopia-pink-omega.vercel.app" src="https://plausible.io/js/script.js"></script>
      </Head>
      <body>
        <Provider>
          <div className="main">
            <div className='gradient'/>
          </div>

          <main className="app">
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
