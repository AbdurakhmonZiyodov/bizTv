import React from "react"
import NewsScreen from "../../components/common/NewsScreen"
import { RN } from "../../components/react-native"
import { COLORS } from "../../constants"

// Style
import { bizFmStyles } from './styles'
import { ProgroomsScreen } from ".."

enum activeViewValue {
    one = "Barchasi",
    two = "Ko'rsatuvlar"
}

type activeViewStateType = activeViewValue.one | activeViewValue.two

const View = () => {

    const [activeView, setActiveView] = React.useState<activeViewStateType>(activeViewValue.one); // Barchasi or Ko'rsatuvlar

    // Render ======================
    function renderHeader() {

        function renderBtn(value: activeViewStateType) {
            let borderBottomColor = value === activeView ? COLORS.red : 'rgba(0, 0, 0, 0.1)'
            let color = value === activeView ? COLORS.red : COLORS.lightBlack2
            return (
                <RN.View style={{ flex: 1 }}>
                    <RN.TouchableOpacity
                        style={[bizFmStyles.headerBtn, { borderBottomColor }]}
                        onPress={() => setActiveView(value)}
                    >
                        <RN.Text style={[bizFmStyles.headerBtnText, { color }]}>{value}</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
            )
        }

        return (
            <RN.View>
                <RN.View style={bizFmStyles.header}>

                    {renderBtn(activeViewValue.one)}
                    {renderBtn(activeViewValue.two)}

                </RN.View>
            </RN.View>
        )
    }

    return (
        <RN.View style={bizFmStyles.container}>
            {/* Header */}
            {renderHeader()}

            {
                activeView === activeViewValue.one ? < NewsScreen /> : <ProgroomsScreen />
            }


        </RN.View>
    )
}

export default View