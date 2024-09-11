"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Landing from "@/Components/Landing";
import Header from "@/Components/Header";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const Wrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box; /* Ensures padding/margin is included in width calculation */
  display: flex;
  position: absolute;
`;
const More = styled.div`
  padding-top: 800px;
  height: 800px;
  display: block;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Header />
          <Landing />
        </Wrapper>
        <More>
          <p>More content...</p>
          <p>More content...</p>
          <p>More content...</p>
          <p>More content...</p>
          <p>More content...</p>
          <p>More content...</p>
        </More>
      </body>
    </html>
  );
}
