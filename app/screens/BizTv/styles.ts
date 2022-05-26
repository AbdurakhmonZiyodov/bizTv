import { RN } from "../../components/react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const bizTvStyles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    btn: {
        width: 100,
        height: 39,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.margin
    },
    // Ethers
    titleBox: {
        justifyContent: 'center',
        marginHorizontal: SIZES.margin,
        marginVertical: SIZES.margin - 5
    },
    purpilCircle: {
        position: 'absolute',
        width: 23,
        height: 23,
        borderRadius: 23 / 2,
        backgroundColor: COLORS.lightPurpil,
        left: -10,
        top: -2
    },
    title: {
        ...FONTS.h3,
        color: COLORS.black2,
        textTransform: "uppercase"
    }

})