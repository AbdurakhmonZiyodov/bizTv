import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RN } from "../../components/react-native";
import { ListRenderItemInfo } from 'react-native'


import { COLORS, SIZES, images, FONTS } from '../../constants'

// Style
import { bizTvStyles } from "./styles";
import Ethers from "../../components/common/Ethers";


// Types


type btnsType = string[]
interface etherType {
    id: number,
    time: string,
    title: string
}

type ethersType = etherType[]


const View = () => {
    const navigation: any = useNavigation()
    const [clickedBtn, setClickedBtn] = React.useState('480')
    const [clickedEther, setClickedEther] = React.useState('Retro Film');

    const ethers = [
        {
            id: 0,
            time: "10:00",
            title: "Yoshlar maktabi"
        },
        {
            id: 1,
            time: "10:00",
            title: "Biz bilan"
        },
        {
            id: 2,
            time: "09:00",
            title: "Start Up Club"
        },
        {
            id: 3,
            time: "10:00",
            title: "Musiqa"
        },
        {
            id: 4,
            time: "10:00",
            title: "Retro Film"
        },
        {
            id: 5,
            time: "09:00",
            title: "Sen bilan",
        },
        {
            id: 6,
            time: "19:00",
            title: "Nega kelding B/F",
        },
        {
            id: 7,
            time: "10:00",
            title: "Milliy musiqa",
        }
        ,
        // sa
        {
            id: 8,
            time: "09:00",
            title: "Axborot",
        },
        {
            id: 9,
            time: "19:00",
            title: "Jumong B/F",
        },
        {
            id: 10,
            time: "10:00",
            title: "Milliy musiqa2",
        }

    ]

    // Render
    function renderHeaderImage() {
        return (
            <RN.ImageBackground
                source={images.bg}
                style={{
                    paddingTop: SIZES.base,
                    paddingBottom: SIZES.margin * 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <RN.View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.white,
                    marginTop: SIZES.base,
                    width: SIZES.width - 28,
                    height: SIZES.height * 0.30,
                    borderBottomRightRadius: 7,
                    borderBottomLeftRadius: 7,
                    shadowColor: COLORS.black,
                    shadowOpacity: 0.12,
                    shadowRadius: 6,
                    shadowOffset: {
                        width: 3,
                        height: 10
                    },
                    elevation: 8
                }}>
                    <RN.Image
                        source={images.bzTv.bztv}
                        style={{
                            width: '100%',
                            height: '88%',
                            borderRadius: 7,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0
                        }}
                    />

                    <RN.Image
                        source={images.bzTv.uz24}
                        resizeMode={'cover'}
                        style={{
                            width: 130,
                            height: 24,
                            marginTop: SIZES.base - 7,
                            marginBottom: SIZES.base - 10
                        }}
                    />
                </RN.View>

                <RN.TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '25%'
                    }}
                    onPress={() => navigation.navigate('ChildTvScreen')}
                >
                    <RN.Image
                        source={images.bzTv.play}
                        resizeMode={'cover'}
                        style={{
                            width: 119,
                            height: 119
                        }}
                    />
                </RN.TouchableOpacity>
            </RN.ImageBackground>
        )
    }


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

    function renderEthers(data: ethersType) {

        const renderItem = ({ item }: ListRenderItemInfo<etherType>) => (
            <RN.TouchableOpacity
                onPress={() => setClickedEther(item.title)}
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: SIZES.margin,
                    paddingVertical: 10,
                    marginHorizontal: SIZES.base,

                },
                item.title === clickedEther ? {
                    backgroundColor: COLORS.lightRed, borderRadius: SIZES.base - 3, paddingVertical: 15
                } : {}]}>
                <RN.View style={{ paddingRight: SIZES.base }}>
                    <RN.Text style={{ ...FONTS.h4, color: COLORS.black, opacity: 0.4 }}>{item.time}</RN.Text>
                </RN.View>
                <RN.View >
                    <RN.Text style={{ ...FONTS.h4, color: COLORS.black2, opacity: 0.8 }}>{item.title}</RN.Text>

                    {
                        item.title === clickedEther && (
                            <RN.View style={{ marginTop: SIZES.base - 4 }}>
                                <RN.View style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: COLORS.red,
                                    position: 'absolute',
                                    left: -10,
                                    bottom: 4
                                }} />
                                <RN.Text style={{ ...FONTS.h4, color: COLORS.red, textTransform: 'uppercase' }}>Hozirda efirda</RN.Text>
                            </RN.View>
                        )
                    }
                </RN.View>
            </RN.TouchableOpacity>
        )

        return (
            <RN.View style={{ flex: 1 }}>
                <RN.View style={bizTvStyles.titleBox}>
                    <RN.View style={bizTvStyles.purpilCircle} />
                    <RN.Text style={bizTvStyles.title}>Hozir Efirda</RN.Text>
                </RN.View>

                <RN.FlatList
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    data={data}
                />
            </RN.View>
        )
    }

    return (
        <RN.View
            style={bizTvStyles.container}
        >
            {renderHeaderImage()}

            {renderBtns(['480', '720', '1080'])}

            <Ethers defaultEther="Start Up Club" title="Hozirda Efirda" ethers={ethers} />
        </RN.View>
    )
}

export default View