import React from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';
import Navigater from '../services/navigator';
import theme from '../theme';
import reacttotron from '../redux/Reactotron';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../redux/actions';
const {fetchBook} = actions;
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBook();
  }
  render() {
    const Arabic = this.props.booksArabic;
    const English = this.props.booksEnglish;
    const lang = this.props.language;
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={'white'} />
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/MainLogo.png')}
            resizeMode="center"
            style={{
              width: 225 * theme.consts.BW,
              height: 175 * theme.consts.BW,
            }}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Library1')}>
            <ImageBackground
              source={require('../../assets/Button1.png')}
              resizeMode="contain"
              style={{
                width: 400 * theme.consts.BW,
                height: 275 * theme.consts.BW,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english' ? 'Khalifa Award' : 'جائزة خليفة'}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english' ? 'Date Palm' : 'لنخيل التمر'}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english'
                  ? 'Electronic Library'
                  : 'المكتبة الإلكترونية'}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',

                  margin: 5,
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english'
                  ? (Object.values(English).length || 85) + '+ publication  '
                  : '  المنشورات +' + (Object.values(English).length || 85)}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={({}) => {
              this.props.navigation.navigate('Library1');
            }}>
            <ImageBackground
              source={require('../../assets/Button2.png')}
              resizeMode="contain"
              style={{
                width: 400 * theme.consts.BW,
                height: 275 * theme.consts.BW,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english' ? 'International' : 'الدولية'}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english' ? 'Date Palm' : 'لنخيل التمر'}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english'
                  ? 'Electronic Library'
                  : 'المكتبة الإلكترونية'}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  margin: 5,
                  fontWeight: lang != 'ar' ? 'bold' : '',
                  fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                }}>
                {lang == 'english'
                  ? (Object.values(Arabic).length || 353) + '+ publication  '
                  : '  المنشورات +' + (Object.values(Arabic).length || 353)}
              </Text>
            </ImageBackground>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginEnd: 10 * theme.consts.BW,
              justifyContent: 'space-around',

              width: '95%',
            }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://l.facebook.com/l.php?u=https%3A%2F%2Fkiaai.ae%2F%3Ffbclid%3DIwAR3hf9rBnP4lzMtkmFinUCAgZB1TsKjNJvQfuwEQHaJ5Ge8u1zABSjEb6Ts&h=AT2mnbg_FFDTHUWGInFghKxdKqNSsiLMLfu5GUtpsU_DPIGyUXvyZIC7pqGKPf42kHO-rRPGzvATurfrppfHGo4ocxvr8TGz1Gx7a1dI6LU0fB73_RAM-WFnI5zimwvDc-Jh&__tn__=-UK-R&c[0]=AT2mbKrsBZ9HLUYuMFmwGVbQgAUrhL8xVhrK-0gWRXE8IU8fvObsTvCSgMFY3z2jXmEvNKKFnc_fyFfcVBFIs0V75GgeKv-qvkPZ9aSxrwiOKDbMmJYUuROKi5pY0EOxWq4lR10wGKtLFdd2fgqwIf0yrf2YRIXNNYEtACX4QUAXUrk',
                )
              }
              style={{
                justifyContent: 'center',
                marginEnd: 50 * theme.consts.BW,
              }}>
              <Text style={{color: 'black'}}>www.kiaai.ae</Text>
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                justifyContent: 'center',
              }}>
              @Kiaaiae
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.facebook.com/kiaaiae')
              }>
              <Image
                source={require('../../assets/Social1.png')}
                resizeMode="contain"
                style={{
                  width: 25 * theme.consts.BW,
                  height: 25 * theme.consts.BW,
                  margin: 5 * theme.consts.BW,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://twitter.com/kiaaiae')}>
              <Image
                source={require('../../assets/Social2.png')}
                resizeMode="contain"
                style={{
                  width: 25 * theme.consts.BW,
                  height: 25 * theme.consts.BW,
                  margin: 5 * theme.consts.BW,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/kiaaiae/')
              }>
              <Image
                source={require('../../assets/Social3.png')}
                resizeMode="contain"
                style={{
                  width: 25 * theme.consts.BW,
                  height: 25 * theme.consts.BW,
                  margin: 5 * theme.consts.BW,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/company/kiaaiae')
              }>
              <Image
                source={require('../../assets/Social4.png')}
                resizeMode="contain"
                style={{
                  width: 25 * theme.consts.BW,
                  height: 25 * theme.consts.BW,
                  margin: 5 * theme.consts.BW,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/c/kiadpai')
              }>
              <Image
                source={require('../../assets/Social5.png')}
                resizeMode="contain"
                style={{
                  width: 25 * theme.consts.BW,
                  height: 25 * theme.consts.BW,
                  margin: 5 * theme.consts.BW,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  booksEnglish: state.home.booksEnglish,
  booksArabic: state.home.booksArabic,
  isFetching: state.home.isFethingBook,
  language: state.home.language,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchBook}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
