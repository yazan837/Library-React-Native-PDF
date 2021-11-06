import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import store from '../redux/store';
import {useNavigation} from '@react-navigation/native';

import theme from '../theme/index';
import SearchInput, {createFilter} from 'react-native-search-filter';
import reactotron from 'reactotron-react-native';
import {thisExpression} from '@babel/types';
const KEYS_TO_FILTERS = ['book_title', 'book_arabic_title'];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      change: false,
      enteredText: '',
    };
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }
  render() {
    const filteredEmails =
      this.props.route.params.English &&
      this.props.route.params.Arabic.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
      );

    const nav = this.props.navigation;

    return (
      <View style={styles.container}>
        <SearchInput
          onChangeText={term => {
            this.searchUpdated(term);
          }}
          style={[
            styles.searchInput,
            {
              fontFamily:
                this.props.route.params.lang != 'english'
                  ? 'NeoSansArabic'
                  : '',
            },
          ]}
          placeholder={
            (this.props.route.params.lang == 'english' &&
              'Search For publication') ||
            'البحث في المنشورات'
          }
        />
        <Image
          source={require('../../assets/search.png')}
          style={{
            marginTop: 35 * theme.consts.BW,
            marginStart: 110 * theme.consts.BW,
            position: 'absolute',
            width: 30 * theme.consts.BW,
            height: 26 * theme.consts.BW,
            alignSelf: 'flex-start',
            justifyContent: 'center',
          }}
        />
        {this.state.searchTerm != '' && (
          <View
            style={{
              height: 'auto',
              flex: 1,
            }}>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                height: 'auto',
              }}
              showsVerticalScrollIndicator={false}>
              {filteredEmails.map(item => {
                const imge = item.book_cover.replace(
                  '../..',
                  'https://www.ekiaai.com',
                );
                return (
                  <TouchableOpacity
                    style={styles.emailItem}
                    onPress={() => {
                      nav.replace('PdfReader', {item});
                    }}>
                    <View
                      style={{alignSelf: 'flex-start', flexDirection: 'row'}}>
                      <View
                        style={{
                          borderLeftWidth: 5,
                          borderLeftColor: '#603521',
                          transform: [{rotateY: '60deg'}],
                          marginBottom: 10 * theme.consts.BW,
                        }}>
                        <View
                          style={{
                            borderLeftWidth: 4,
                            borderLeftColor: '#f2f2f2',
                            elevation: 18,
                          }}>
                          <Image
                            source={{uri: imge}}
                            style={{
                              width: 75 * theme.consts.BW,
                              height: 60 * theme.consts.BW,
                            }}
                            resizeMode="stretch"
                          />
                        </View>
                      </View>

                      <View>
                        <Text style={styles.emailSubject} numberOfLines={1}>
                          {item.book_title}
                        </Text>
                        <Text style={styles.emailSubject} numberOfLines={1}>
                          {item.book_arabic_title}
                        </Text>
                      </View>
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
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  emailItem: {
    width: 350 * theme.consts.BW,
    alignSelf: 'center',
    backgroundColor: '#fff',
    fontSize: 12,
    // height: 50 * theme.consts.BW,
    // paddingStart: 10,
    borderBottomWidth: 0.5,
    marginTop: 20 * theme.consts.BW,
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)',
    alignSelf: 'flex-start',
  },
  searchInput: {
    borderWidth: 0.5,
    width: 220 * theme.consts.BW,
    height: 40 * theme.consts.BW,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    marginTop: 30 * theme.consts.BW,
    textAlignVertical: 'bottom',
    fontSize: 14,
    paddingStart: 40 * theme.consts.BW,
    textAlign: 'left',
    paddingTop: 10 * theme.consts.BW,
  },
  searchInputScroll: {
    position: 'absolute',
  },
});
