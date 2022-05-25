import { RN } from "../../components/react-native";
import { SIZES } from "../../constants";

export const tvStyles = RN.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    channels: {

    },
    item_box: {
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZES.width * 0.85,
        height: 118,
        borderRadius: SIZES.margin,
    }
})