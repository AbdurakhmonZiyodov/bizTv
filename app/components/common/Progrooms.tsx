import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ListRenderItemInfo } from "react-native";
import { images } from "../../constants";
import { bizFmStyles } from "../../screens/BizFm/styles";
import { RN } from "../react-native";


// Types
interface progrommsItemType {
    id: number;
    img1: any;
    title1: string;
    img2: any;
    title2: string;
}

type programmsType = progrommsItemType[]



const Progrooms = ({ marginBottom }: { marginBottom?: boolean }) => {

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
            <RN.View style={[bizFmStyles.programms, marginBottom ? { marginBottom: 0 } : {}]}>
                <RN.FlatList
                    data={data}
                    renderItem={renderProgrammsItem}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </RN.View>
        )
    }

    return renderProgrooms(progromms)

}

export default Progrooms;