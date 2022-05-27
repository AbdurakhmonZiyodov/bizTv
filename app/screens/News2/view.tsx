import React from "react";
import { RN } from "../../components/react-native";
import { COLORS, FONTS, images, SIZES } from "../../constants";


import Checkbox from "../../components/common/Checkbox";
import { news2Styles } from "./styles";
import { ListRenderItemInfo } from "react-native";
import { useNavigation } from "@react-navigation/native";



// Types
interface CheckboxBtnType {
    title: string;
    color: string;
    bgColor: string;
    defaultChecked: boolean;
}

interface checkboxItemType extends CheckboxBtnType {
    id: number;
}
interface newsItemType {
    id: number;
    title: string;
    tvTitle: string;
    timeStamp: string;
    img: any;
}

type newsType = newsItemType[];

// Components

const CheckboxBtn = ({ title, color, bgColor, defaultChecked }: CheckboxBtnType) => {
    const [checked, setChecked] = React.useState(defaultChecked);
    return (
        <RN.TouchableOpacity
            style={[{
                backgroundColor: bgColor,
            }, news2Styles.checkboxBtn]}
            onPress={() => setChecked(!checked)}
        >
            <RN.Text style={{ color, ...FONTS.h4 }}>{title}</RN.Text>
            <Checkbox
                checked={checked}
                backgroundColor={color}
                iconColor={COLORS.white}
                iconSize={SIZES.h3}
            />
        </RN.TouchableOpacity>
    )
}

const Title = ({ title }: { title: string }) => (
    <RN.View>
        <RN.Text style={{ color: COLORS.black, ...FONTS.body2, fontWeight: '700' }}>{title}</RN.Text>
    </RN.View>
)

const TimeStamp = ({ time }: { time: string }) => (
    <RN.View>
        <RN.Text style={{ color: COLORS.black, ...FONTS.body4, fontWeight: '800', opacity: 0.5 }}>{time}</RN.Text>
    </RN.View>
)

const TvTitle = ({ title }: { title: string }) => (
    <RN.View style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, backgroundColor: COLORS.lightGreen2 }}>
        <RN.Text style={{ color: COLORS.green, ...FONTS.body4, fontWeight: '800' }}>{title}</RN.Text>
    </RN.View>
)

const View = () => {
    const navigation: any = useNavigation();

    const checkboxs: checkboxItemType[] = [
        {
            id: 0,
            defaultChecked: true,
            title: "Barchasi",
            color: COLORS.red,
            bgColor: COLORS.lightRed2
        },
        {
            id: 1,
            defaultChecked: false,
            title: "Madaniyat",
            color: COLORS.blue,
            bgColor: COLORS.lightBlue2
        },
        {
            id: 2,
            defaultChecked: true,
            title: "Iqtisodiyot",
            color: COLORS.yellow,
            bgColor: COLORS.lightYellow2
        },
        {
            id: 3,
            defaultChecked: false,
            title: "Sport",
            color: COLORS.green2,
            bgColor: COLORS.lightGreen2
        },
    ]

    const newsList: newsType = [
        {
            id: 0,
            img: images.news2.n2Item1,
            title: "Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?",
            tvTitle: 'СПОРТ',
            timeStamp: 'ВЧЕРА, 23:00'
        },
        {
            id: 1,
            img: images.news2.n2Item2,
            title: "Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?",
            tvTitle: 'Madaniyat',
            timeStamp: 'ВЧЕРА, 13:00'
        },
        {
            id: 2,
            img: images.news2.n2Item3,
            title: "Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?",
            tvTitle: 'Yevro news',
            timeStamp: 'ВЧЕРА, 23:00'
        },
        {
            id: 3,
            img: images.news2.n2Item4,
            title: "Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?",
            tvTitle: 'СПОРТ',
            timeStamp: 'ВЧЕРА, 23:00'
        },
    ]

    // Render
    function renderHeader() {

        // Render Item
        const renderItem = ({ item: { bgColor, color, defaultChecked, title } }: ListRenderItemInfo<checkboxItemType>) => (
            <RN.View>
                <CheckboxBtn defaultChecked={defaultChecked} title={title} color={color} bgColor={bgColor} />
            </RN.View>
        )
        return (
            <RN.FlatList
                data={checkboxs}
                keyExtractor={item => item.id.toString()}
                style={news2Styles.checkboxList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
        )
    }

    function renderMainContent() {
        return (
            <RN.View>
                <RN.View>
                    <RN.Image
                        source={images.news2.n2MainContent}
                        style={{
                            width: SIZES.width - SIZES.base * 2,
                            height: SIZES.height * 0.3,
                            resizeMode: "cover",
                            borderRadius: 5
                        }}
                    />
                </RN.View>

                <RN.View style={{ marginTop: 5, marginHorizontal: 3 }}>
                    <Title title={'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?'} />

                    <RN.View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <RN.View style={{ marginRight: 5 }}>
                            <TvTitle title="СПОРТ" />
                        </RN.View>
                        <TimeStamp time="ВЧЕРА, 23:00" />
                    </RN.View>
                </RN.View>
            </RN.View>
        )
    }

    function renderNewsList(news: newsType) {

        const renderNewsItem = ({ item: { img, timeStamp, title, tvTitle } }: ListRenderItemInfo<newsItemType>) => (
            <RN.TouchableOpacity
                style={{ marginBottom: SIZES.margin - 2, flexDirection: 'row' }}
                onPress={() => navigation.navigate("News2ItemScreen")}
            >
                <RN.View style={{ marginRight: 5 }}>
                    <RN.Image
                        source={img}
                        style={{
                            width: 100,
                            height: 70,
                            borderRadius: 5,
                        }}
                        resizeMode={'cover'}
                    />
                </RN.View>

                <RN.View style={{ flexGrow: 1, justifyContent: "space-between" }}>
                    <RN.View style={{ marginRight: SIZES.margin * 4 }}>
                        <Title title={title} />
                    </RN.View>
                    <RN.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TvTitle title={tvTitle} />
                        <RN.View style={{ marginHorizontal: 3 }} />
                        <TimeStamp time={timeStamp} />
                    </RN.View>
                </RN.View>
            </RN.TouchableOpacity>
        )
        return (
            <RN.FlatList
                data={news}
                keyExtractor={item => item.id.toString()}
                renderItem={renderNewsItem}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    return (
        <RN.View style={news2Styles.container}>

            {/* Header */}
            <RN.View style={{ marginVertical: SIZES.base - 2, marginLeft: 5 }}>
                {renderHeader()}
            </RN.View>

            {/* Main Content */}
            <RN.View style={{ marginHorizontal: SIZES.base }}>
                {renderMainContent()}
            </RN.View>

            {/* News List */}
            <RN.View style={{ marginHorizontal: SIZES.base, marginTop: SIZES.base, flexGrow: 1 }}>
                {renderNewsList(newsList)}
            </RN.View>

        </RN.View >
    )
}

export default View
