"use client"

import Image from "next/image";
import React from 'react';
import Logo from "../app/icons/logo.svg";
import DarkModeToggle from "./darkModeToggle";
import SearchButton from "./header/search";
import LoginButton from "./header/login";
import { darkModeState } from "../app/atoms/recoil";
import { useRecoilValue } from 'recoil';
import Link from "next/link";

export default function Header() {
    const theme = useRecoilValue(darkModeState);
    return (
        <div className="flex items-center">
            <Link href="/">
                <Image
                    className={`${theme === 'light' ? 'filter invert-0' : 'filter invert-[100%]'}`}
                    src={Logo}
                    alt="로고파일"
                    width={70}
                    height={40}
                />
            </Link>
            <DarkModeToggle />
            <SearchButton />
            <LoginButton />
        </div>
    )
}
