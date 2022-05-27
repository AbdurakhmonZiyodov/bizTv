import { RN } from "../../components/react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const news2ItemStyles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    font: {
        color: COLORS.black,
        ...FONTS.body1,
        fontWeight: '400',
        opacity: 0.9,
        fontFamily: "Roboto-Regular",
        marginVertical: SIZES.base
    }
})