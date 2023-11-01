"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RecoilRoot, useRecoilValue } from "recoil";
import { darkModeState } from '../app/atoms/recoil'
import DarkModeToggle from '@/components/darkModeToggle';
import Header from '../components/header';
import Link from 'next/link';
import "../app/styles/globals.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <RecoilRoot>
      <div className='px-24 pt-5'>
        <Header />
        <div>
          <Link href="/">
            <span>트렌딩</span>
          </Link>
          <Link href="/recent">
            <span>최신</span>
          </Link>
        </div>
      </div>
    </RecoilRoot>
  )
}
