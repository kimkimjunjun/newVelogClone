"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RecoilRoot, useRecoilValue } from "recoil";
import { darkModeState } from '../atoms/recoil'
import DarkModeToggle from '@/components/darkModeToggle';
import Header from '../../components/header';
import "../styles/globals.css";

const inter = Inter({ subsets: ['latin'] })

export default function RecentPage() {

    return (
        <RecoilRoot>
            <div className='px-24 pt-5'>
                <Header />
            </div>
        </RecoilRoot>
    )
}
