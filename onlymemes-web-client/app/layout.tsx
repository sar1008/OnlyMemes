import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar/navbar";
import Leaders from "./leader/leader";
import { Nunito } from 'next/font/google'
import IconWithMusic from "./IconWithMusic/iconwithmusic";



export const metadata: Metadata = {
  title: "OnlyMemes",
  description: "Generated by create next app",
};

const roboto_mono = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <div className="container">
          <div className="nav-container">
            <Navbar/> {/* This will naturally be at the top */}
          </div>
          <div className="double-block">
            <div className="block">
              <p className="block-title">OnlyMemes</p>
              <p className="block-subtitle">...and memes only. <br />
              Sign in to share your meme collection, or give stars to the ones you like!
              Thumbnails are the same to prevent spoilers.
              Big surprise if you click Yao Ming below.</p>              
              {/* <img src="Yao.png" className="cube-icon" /> */}
              <IconWithMusic/> 
              {/* <p className="block-subtitle">click me for surprise</p> */}
              <div className="buttons-container">
                <button className="dark-button">
                  15  <img src="user.png" className="user-icon" alt="User"/>
                </button>
                <button className="dark-button">
                  30  <img src="yt.png" className="user-icon" alt="User"/>
                </button>
                <button className="dark-button">
                  60  <img src="star.png" className="user-icon" alt="User"/>
                </button>
              </div>
              <div className="intro-container">
                <img src="my-image.png" className="me-icon" alt="User"/>
                <div>
                  <p className="me-intro">Created by <span className="highlight">Yosun</span></p>
                  <p className="me-intro" color="gray">last updated: Mar 24, 2024</p>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="leader-container">
                <Leaders/>
              </div>
            </div>
          </div>
          {/* <Home/> */}
          {children}
        </div>
      </body>
    </html>
  );
}

