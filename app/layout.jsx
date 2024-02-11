import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Head from 'next/head'; // Import the Head component

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts"
}

const RootLayout = ({ children }) => {
 return (
  <>
    <Head>
      {/* Plausible Analytics Script */}
      <script
        defer
        data-domain="promptopia-pink-omega.vercel.app"
        src="https://plausible.io/js/script.js"
      ></script>
    </Head>
    <html lang='en'>
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
  </>
 )
}

export default RootLayout;
