import { RN } from '../components/react-native';

const { width, height } = RN.Dimensions.get('window');

const COLORS = {
    purpil: '#FF4C98',
    red: '#E1084D',
    red2: '#FF4B6A',
    lightRed: 'rgba(254, 212, 212, 0.350361)',
    light: 'rgba(213, 221, 237, 0.585746)',
    blue: '#12245E',
    blue2: '#0071D4',
    blue3: '#2945AB',
    lightBlue: 'rgba(50, 197, 255, 0.259506)',
    green: '#6DD400',
    lightGreen: ' #16B67F',
    green2: '#1FB884',
    white: '#ffffff',
    lightBlack: '#75758C',
    black: '#253536',
};

const SIZES = {
    // Global size,
    base: 12,
    font: 14,
    margin: 24,
    h1: 24,
    h2: 18,
    h3: 16,
    h4: 13,
    h5: 12,
    body1: 14,
    body2: 13,
    body3: 11,
    body4: 10,

    // app dimemsions,
    width,
    height
};

const FONTS = {
    h1: { fontFamily: 'Gilroy-ExtraBold', fontSize: SIZES.h1, lineHeight: 30 },
    h2: { fontFamily: 'Gilroy-ExtraBold', fontSize: SIZES.h2, lineHeight: 23 },
    h3: { fontFamily: 'Gilroy-ExtraBold', fontSize: SIZES.h3, lineHeight: 19.34 },
    h4: { fontFamily: 'Gilroy-ExtraBold', fontSize: SIZES.h4, lineHeight: 15.5 },
    body1: { fontFamily: 'AbhayaLibre-Regular', fontSize: SIZES.body1, lineHeight: 24 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 20 },
    body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 15 }
};


const appTheme = { COLORS, SIZES, FONTS }

export default appTheme;