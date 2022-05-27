import { StyleProp, ViewStyle } from 'react-native'
import { RN } from "../react-native"
import React from "react"
import { Icon } from "@rneui/themed"
import { COLORS } from '../../constants'

// Types

interface PropsType {
    checked: boolean,
    iconSize?: number,
    iconColor?: string,
    style?: StyleProp<ViewStyle>,
    isCheckbox?: boolean,
    width?: number,
    height?: number,
    backgroundColor?: string,
    borderRadius?: number,
    directory?: string
}

// FC

const Checkbox = ({
    iconColor = COLORS.white,
    iconSize = 12,
    style = {},
    isCheckbox = true,
    width = 16,
    height = 16,
    backgroundColor = COLORS.lightBlack,
    borderRadius = 4,
    checked = true,
    directory = 'Entypo'
}: PropsType) => {


    if (!isCheckbox) return <RN.View />

    return (
        <RN.View>
            <RN.View>
                <RN.View
                    style={[{
                        width,
                        height,
                        backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius,
                    }, style]}>

                    {
                        checked &&
                        (<Icon
                            name="check"
                            color={iconColor}
                            type={directory}
                            size={iconSize}
                        />)
                    }
                </RN.View>
            </RN.View>
        </RN.View>
    )
}

export default Checkbox