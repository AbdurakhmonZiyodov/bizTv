import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import NewsScreen from "../../components/common/NewsScreen";
import { RN } from "../../components/react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

const View = () => {
    const route: any = useRoute();
    const navigation = useNavigation()

    let title = route.params.title
    function renderHeader() {
        return (
            <RN.View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <RN.View>
                    <RN.TouchableOpacity
                        style={{ marginLeft: SIZES.margin - 6, marginTop: SIZES.base }}
                        onPress={() => navigation.goBack()}
                    >
                        <RN.ImageBackground
                            source={icons.roundedIcon}
                            style={{
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            resizeMode={'contain'}
                        >
                            <RN.Image
                                source={icons.backIcon}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                resizeMode={'cover'}
                            />
                        </RN.ImageBackground>
                    </RN.TouchableOpacity>
                </RN.View>

                <RN.View style={{ flex: 1 }}>
                    <RN.Text style={{ color: COLORS.black, ...FONTS.h2, textAlign: 'center' }}>{title}</RN.Text>
                </RN.View>
            </RN.View>
        )
    }

    return (
        <RN.View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}

            <NewsScreen />


        </RN.View>
    )
}

export default View