import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import store from '../redux/store';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import theme from '../theme/index';
import SearchInput, {createFilter} from 'react-native-search-filter';
import reactotron from 'reactotron-react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';
const {setLanguage} = actions;

function Search() {
  const dispatch = useDispatch();
  const searchUpdated = term => {
    setsearchTerm({searchTerm: term});
  };
  const KEYS_TO_FILTERS = ['book_title', 'book_arabic_title'];
  const Arabic = useSelector(state => state.home.booksArabic);
  const English = useSelector(state => state.home.booksEnglish);
  const lang = useSelector(state => state.home.language);
  const navigation = useNavigation();
  const [searchTerm, setsearchTerm] = useState('');

  let filteredEmails = English.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS),
  );
  let filteredEmailsArabic = Arabic.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS),
  );

  return (
    <View style={styles.container}>
      <SearchInput
        onChangeText={term => (console.log('hhhh', term), searchUpdated(term))}
        style={styles.searchInput}
        placeholder={(lang == 'english' && 'Search For publication') || 'البحث'}
      />
      {searchTerm != '' && (
        <View
          style={{
            height: 500,
            flex: 1,
          }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              height: 'auto',
            }}
            showsVerticalScrollIndicator={false}>
            {(filteredEmails || filteredEmailsArabic).map(item => {
              return (
                <TouchableOpacity
                  style={styles.emailItem}
                  onPress={() => {
                    nav.navigate('PdfReader', {item});
                  }}>
                  <View style={{alignSelf: 'flex-start'}}>
                    <Text style={styles.emailSubject} numberOfLines={1}>
                      {item.book_title || item.book_arabic_title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
const mapStateToProps = state => ({
  language: state.home.language,
  booksEnglish: state.home.booksEnglish,
  booksArabic: state.home.booksArabic,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({setLanguage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emailItem: {
    width: 250 * theme.consts.BW,
    alignItems: 'center',
    backgroundColor: '#fff',
    fontSize: 12,
    height: 36 * theme.consts.BW,
    paddingStart: 10,
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)',
  },
  searchInput: {
    borderWidth: 0.5,
    width: 325 * theme.consts.BW,
    height: 36 * theme.consts.BW,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    marginTop: 30 * theme.consts.BW,
    justifyContent: 'center',

    textAlign: 'center',
    // textAlignVertical: 'bottom',
    fontSize: 12,
  },
  searchInputScroll: {
    position: 'absolute',
  },
});
