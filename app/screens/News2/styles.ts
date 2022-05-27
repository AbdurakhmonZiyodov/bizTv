import { RN } from '../../components/react-native'
import { COLORS, SIZES } from '../../constants'

export const news2Styles = RN.StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.white },
    checkboxList: {
        flexDirection: 'row',
    },
    checkboxBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: SIZES.width * 0.277,
        height: 33,
        borderRadius: 5,
        marginHorizontal: 7,
    }
})