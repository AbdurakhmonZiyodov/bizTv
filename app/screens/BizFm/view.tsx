import React from "react"
import { ListRenderItemInfo } from "react-native"
import { RN } from "../../components/react-native"
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"

// Style
import { bizFmStyles } from './styles'

enum activeViewValue {
    one = "Barchasi",
    two = "Ko'rsatuvlar"
}

type activeViewStateType = activeViewValue.one | activeViewValue.two

interface newsItemType {
    id: number;
    img: any;
    title: string;
    likeCount: number;
    date: string;
    isLiked: boolean;
}

interface progrommsItemType {
    id: number;
    img1: any;
    title1: string;
    img2: any;
    title2: string;
}


type newsType = newsItemType[]

type programmsType = progrommsItemType[]

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


const View = () => {


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

    const [news, setNews] = React.useState(newsList)
    const [activeView, setActiveView] = React.useState<activeViewStateType>(activeViewValue.one); // Barchasi or Ko'rsatuvlar

    const newsControll = {
        toggleLike: (id: number) => {
            const newNews = [...news].
                map(n => n.id !== id ? n : { ...n, isLiked: !n.isLiked, likeCount: !n.isLiked ? n.likeCount + 1 : n.likeCount - 1 })
            setNews(newNews);
        }
    }

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


    const renderNewsItem = ({ item }: ListRenderItemInfo<newsItemType>) => (
        <RN.View style={{ marginTop: SIZES.base * 2 }}>
            <RN.View>
                <RN.Image source={item.img} style={{ width: SIZES.width * 0.9, height: 219, borderRadius: SIZES.base }} resizeMode={'contain'} />
                {/* Player btn */}
                <RN.TouchableOpacity style={{ position: 'absolute', top: '35%', left: '43%' }}>
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

    function renderProgrooms(data: programmsType) {

        const renderProgrammsItem = ({ item }: ListRenderItemInfo<progrommsItemType>) => (
            <RN.View style={bizFmStyles.programmsItem}>
                <RN.View style={{ flexDirection: 'row', flex: 1 }}>
                    <RN.TouchableOpacity style={{ flex: 1 }}>
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
                    <RN.TouchableOpacity style={{ flex: 1 }}>
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
                activeView === activeViewValue.one ? renderNewsList(news) : renderProgrooms(progromms)
            }


        </RN.View>
    )
}

export default View