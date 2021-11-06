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
import Pdf from './PdfReader';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';
import {withNavigation} from 'react-navigation';
const {fetchBook} = actions;
import Roof from '../components/Roof';
import WinnerRoof from '../components/WinnerRoof';
import PhotoRoof from '../components/PhotoRoof';
import theme from '../theme';
import reactotron from 'reactotron-react-native';
class NewArrival extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Arabic = this.props.booksArabic;
    const English = this.props.booksEnglish;
    const lang = this.props.language;
    const n1 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 5)
      .slice(0, 5);
    const n2 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 6)
      .slice(0, 5);
    const n3 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 7)
      .slice(0, 4);
    const n4 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 8)
      .slice(0, 4);
    const n5 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 9)
      .slice(0, 5);
    const n6 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 10)
      .slice(0, 5);
    const n7 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 11)
      .slice(0, 5);
    const n8 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 12)
      .slice(0, 5);

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
                  {(lang == 'english' && 'New Arrival') || 'الكتب الجديدة'}
                </Text>
              </View>
            </View>
            <Roof data={n1} lang={lang} navigation={this.props.navigation} />
            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />
            <Roof data={n2} lang={lang} navigation={this.props.navigation} />
            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />
            <WinnerRoof
              data={n3}
              lang={lang}
              navigation={this.props.navigation}
            />
            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />
            <PhotoRoof
              data={n4}
              lang={lang}
              navigation={this.props.navigation}
            />
            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />

            <Roof data={n6} lang={lang} navigation={this.props.navigation} />
            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />

            <Roof data={n7} lang={lang} navigation={this.props.navigation} />
            <View
              style={{
                margin: 20 * theme.consts.BW,
              }}
            />
            {lang != 'english' && (
              <Roof
                data={n5}
                lang={lang}
                navigation={this.props.navigation}
                wide={true}
              />
            )}
            {lang != 'english' && (
              <Roof
                data={n8}
                lang={lang}
                navigation={this.props.navigation}
                wide={true}
              />
            )}
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
)(withNavigation(NewArrival));
