import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RN } from '../../components/react-native';
import { COLORS, FONTS, images, SIZES } from '../../constants';



// Style
import { tvStyles } from './styles';

const View = () => {

  // Render
  function renderChannels() {
    const navigation: any = useNavigation()
    return (
      <RN.View>
        <RN.View style={tvStyles.item_box}>
          <RN.TouchableOpacity
            style={[{ backgroundColor: COLORS.purpil }, tvStyles.item]}
            onPress={() => navigation.navigate('BizTvScreen')}
          >
            <RN.Image
              source={images.channells.channelIcon1}
              style={{
                width: 174,
                height: 47,
              }}
              resizeMode={'contain'}
            />
          </RN.TouchableOpacity>
        </RN.View>


        <RN.View style={tvStyles.item_box}>
          <RN.TouchableOpacity
            style={[{ backgroundColor: COLORS.blue, }, tvStyles.item]}>
            <RN.Image
              source={images.channells.channelIcon2}
              style={{
                width: 184,
                height: 127,
              }}
              resizeMode={'contain'}
            />
          </RN.TouchableOpacity>
        </RN.View>

        <RN.View style={tvStyles.item_box}>
          <RN.TouchableOpacity
            style={[{ backgroundColor: COLORS.green }, tvStyles.item]}>
            <RN.Image
              source={images.channells.channelIcon3}
              style={{
                width: 184,
                height: 127,
              }}
              resizeMode={'contain'}
            />
          </RN.TouchableOpacity>
        </RN.View>
      </RN.View>
    )
  }

  function renderTitle(title: string) {
    return (
      <RN.View style={{
        position: 'absolute',
        top: '13%',
      }}>
        <RN.View style={{
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <RN.Text style={{ color: COLORS.black, ...FONTS.body2 }}>{title}</RN.Text>
        </RN.View>
      </RN.View>
    )
  }

  return (
    <RN.ImageBackground style={tvStyles.container} resizeMode={'cover'}
      source={images.bg}>

      {renderTitle('Assalomu alaykum, iltimos bizning kanallaridan birini tanlang')}

      {renderChannels()}
    </RN.ImageBackground>
  );
}

export default View