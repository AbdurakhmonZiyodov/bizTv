import React from "react"
import Ethers from "../../components/common/Ethers";
import { RN } from '../../components/react-native';
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { useNavigation, useRoute } from '@react-navigation/native';

// Types
interface etherItemType {
    id: number,
    time: string,
    title: string
}

type ethersType = etherItemType[]

const View = () => {
    const navigation: any = useNavigation()
    let title = "Teledasturlar"
    const ethers = [
        { id: 0, time: "10:00", title: "Отель. Премьера нового сезона" },
        { id: 1, time: "10:00", title: "Biz bilan" },
        { id: 2, time: "10:00", title: "Start Up Club22" },
        { id: 3, time: "10:00", title: "Отель. Премьера нового сезона22" },
        { id: 4, time: "10:00", title: "Отель. Премьера нового сезона 2" },
        { id: 5, time: "10:00", title: "Start Up Club12" },
        { id: 6, time: "10:00", title: "Отель. Премьера нового сезона2222" },
        { id: 7, time: "10:00", title: "Start Up Club 2" },
        { id: 8, time: "10:00", title: "Start Up Club 1" },
        { id: 9, time: "10:00", title: "Отель. Премьера нового сезона 4" },
        { id: 10, time: "10:00", title: "Biz bilan33" },
        { id: 11, time: "10:00", title: "Biz bilan2" },
        { id: 12, time: "10:00", title: "Start Up Club 4" },]

    const ethers1: ethersType = [...ethers]

    const ethers2: ethersType = [...ethers]

    // Render

    function renderTvShows() {

        return (
            <RN.View style={{ flexGrow: 1 }}>
                <RN.View style={{ flex: 2 }}>
                    <Ethers title="Dushanba" ethers={ethers1} defaultEther="Start Up Club 4" />
                </RN.View>
                <RN.View style={{ flex: 1 }}>
                    <Ethers title="Seshanba" ethers={ethers2} defaultEther="Biz bilan" />
                </RN.View>
            </RN.View>
        )
    }

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
            {/* Header */}
            {renderHeader()}

            {/* Tv Shows */}
            <RN.View style={{ flex: 1 }}>
                {renderTvShows()}
            </RN.View>
        </RN.View>
    )
}

export default View