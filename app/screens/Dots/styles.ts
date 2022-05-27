import { RN } from "../../components/react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const dotsStyles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rbga(84, 84, 84, 0.0519012)'
    },
    socialIconBtns: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#E4E6EB',
        borderWidth: 1,
        borderColor: "#DADCE0",
        borderRadius: SIZES.margin - 2,
        height: 48
    },
    socialIcon: {
        width: 45,
        height: 38,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        marginHorizontal: 6
    },
    listOneItem: {
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.margin - 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#EFF4FB",
        borderRadius: 8,
        shadowColor: "rgba(9, 9, 9, 0.0851449)",
        shadowOffset: {
            width: 19,
            height: 12
        },
        shadowOpacity: 0.5,
        elevation: 19,
    },
    title: { color: COLORS.black, ...FONTS.h4, opacity: 0.8, fontSize: 16, fontWeight: '500' },
    listTwoItem: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.margin - 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#EFF4FB",
        paddingLeft: SIZES.margin + 1
    }
})