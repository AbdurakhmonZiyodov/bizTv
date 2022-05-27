import React from "react"
import { ListRenderItemInfo } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"
import { bizTvStyles } from "../../screens/BizTv/styles"
import { RN } from "../react-native"
interface etherType {
    id: number,
    time: string,
    title: string
}

type ethersType = etherType[]
const Ethers = ({ ethers, title, defaultEther }: { ethers: ethersType, title: string; defaultEther: string; }) => {
    const [clickedEther, setClickedEther] = React.useState(defaultEther);

    // Render

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
                                <RN.Text style={{ ...FONTS.h4, color: COLORS.red, textTransform: 'uppercase' }}>Hozirda Efirda</RN.Text>
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
                    <RN.Text style={bizTvStyles.title}>{title}</RN.Text>
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


    return renderEthers(ethers)

}

export default Ethers