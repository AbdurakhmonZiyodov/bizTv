import { RN } from "../../components/react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export const bizFmStyles = RN.StyleSheet.create({
    container: {
        flex: 1
    },
    header: { flexDirection: 'row', alignItems: 'center', marginTop: SIZES.base - 7 },
    headerBtn: { width: '100%', paddingVertical: 11, borderBottomWidth: 2 },
    headerBtnText: { ...FONTS.body2, textAlign: 'center' },
    programms: { marginVertical: SIZES.base, marginBottom: 40 },
    programmsItem: { height: SIZES.height / 3 - SIZES.base, marginVertical: SIZES.base / 2 },
    programmsItemTitle: { ...FONTS.h1, color: COLORS.white },
    programmsItemTitleBox: { position: 'absolute', bottom: '12%', left: '9%', width: '70%' }
})