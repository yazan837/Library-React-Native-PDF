import React from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheetAnimated,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Roof from '../components/PhotoRoof';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';
import {withNavigation} from 'react-navigation';
const {fetchBook} = actions;

import theme from '../theme';
import reactotron from 'reactotron-react-native';
class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Arabic = this.props.booksArabic;
    const English = this.props.booksEnglish;
    const lang = this.props.language;
    if (English.length == 0 || Arabic.length == 0) {
      return (
        <ImageBackground
          source={require('../../assets/backgroundNoData.png')}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              marginTop: 50,
              fontWeight: lang != 'ar' ? 'bold' : '',
              fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
            }}>
            {lang == 'english'
              ? ' Check Your Connection Please'
              : 'الرجاء التأكد من اتصالك بالانترنت'}
          </Text>
        </ImageBackground>
      );
    }
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ImageBackground
          source={require('../../assets/background.jpg')}
          style={{width: '100%', height: '100%'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  margin: 20 * theme.consts.BW,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: lang != 'ar' ? 'bold' : '',
                    fontFamily: lang == 'ar' ? 'NeoSansArabic' : '',
                  }}>
                  {(lang == 'english' && 'Photography Books') || 'كتاب التصوير'}
                </Text>
              </View>
            </View>
            <Roof
              data={((lang == 'english' && English) || Arabic)
                .filter(i => i.rack_id == 8)
                .slice(0, 4)}
              lang={lang}
              navigation={this.props.navigation}
              widePhoto={true}
            />

            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />
            <Roof
              data={((lang == 'english' && English) || Arabic)
                .filter(i => i.rack_id == 8)
                .slice(4, 8)}
              lang={lang}
              navigation={this.props.navigation}
              widePhoto={true}
            />

            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />
            <Roof
              data={((lang == 'english' && English) || Arabic)
                .filter(i => i.rack_id == 8)
                .slice(8, 15)}
              lang={lang}
              navigation={this.props.navigation}
              widePhoto={true}
            />
            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />
            {/* <Roof
              data={((lang == 'english' && English) || Arabic)
                .filter(i => (i.rack_id == 8))
                .slice(15, 20)}
              lang={lang}
              navigation={this.props.navigation}
            /> */}
          </ScrollView>
        </ImageBackground>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Photo));
