import React, {useState} from 'react';

import theme from '../theme/index';

import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  Platform,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';

import reactotron from 'reactotron-react-native';
const {setLanguage} = actions;

function Header() {
  const dispatch = useDispatch();
  const Arabic = useSelector(state => state.home.booksArabic);
  const English = useSelector(state => state.home.booksEnglish);
  const lang = useSelector(state => state.home.language);
  const navigation = useNavigation();
  const [val, setVal] = useState('');
  return (
    <SafeAreaView
      style={[
        styles.header,
        {flexDirection: lang == 'ar' ? 'row-reverse' : 'row'},
      ]}>
      <Image
        source={require('../../assets/MainLogo.png')}
        resizeMode="center"
        style={{
          width: 90 * theme.consts.BW,
          height: 60 * theme.consts.BW,
        }}
      />
      <View style={{}}>
        <TextInput
          style={[
            styles.searchInput,
            {
              fontFamily: lang != 'english' ? 'NeoSansArabic' : '',
            },
          ]}
          placeholder={
            (lang == 'english' && 'Search For publication') ||
            'البحث في المنشورات'
          }
          onTouchStart={val => {
            setVal('');
            navigation.navigate('Search', {
              Arabic,
              English,
              lang,
            });
          }}
        />
        <Image
          source={require('../../assets/search.png')}
          style={{
            marginTop: 8 * theme.consts.BW,
            marginStart: 8 * theme.consts.BW,
            position: 'absolute',
            width: 30 * theme.consts.BW,
            height: 25 * theme.consts.BW,
            alignSelf: 'flex-start',
            justifyContent: 'center',
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            lang == 'english'
              ? dispatch(setLanguage({lang: 'ar'}))
              : dispatch(setLanguage({lang: 'english'}))
          }>
          <Text
            style={{
              fontSize: 16,
              color: '#626365',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {lang == 'english' ? 'AR' : 'EN'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assets/Menu.png')}
            resizeMode="contain"
            style={{
              width: 40 * theme.consts.BW,
              height: 40 * theme.consts.BW,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({setLanguage}, dispatch);

export default connect(null, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
  header: {
    height: Platform.OS == 'ios' ? 150 * theme.consts.BW : 90 * theme.consts.BW,

    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 0.5,
    width: 220 * theme.consts.BW,
    height: 38 * theme.consts.BW,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    marginTop: 15 * theme.consts.BW,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  searchInput: {
    borderWidth: 0.5,
    width: 220 * theme.consts.BW,
    height: 40 * theme.consts.BW,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    paddingTop: 5 * theme.consts.BW,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontSize: 12,
  },
});
