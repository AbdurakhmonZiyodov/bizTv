import React from "react";
import { ListRenderItemInfo } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import { bizFmStyles } from "../../screens/BizFm/styles";
import { RN } from '../react-native'

interface newsItemType {
    id: number;
    img: any;
    title: string;
    likeCount: number;
    date: string;
    isLiked: boolean;
}

type newsType = newsItemType[]

const newsList: newsType = [
    {
        id: 0,
        img: images.bizFm.bitem1,
        title: "Markaziy studio 839 soni",
        likeCount: 234,
        date: "09:01:2018 10:08",
        isLiked: false,
    },
    {
        id: 1,
        img: images.bizFm.bitem2,
        title: "Koriada korona verus avji oldi",
        likeCount: 122,
        date: "19:04:2019 22:01",
        isLiked: true,
    },
    {
        id: 2,
        img: images.bizFm.bitem3,
        title: "What's React Native?",
        likeCount: 2221,
        date: "09:01:2015 13:08",
        isLiked: false,
    }
]


const NewsScreen = () => {

    const [news, setNews] = React.useState(newsList)

    const newsControll = {
        toggleLike: (id: number) => {
            const newNews = [...news].
                map(n => n.id !== id ? n : { ...n, isLiked: !n.isLiked, likeCount: !n.isLiked ? n.likeCount + 1 : n.likeCount - 1 })
            setNews(newNews);
        }
    }

    // Render
    const renderNewsItem = ({ item }: ListRenderItemInfo<newsItemType>) => (
        <RN.View style={bizFmStyles.newsItem}>
            <RN.View>
                <RN.Image source={item.img} style={bizFmStyles.playBtnImage} resizeMode={'contain'} />
                {/* Player btn */}
                <RN.TouchableOpacity style={bizFmStyles.playBtn}>
                    <RN.Image source={icons.bizFm.play} style={{ width: 45, height: 45 }} resizeMode={'cover'} />
                </RN.TouchableOpacity>
            </RN.View>

            <RN.View>
                <RN.View style={{ marginHorizontal: 5 }}>
                    <RN.Text style={{ ...FONTS.body1, color: COLORS.blue3 }}>{item.title}</RN.Text>
                </RN.View>

                <RN.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* left ================= */}
                    <RN.View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7, flexGrow: 1 }}>
                        <RN.TouchableOpacity>
                            <RN.Image source={icons.bizFm.share} style={{ width: 30, height: 30, tintColor: COLORS.lightBlack }} resizeMode={'cover'} />
                        </RN.TouchableOpacity>

                        <RN.TouchableOpacity onPress={() => newsControll.toggleLike(item.id)}>
                            <RN.Image source={icons.bizFm.like} style={{ width: 30, height: 30, tintColor: item.isLiked ? COLORS.blue2 : COLORS.lightBlack }} resizeMode={'cover'} />
                        </RN.TouchableOpacity>

                        <RN.View>
                            <RN.Text style={{ ...FONTS.h5, color: COLORS.black, marginLeft: SIZES.base - 5, fontWeight: 'bold' }}>{item.likeCount}</RN.Text>
                        </RN.View>
                    </RN.View>

                    {/* right ================ */}
                    <RN.View>
                        <RN.Text style={{ ...FONTS.body2, color: COLORS.lightBlack }}>{item.date}</RN.Text>
                    </RN.View>
                </RN.View>
            </RN.View>
        </RN.View>
    )

    function renderNewsList(data: newsType) {
        return (
            <RN.View style={{ flex: 1, alignItems: 'center' }}>
                <RN.FlatList
                    data={data}
                    renderItem={renderNewsItem}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </RN.View>
        )
    }



    return renderNewsList(news)

}

export default NewsScreen;