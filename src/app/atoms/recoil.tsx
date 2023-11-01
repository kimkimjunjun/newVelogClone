import { atom, RecoilState } from 'recoil';

export const darkModeState = atom({
    key: 'darkModeState',
    default: false, // 기본값은 false로 설정합니다 (라이트 모드)
});