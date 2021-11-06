import React from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheetAnimated,
  Animated,
  ImageBackground,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Pdf from './PdfReader';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';
import {withNavigation} from 'react-navigation';
const {fetchBook} = actions;
// import {DocumentView, RNPdftron} from 'react-native-pdftron';
import theme from '../theme';
import reactotron from 'reactotron-react-native';
import {ActivityIndicator} from 'react-native-paper';
import Roof from '../components/Roof';
import WinnerRoof from '../components/WinnerRoof';
class HomeScreen extends React.Component {
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
    const n1 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 5)
      .slice(0, 2);
    const n2 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 6)
      .slice(0, 2);
    const n3 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 7)
      .slice(0, 2);
    const n4 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 8)
      .slice(0, 2);
    const n5 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 9)
      .slice(0, 2);
    const n6 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 10)
      .slice(0, 2);
    const n7 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 11)
      .slice(0, 2);
    const n8 = ((lang == 'english' && English) || Arabic)
      .filter(i => i.rack_id == 12)
      .slice(0, 2);
    const newarrive = [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8];

    if (this.props.isFetching)
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={'#62CE4E'} />
        </View>
      );
    const names = [
      {
        n1: (lang == 'english' && 'New Arrival') || 'الكتب الجديدة',
      },
      {
        n2: (lang == 'english' && 'Year Books') || 'الكتاب السنوي',
      },

      {
        n3: (lang == 'english' && 'Winner Books') || 'كتاب الفائزين',
      },
      {
        n4: (lang == 'english' && 'Scientific') || 'كتب علمية',
      },
    ];
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
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <ImageBackground
          source={require('../../assets/background.jpg')}
          style={{width: '100%', height: '100%'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  margin: 20 * theme.consts.BW,
                  alignSelf: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: lang != 'ar' ? 'bold' : '',
                    fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                  }}>
                  {(lang == 'english' && 'New Arrivals') || ' الكتب الجديدة'}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(names[0].n1)}
                style={{
                  margin: 20 * theme.consts.BW,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'black',
                    fontWeight: lang != 'ar' ? 'bold' : '',
                    fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                  }}>
                  {(lang == 'english' && 'More') || 'المزيد'}
                </Text>
                <Image
                  source={require('../../assets/NextArrow.png')}
                  style={{
                    height: 25,
                    width: 25,
                    transform: [{rotate: lang == 'ar' ? '180deg' : '0deg'}],
                  }}
                  resizeMode="center"
                />
              </TouchableOpacity>
            </View>
            <Roof
              data={newarrive}
              lang={lang}
              navigation={this.props.navigation}
            />

            <View style={{}}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    margin: 20 * theme.consts.BW,
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      fontWeight: lang != 'ar' ? 'bold' : '',
                      fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                    }}>
                    {(lang == 'english' && 'Year Books') || 'الكتاب السنوي'}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(names[1].n2)}
                  style={{
                    margin: 20 * theme.consts.BW,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: lang != 'ar' ? 'bold' : '',
                      fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                    }}>
                    {(lang == 'english' && 'More') || 'المزيد'}
                  </Text>
                  <Image
                    source={require('../../assets/NextArrow.png')}
                    style={{
                      height: 25,
                      width: 25,
                      transform: [{rotate: lang == 'ar' ? '180deg' : '0deg'}],
                    }}
                    resizeMode="center"
                  />
                </TouchableOpacity>
              </View>
              <Roof
                data={((lang == 'english' && English) || Arabic)
                  .filter(i => i.rack_id == 6)
                  .slice(0, 10)}
                lang={lang}
                navigation={this.props.navigation}
              />
            </View>
            <View style={{}}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    margin: 20 * theme.consts.BW,
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      fontWeight: lang != 'ar' ? 'bold' : '',
                      fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                    }}>
                    {(lang == 'english' && 'Winner Books') || 'كتاب الفائزين'}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(names[2].n3)}
                  style={{
                    margin: 20 * theme.consts.BW,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: lang != 'ar' ? 'bold' : '',
                      fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                    }}>
                    {(lang == 'english' && 'More') || 'المزيد'}
                  </Text>
                  <Image
                    source={require('../../assets/NextArrow.png')}
                    style={{
                      height: 25,
                      width: 25,
                      transform: [{rotate: lang == 'ar' ? '180deg' : '0deg'}],
                    }}
                    resizeMode="center"
                  />
                </TouchableOpacity>
              </View>
              <WinnerRoof
                data={((lang == 'english' && English) || Arabic)
                  .filter(i => i.rack_id == 7)
                  .slice(0, 10)}
                lang={lang}
                navigation={this.props.navigation}
                wide={true}
              />
            </View>
            <View style={{}}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    margin: 20 * theme.consts.BW,
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      fontWeight: lang != 'ar' ? 'bold' : '',
                      fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                    }}>
                    {(lang == 'english' && 'Scientific Books') || 'كتب علمية'}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(names[3].n4)}
                  style={{
                    margin: 20 * theme.consts.BW,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: lang != 'ar' ? 'bold' : '',
                      fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
                    }}>
                    {(lang == 'english' && 'More') || 'المزيد'}
                  </Text>
                  <Image
                    source={require('../../assets/NextArrow.png')}
                    style={{
                      height: 25,
                      width: 25,
                      transform: [{rotate: lang == 'ar' ? '180deg' : '0deg'}],
                    }}
                    resizeMode="center"
                  />
                </TouchableOpacity>
              </View>
              <Roof
                data={((lang == 'english' && English) || Arabic)
                  .filter(i => i.rack_id == 10)
                  .slice(0, 10)}
                lang={lang}
                navigation={this.props.navigation}
              />
            </View>
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
  newarrival: state.home.newarrival,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchBook}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(HomeScreen));
