"use client"

import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkModeState } from '../../app/atoms/recoil';

function LoginButton() {
    const theme = useRecoilValue(darkModeState);

    return (
        <div>
            <button className={`${theme === 'light' ? 'Loginw' : 'Loginb'}`}>로그인</button>
        </div>
    )
}

export default LoginButton