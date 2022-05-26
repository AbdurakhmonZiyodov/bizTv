import React from "react"
import { RN } from "../../components/react-native"
import LinearGradient from 'react-native-linear-gradient'

import { COLORS, SIZES, FONTS, images, icons } from '../../constants'

// Style
import { tv2Style } from './styles'
import { bizTvStyles } from "../BizTv/styles"
import { useNavigation } from "@react-navigation/native"


// Types
type btnsType = string[]

const View = () => {
    const [clickedBtn, setClickedBtn] = React.useState('480')
    const navigation: any = useNavigation()
    // Render
    function renderBtns(btns: btnsType) {
        return (
            <RN.View style={{
                alignItems: 'center',
                justifyContent: "center",
                marginTop: SIZES.base
            }}>
                <RN.View style={{
                    flexDirection: "row",
                    backgroundColor: COLORS.light,
                    padding: 3,
                    borderRadius: SIZES.margin
                }}>
                    {
                        btns.map((btn) => {
                            let isActive = clickedBtn === btn
                            let btnStyle = { backgroundColor: isActive ? COLORS.white : 'transparent' }
                            let textStyle = {
                                color: isActive ? COLORS.red : COLORS.lightBlack,
                                ...FONTS.body4,
                            }
                            return (
                                <RN.View key={btn}>
                                    <RN.TouchableOpacity
                                        onPress={() => setClickedBtn(btn)}
                                        style={
                                            [bizTvStyles.btn, btnStyle]}>
                                        <RN.Text style={textStyle}>{btn}</RN.Text>
                                    </RN.TouchableOpacity>
                                </RN.View>
                            )
                        })
                    }
                </RN.View>
            </RN.View>
        )
    }

    function renderBackround() {
        return (
            <RN.View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, opacity: 0.6 }}>
                <LinearGradient style={{ width: '100%', height: '100%' }} colors={["#ffffff", "rgba(200, 200, 200, 0.0674989)"]}>
                    <RN.Image source={images.bg} style={{ width: '100%', height: '100%' }} resizeMode={'cover'} />
                </LinearGradient>
            </RN.View>
        )
    }

    function renderChanelImage() {
        return (
            <RN.View style={{ alignItems: 'center', justifyContent: 'center', marginTop: SIZES.height * 0.17 }}>
                <RN.Image source={images.bzTv.uz24} style={{ width: 200, height: 45 }} resizeMode={'contain'} />
            </RN.View>
        )
    }

    function renderPlayer() {
        return (
            <RN.TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: SIZES.margin * 2
                }}
            // onPress={() => navigation.navigate('VedioPlayerScreen')}
            >
                <RN.Image
                    source={images.bzTv.play}
                    style={{
                        width: 220,
                        height: 220
                    }}
                    resizeMode={'contain'}
                />
            </RN.TouchableOpacity>
        )
    }
    return (
        <RN.View style={tv2Style.container} >

            {/* Backround */}
            {renderBackround()}

            {renderChanelImage()}

            {renderPlayer()}

            <RN.View style={{ marginTop: 20 }}>
                <RN.View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <RN.Text style={{ ...FONTS.body4, color: COLORS.red, fontWeight: '700', textTransform: "uppercase" }}>Hozir efirda</RN.Text>
                </RN.View>
                <RN.View style={{ alignContent: 'center', justifyContent: "center", marginHorizontal: SIZES.margin }}>
                    <RN.Text style={{ textAlign: 'center', ...FONTS.body2, marginTop: SIZES.base, color: COLORS.black, fontWeight: '600' }} >
                        Empire State of Mind feat. Alicia Keys JAY_Z & ALICIA KEYS
                    </RN.Text>
                </RN.View>
            </RN.View>

            <RN.View style={{ marginTop: SIZES.margin }}>
                {renderBtns(['480', '720', '1080'])}
            </RN.View>

        </RN.View>
    )
}

export default View