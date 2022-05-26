import React from "react"
import { RN } from "../../components/react-native"

import { COLORS, SIZES, FONTS, images } from '../../constants'

// Style
import { tv2Style } from './styles'

const View = () => {

    return (
        <RN.View style={tv2Style.container} >

            {/* Backround */}
            <RN.View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, opacity: 0.6 }}>
                <RN.Image source={images.bg} style={{ width: '100%', height: '100%' }} resizeMode={'cover'} />
            </RN.View>


            <RN.View style={{ alignItems: 'center', justifyContent: 'center', marginTop: SIZES.height * 0.17 }}>
                <RN.Image source={images.bzTv.uz24} style={{ width: 200, height: 45 }} resizeMode={'contain'} />
            </RN.View>

        </RN.View>
    )
}

export default View