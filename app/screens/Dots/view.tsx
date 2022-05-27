import React from "react";
import { Switch } from "@rneui/themed";
import { RN } from "../../components/react-native";
import { COLORS, icons, images, SIZES } from "../../constants";

// Styles
import { dotsStyles } from "./styles";
import { useNavigation } from '@react-navigation/native';


// Types

interface listTwoItemType {
    id: number;
    title: string;
}

interface listOneItemType extends listTwoItemType {
    icon: any;
    iconSize: {
        width: number;
        height: number;
    }
}


type listTwoType = listTwoItemType[]
type listOneType = listOneItemType[]



const Dots = () => {
    const navigation: any = useNavigation()
    const [active, setActive] = React.useState(false)

    const listOne: listOneType = [
        {
            id: 0,
            icon: icons.dots.bizTv,
            title: "Teledasturlar",
            iconSize: {
                width: 20,
                height: 10
            }
        },
        {
            id: 1,
            icon: icons.dots.loud,
            title: "Reklama",
            iconSize: {
                width: 24,
                height: 20
            }
        },
        {
            id: 2,
            icon: icons.dots.location,
            title: "Biz bilan aloqa",
            iconSize: {
                width: 20,
                height: 20
            }
        }
    ]

    const listTwo: listTwoType = [
        {
            id: 0,
            title: "Loyiha haqida"
        },
        {
            id: 1,
            title: "Foydalanish shartlari"
        },
        {
            id: 2,
            title: "Уведомления"
        }
    ]

    // Render
    function renderSocialMedia() {


        return (
            <RN.View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <RN.View style={dotsStyles.socialIconBtns}>
                    <RN.TouchableOpacity style={dotsStyles.socialIcon}>
                        <RN.Image
                            source={icons.socialMedias.facebook}
                            style={{
                                width: 7,
                                height: 15
                            }}
                        />
                    </RN.TouchableOpacity>

                    <RN.TouchableOpacity style={dotsStyles.socialIcon}>
                        <RN.Image
                            source={icons.socialMedias.googlePlus}
                            style={{
                                width: 23,
                                height: 14
                            }}
                        />
                    </RN.TouchableOpacity>

                    <RN.TouchableOpacity style={dotsStyles.socialIcon}>
                        <RN.Image
                            source={icons.socialMedias.twitter}
                            style={{
                                width: 17,
                                height: 14
                            }}
                        />
                    </RN.TouchableOpacity>

                    <RN.TouchableOpacity style={dotsStyles.socialIcon}>
                        <RN.Image
                            source={icons.socialMedias.instagtram}
                            style={{
                                width: 18,
                                height: 18
                            }}
                        />
                    </RN.TouchableOpacity>

                    <RN.TouchableOpacity style={dotsStyles.socialIcon}>
                        <RN.Image
                            source={icons.socialMedias.rss}
                            style={{
                                width: 12,
                                height: 13
                            }}
                        />
                    </RN.TouchableOpacity>
                </RN.View>
            </RN.View>
        )
    }

    function renderListOne(data: listOneType) {

        const ListOneItem = ({ title, icon, iconSize }: listOneItemType) => (
            <RN.TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('TvShowsScreen')} style={dotsStyles.listOneItem}>
                <RN.View style={{ marginHorizontal: SIZES.margin - 2 }}>
                    <RN.Image
                        source={icon}
                        style={iconSize}
                        resizeMode={'contain'}
                    />
                </RN.View>

                <RN.View>
                    <RN.Text style={dotsStyles.title}>{title}</RN.Text>
                </RN.View>
            </RN.TouchableOpacity>
        )

        return (
            <RN.FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListOneItem {...item} />}
            />
        )
    }

    function renderListTwo(data: listTwoType) {

        const ListTwoItem = ({ title, id }: listTwoItemType) => {
            if (id === 2)
                return (
                    <RN.Pressable onPress={() => setActive(!active)} style={[dotsStyles.listTwoItem, { justifyContent: 'space-between' }]}>
                        <RN.Text style={dotsStyles.title}>{title}</RN.Text>
                        <RN.View style={{ marginRight: SIZES.base }}>
                            <Switch color={COLORS.lightPurpil} value={active} onChange={() => setActive(!active)} />
                        </RN.View>
                    </RN.Pressable>
                )

            return (
                <RN.Pressable style={dotsStyles.listTwoItem} onPress={() => {
                    if (id === 0) {
                        navigation.navigate('AboutProjectScreen')
                    }
                }}>
                    <RN.Text style={dotsStyles.title}>{title}</RN.Text>
                </RN.Pressable>
            )
        }

        return (
            <RN.FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListTwoItem {...item} />}
                style={{ borderRadius: 8 }}
            />
        )
    }

    return (
        <RN.ImageBackground
            style={dotsStyles.container}
            source={images.bg}
        >

            {/* Social Media */}
            <RN.View style={{ marginTop: SIZES.height * 0.22 }}>
                {renderSocialMedia()}
            </RN.View>

            {/* List one */}
            <RN.View style={{ marginTop: SIZES.margin - 7, marginHorizontal: SIZES.margin - 2 }}>
                {renderListOne(listOne)}
            </RN.View>

            {/* List Two */}
            <RN.View style={{ marginHorizontal: SIZES.margin - 2, borderRadius: 8, marginTop: SIZES.base }}>
                {renderListTwo(listTwo)}
            </RN.View>
        </RN.ImageBackground>
    )
}

export default Dots
