import React from "react"
import { ListRenderItemInfo } from "react-native"
import NewsScreen from "../../components/common/NewsScreen"
import { RN } from "../../components/react-native"
import { COLORS, images } from "../../constants"

// Style
import { bizFmStyles } from './styles'
import { useNavigation } from '@react-navigation/native';

enum activeViewValue {
    one = "Barchasi",
    two = "Ko'rsatuvlar"
}

type activeViewStateType = activeViewValue.one | activeViewValue.two

interface progrommsItemType {
    id: number;
    img1: any;
    title1: string;
    img2: any;
    title2: string;
}

type programmsType = progrommsItemType[]



const View = () => {

    const navigation: any = useNavigation()

    const progromms: programmsType = [
        {
            id: 0,
            img1: images.bizFm.bgroup1,
            title1: "markaziy studiya",
            img2: images.bizFm.bgroup2,
            title2: "ramozon oyi tuhvasi"
        },

        {
            id: 1,
            img1: images.bizFm.bgroup3,
            title1: "Markaziy studiya",
            img2: images.bizFm.bgroup4,
            title2: "Kun yangiliklar"
        },

        {
            id: 2,
            img1: images.bizFm.bgroup5,
            title1: "Axborot",
            img2: images.bizFm.bgroup6,
            title2: "Sport yangiliklari"
        }
    ]

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

    function renderProgrooms(data: programmsType) {

        const renderProgrammsItem = ({ item }: ListRenderItemInfo<progrommsItemType>) => (
            <RN.View style={bizFmStyles.programmsItem}>
                <RN.View style={{ flexDirection: 'row', flex: 1 }}>
                    <RN.TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => navigation.navigate('BizItemScreen', { title: item.title1 })}
                    >
                        <RN.Image
                            source={item.img1}
                            style={{
                                width: '100%',
                                height: '110%',
                            }}
                            resizeMode={'cover'}
                        />

                        <RN.View style={bizFmStyles.programmsItemTitleBox}>
                            <RN.Text style={bizFmStyles.programmsItemTitle}>{item.title1}</RN.Text>
                        </RN.View>
                    </RN.TouchableOpacity>
                    <RN.TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => navigation.navigate('BizItemScreen', { title: item.title2 })}
                    >
                        <RN.Image
                            source={item.img2}
                            style={{
                                width: '100%',
                                height: '110%'
                            }}
                            resizeMode={'cover'}
                        />

                        <RN.View style={bizFmStyles.programmsItemTitleBox}>
                            <RN.Text style={bizFmStyles.programmsItemTitle}>{item.title2}</RN.Text>
                        </RN.View>
                    </RN.TouchableOpacity>
                </RN.View>
            </RN.View>
        )

        return (
            <RN.View style={bizFmStyles.programms}>
                <RN.FlatList
                    data={data}
                    renderItem={renderProgrammsItem}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </RN.View>
        )
    }

    return (
        <RN.View style={bizFmStyles.container}>
            {/* Header */}
            {renderHeader()}

            {
                activeView === activeViewValue.one ? < NewsScreen /> : renderProgrooms(progromms)
            }


        </RN.View>
    )
}

export default View