import React, {Component} from 'react';
import {
  PermissionsAndroid,
  Image,
  View,
  Text,
  Animated,
  ImageBackground,
  Alert,
} from 'react-native';
import DeviceBrightness from '@adrianso/react-native-device-brightness';
import Slider from '@react-native-community/slider';
import Pdf from 'react-native-pdf';
import {ActivityIndicator} from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';
import CardFlip from '../components/CardFlip';
import GestureFlipView from 'react-native-gesture-flip-card';
import Swipeable from 'react-native-swipeable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from '../theme/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withNavigation} from 'react-navigation';
import ReaderView from 'react-native-reader';
import Share from 'react-native-share';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import FlipPage, {FlipPagePage} from 'react-native-flip-page';
import reactotron from 'reactotron-react-native';
import store from '../redux/store';
import actions from '../redux/actions';
const {setPage, completeSetPage} = actions;
class PdfReader extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    brightness: 0.5,
    pagenum: 1,
    pagenumber: 10,
    pagescount: 1,
    presentage: 0,
    sizeofscreen: 1,
    appState: '',
    StoreVisible: false,
    flag: true,
    pageid: 1,
  };

  componentWillUnmount() {
    this.props.setPage({page: this.state.pagenum});
    this.props.completeSetPage({id: this.state.pageid});
  }

  getValuefromstorege = async () => {
    if (!this.state.pagenumber == 1) {
      const value = await AsyncStorage.getItem('pagenumbers');
      const convert2 = JSON.parse(value);
      reactotron.log('AsyncStorage', convert2.con);
      this.props.setPage({page: convert2.con});
      this.setState({pagenumber: convert2.con});
    } else {
      const con = this.state.pagenumber;
      const con2 = {con};
      const convert = JSON.stringify(con2);
      await AsyncStorage.setItem('pagenumbers1', convert);
      const convert3 = JSON.parse(convert);
      reactotron.log('ooo', convert3);
      this.props.setPage({page: con});
    }
  };

  downloadFile = items => {
    let date = new Date();

    let FILE_URL = items.replace('../..', 'https://www.ekiaai.com');

    let file_ext = this.getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
      });
  };
  checkPermission = async ({items}) => {
    if (Platform.OS === 'ios') {
      downloadFile(items.book_url);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.downloadFile(items.book_url);
        } else {
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {}
    }
  };
  getFileExtention = fileUrl => {
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  share = ({book}) => {
    const url = 'https://play.google.com/store/apps/details?id=com.badr';
    const title = book;
    const message = 'Please check this out.';

    const options = Platform.select({
      default: {
        title,
        subject: message,
        message: `${title} `,
      },
    });
    Share.open(options)
      .then(res => {})
      .catch(err => {
        err && console.log(err);
      });
  };
  IndexModel = ({source}) => {
    const items = this.props.route.params.item;
    return (
      <Modal
        style={{
          margin: 0,
        }}
        animationType="slide"
        transparent={true}
        isVisible={this.state.StoreVisible}
        onBackdropPress={() => (
          this.setState({StoreVisible: false}),
          this.props.setPage({page: this.state.pagenum})
        )}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 100 * theme.consts.BW,
          }}>
          <Pdf
            source={source}
            fitPolicy={1}
            scale={2}
            minScale={1}
            maxScale={2}
            horizontal={true}
            enablePaging={true}
            page={this.state.pagenum}
            enableAntialiasing={true}
            enableAnnotationRendering={true}
            enableRTL={true}
            onLoadComplete={(numberOfPages, filePath) => {
              this.setState({pagescount: numberOfPages});
            }}
            onPageChanged={(page, numberOfPages) => {
              this.setState({pagenum: page});
            }}
            style={{
              height: '60%',
              width: '100%',
            }}
          />
        </View>
        {/* <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            top: 100,
            width:'100%',
          
          }}>
          <TouchableOpacity
            onPress={() => this.setState({StoreVisible: false})}>
            <Image
              source={require('../../assets/close.png')}
              style={{
                width: 35 * theme.consts.BW,
                height: 30 * theme.consts.BW,
                alignSelf: 'flex-end',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View> */}
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 100 * theme.consts.BW,
          }}
          onPress={() => (
            this.setState({StoreVisible: false}),
            this.props.setPage({page: this.state.pagenum})
          )}>
          <Text
            style={{
              fontSize:
                items.language == 'AR'
                  ? 20 * theme.consts.BW
                  : 18 * theme.consts.BW,
              fontFamily: items.language == 'AR' ? 'NeoSansArabic' : '',
            }}
            onPress={() => (
              this.setState({StoreVisible: false}),
              this.props.setPage({page: this.state.pagenum})
            )}>
            {items.language == 'AR' ? 'اذهب الى الصفحة' : 'Go to page'}
          </Text>
        </TouchableOpacity>
      </Modal>
    );
  };
  render() {
    const brightnes = DeviceBrightness.setBrightnessLevel(
      this.state.brightness,
    );

    const items = this.props.route.params.item;
    const book = items.book_url.replace('../..', 'https://www.ekiaai.com');
    const source = {
      uri: book,
      cache: true,
    };
    const pre = (this.state.pagenum * 100) / this.state.pagescount;
    const presentage = Math.round(pre, 1);
    const wide = this.props.route.params.wide;

    return (
      <View
        style={{
          flex: 1,
        }}>
        {this.IndexModel({source})}
        <View
          style={{
            flex: 1,
            // transform: [{ rotate: wide ? '-90deg' : '0deg' }]
          }}>
          <Pdf
            source={source}
            fitPolicy={2}
            scale={this.state.sizeofscreen || 1}
            horizontal={true}
            enablePaging={true}
            page={
              this.props.pageIdent == items.book_id ? this.props.pagestored : 1
            }
            enableAntialiasing={true}
            enableAnnotationRendering={true}
            enableRTL={true}
            activityIndicator={
              <ActivityIndicator size="large" color={'#62CE4E'} />
            }
            onLoadComplete={(numberOfPages, filePath) => {
              this.setState({pagescount: numberOfPages});
              this.setState({pageid: items.book_id});
            }}
            onPageChanged={(page, numberOfPages) => {
              this.setState({pagenum: page});
              return (
                <View
                  style={{
                    backgroundColor: 'red',
                    flex: 1,
                    position: 'absolute',
                  }}
                />
              );
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link presse: ${uri}`);
            }}
            style={{
              height: '100%',
              width: '100%',
              flex: 1,
              backgroundColor: require('../../assets/bookbackground.jpg'),
            }}
          />
        </View>
        <View
          style={{
            marginTop: 15 * theme.consts.BW,
            position: 'absolute',
            alignSelf: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../assets/close.png')}
              style={{
                width: 35 * theme.consts.BW,
                height: 30 * theme.consts.BW,
                alignSelf: 'flex-end',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            marginTop: 50 * theme.consts.BW,
          }}>
          <Text
            style={{
              fontSize:
                items.language == 'AR'
                  ? 20 * theme.consts.BW
                  : 16 * theme.consts.BW,
              fontFamily: items.language == 'AR' ? 'NeoSansArabic' : '',
            }}>
            {items.language == 'EN'
              ? items.book_title
              : items.book_arabic_title}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 15 * theme.consts.BW,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginStart: 10 * theme.consts.BW,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14 * theme.consts.BW, color: 'white'}}>
                {this.state.pagenum}/ {this.state.pagescount}
              </Text>
            </View>

            <TouchableOpacity
              style={{}}
              onPress={() => this.setState({StoreVisible: true})}>
              <Image
                source={require('../../assets/index.png')}
                style={{
                  width: 25 * theme.consts.BW,
                  height: 35 * theme.consts.BW,
                  alignSelf: 'flex-end',
                }}
                tintColor="white"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              onPress={() => this.checkPermission({items})}>
              <Image
                source={require('../../assets/download.png')}
                style={{
                  width: 25 * theme.consts.BW,
                  height: 30 * theme.consts.BW,
                  alignSelf: 'flex-end',
                }}
                tintColor="white"
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              onPress={() =>
                this.setState({sizeofscreen: this.state.sizeofscreen + 1})
              }>
              <Image
                source={require('../../assets/zoomIn.png')}
                style={{
                  width: 25 * theme.consts.BW,
                  height: 30 * theme.consts.BW,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              onPress={() =>
                this.setState({
                  sizeofscreen: this.state.sizeofscreen - 1,
                })
              }>
              <Image
                source={require('../../assets/zoomOut.png')}
                style={{
                  width: 25 * theme.consts.BW,
                  height: 30 * theme.consts.BW,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{}} onPress={() => this.share({book})}>
              <Image
                source={require('../../assets/share.png')}
                style={{
                  width: 25 * theme.consts.BW,
                  height: 30 * theme.consts.BW,
                  alignSelf: 'flex-end',
                }}
                tintColor="white"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              onPress={() => this.setState({brightness: 0.3})}>
              <Image
                source={require('../../assets/night.png')}
                style={{
                  width: 25 * theme.consts.BW,
                  height: 30 * theme.consts.BW,
                  alignSelf: 'flex-end',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginEnd: 30 * theme.consts.BW}}
              onPress={() => this.setState({brightness: 0.9})}>
              <Image
                source={require('../../assets/day.png')}
                style={{
                  width: 30 * theme.consts.BW,
                  height: 30 * theme.consts.BW,
                  alignSelf: 'flex-start',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{}}
              onPress={() => this.getValuefromstorege()}>
              <Image
                source={require('../../assets/bookmark.png')}
                style={{
                  width: 30,
                  height: 40,
                  alignSelf: 'flex-end',
                }}
                tintColor="white"
                resizeMode="contain"
              />
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  pagestored: state.home.Page,
  pageIdent: state.home.PageId,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({setPage, completeSetPage}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(PdfReader));
