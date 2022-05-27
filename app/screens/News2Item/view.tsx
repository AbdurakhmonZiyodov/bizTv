import { useNavigation } from "@react-navigation/native"
import React from "react"
import { RN } from "../../components/react-native"
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
import { news2ItemStyles } from "./styles"

const News2Item = () => {
    const navigation = useNavigation()

    // Render
    function renderHeader() {
        return (
            <RN.View>

                <RN.ImageBackground
                    source={images.news2.n2MainContent}
                    style={{
                        width: SIZES.width,
                        height: SIZES.height * 0.3,
                    }}
                    resizeMode={'cover'}
                >
                    <RN.View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        position: 'absolute'
                    }}>
                        <RN.View >
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
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                    }}
                                    resizeMode={'contain'}
                                >
                                    <RN.Image
                                        source={icons.backIcon}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            tintColor: COLORS.black
                                        }}
                                        resizeMode={'cover'}
                                    />
                                </RN.ImageBackground>
                            </RN.TouchableOpacity>
                        </RN.View>
                    </RN.View>
                </RN.ImageBackground>
            </RN.View>
        )
    }



    function renderMainContent() {
        return (
            <RN.View style={{ paddingBottom: 10, flex: 1 }}>
                <RN.View style={{ marginVertical: SIZES.base }}>
                    <RN.Text style={{ color: COLORS.black, opacity: 0.9, ...FONTS.h2 }}>Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?</RN.Text>
                </RN.View>

                <RN.ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <RN.Text style={news2ItemStyles.font}>
                        — O‘zbekistonga qaytishni xohlagan xorijdagi fuqarolarning katta qismi Rossiya Federatsiyasi hissasiga to‘g‘ri keladi. E'lon qilingan parvozlar ro‘yxatida Rossiyaning 8 ta shaharlaridan 11-24 may oralig‘ida charter reyslar amalga oshiriladi. Albatta, bu 8 ta aviareyslar orqali barcha fuqarolarni olib kelishning imkoniyati yo‘q. Buni fuqarolar to‘g‘ri tushunishlari lozim. Konsulliklar va elchixonalarimiz orqali qaytish istagida bo‘lgan fuqarolarning ro‘yxati shakllantirib borilyapti. Ro‘yxatdan o‘tgan barcha fuqarolarni charter reyslar orqali olib kelishga harakat qilinadi. Ulardan bizni to‘g‘ri tushungan holda sabrli bo‘lishni so‘raymiz.
                    </RN.Text>

                    <RN.Text style={news2ItemStyles.font}>
                        — Qozog‘iston chegarasida yuzlab o‘zbekistonliklar o‘z avtomashinalarida O‘zbekistonga o‘tish uchun ruxsat berilishini kutmoqda. Transport vazirligi bu masalada qo‘shnilar bilan aloqa o‘rnatdimi?

                        — Qozog‘iston va Rossiya chegarasida taksi xizmatini ko‘rsatuvchi bir necha yuzlab fuqarolarimiz to‘planib qolgan va buni ijtimoiy tarmoqlarda videomurojaatlar orqali chiqishlarda bevosita guvohi bo‘ldik. Bu bo‘yicha  Transport vazirligi tegishli idoralar bilan hamkorlikda ushbu masalaga yechim topish ustida ishlayapti.  Bir jihatni alohida ta'kidlash kerak: ushbu fuqarolar Rossiya va Qozog‘istonda belgilangan karantin talablarini qo‘pol ravishda buzib harakatlanishmoqda. Qaytaraman, bu borada muzokaralar boshlandi.

                        — Rossiyada moddiy jihatdan qiyin ahvolga tushib qolgan va aviachipta uchun puli qolmagan vatandoshlarningO‘zbekistonga qaytib olishlari uchun vazirlik tomonidan ko‘mak beriladimi?
                    </RN.Text >

                    <RN.Text style={news2ItemStyles.font}>
                        — O‘zbekistonga qaytish istagida bo‘lgan, ammo aviachipta xarid qilishga imkoniyati bo‘lmagan fuqarolar masalasi individual tarzda o‘rganiladi va imkon qadar ijobiy hal qilishga harakat qilinadi.

                        —O‘zbekistonga qaytarilgan fuqarolar maxsus dala shifoxonalariga joylashtirilishi aytilgan. Ayni paytda ular barcha qaytarilganlarni qabul qila oladimi?

                        — Xorijdan charter reyslarda kelgan fuqarolarimiz 14 kun mobaynida karantin hududiga joylashtiriladi. Bunda joy yetishmovchiligi muammosi bo‘lmaydi.

                        Ilyos Safarov suhbatlashdi.
                    </RN.Text>

                </RN.ScrollView>
            </RN.View>
        )
    }

    return (
        <RN.View style={news2ItemStyles.container}>

            {/* Header */}
            <RN.View>
                {renderHeader()}
            </RN.View>

            {/* Main Content */}
            <RN.View style={{ marginHorizontal: SIZES.margin - 4, flex: 1 }}>
                {renderMainContent()}
            </RN.View>

        </RN.View>
    )
}

export default News2Item