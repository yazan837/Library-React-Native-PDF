import React from 'react';
import {Image, View, Text, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import theme from '../theme';
import reactotron from 'reactotron-react-native';
import {withNavigation} from 'react-navigation';
import NavigatorService from '../services/navigator';
class WinnerRoof extends React.Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item}) => {
    const language = this.props.lang;
    let imge = item.book_cover.replace('../..', 'https://www.ekiaai.com');
    const Navigation = this.props.navigation;

    return (
      <TouchableOpacity
        onPress={() =>
          Navigation.navigate('PdfReader', {
            item,
          })
        }
        style={{
          marginHorizontal: -70 * theme.consts.BW,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 60 * theme.consts.BW,
              marginBottom: 6 * theme.consts.BW,
              height: 22 * theme.consts.BW,
            }}>
            <Text
              style={{
                fontSize: 8 * theme.consts.BW,
                textAlign: 'center',
                color: '#626365',
                fontFamily: language == 'ar' ? 'NeoSansArabic' : '',
              }}
              numberOfLines={2}>
              {language == 'english' ? item.book_title : item.book_arabic_title}
            </Text>
          </View>
          <View
            style={{
              borderLeftWidth: 5,
              borderLeftColor: '#603521',
              transform: [{rotateY: '70deg'}],
            }}>
            <View
              elevation={6}
              style={{
                borderLeftWidth: 5,
                borderLeftColor: '#f2f2f2',
              }}>
              <View
                style={{
                  width: 230 * theme.consts.BW,
                }}>
                <Image
                  source={{uri: imge ? imge : null}}
                  style={{
                    width: 225 * theme.consts.BW,
                    height: 50 * theme.consts.BW,
                  }}
                  resizeMode="stretch"
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    let data = this.props.data;
    const language = this.props.lang;
    const Navigation = this.props.navigation;

    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          showsHorizontalScrollIndicator={false}
          style={{
            marginBottom: -10 * theme.consts.BW,
            zIndex: 1,
            width: '100%',
            alignItems: 'center',
            marginStart: 10 * theme.consts.BW,
          }}>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            inverted={language == 'ar' ? true : false}
          />
        </View>
        <Image
          source={require('../../assets/roof.png')}
          style={{
            height: 20,
            width: '100%',
          }}
        />
      </View>
    );
  }
}

export default WinnerRoof;
