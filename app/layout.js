import './../styles/globals.css'
import DarkModeSwitch from './components/DarkMoodSwitch'
import Footer from './components/home/Footer'
import Navbar from './components/Navbar'
import Providers from './Provider'

export const metadata = {
  title: 'POST MASTER',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body>
        <Providers>
          {/* Navbar */}
          <Navbar></Navbar>
          <div className='fixed top-1/3 bg-slate-500 px-4 py-2 w-15 h-10 right-0 rounded-l-lg border-2 dark:bg-yellow-400 justify-start items-center'>
            <DarkModeSwitch></DarkModeSwitch>
          </div>
          {children}

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
