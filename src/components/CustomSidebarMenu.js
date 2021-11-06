import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import theme from '../theme';
import {useNavigation} from '@react-navigation/native';

const CustomSidebarMenu = props => {
  const navigation = useNavigation();
  const lang = useSelector(state => state.home.language);

  const names = [
    {
      n1: lang == 'english' ? 'Blessed Tree Magazines' : 'مجلة الشجرة المباركة',
    },
    {
      n2: (lang == 'english' && 'Year Books') || 'الكتاب السنوي',
    },

    {
      n3: (lang == 'english' && 'Winner Books') || 'كتاب الفائزين',
    },
    {
      n4: lang == 'english' ? 'Scientific' : 'كتب علمية',
    },
    {
      n5: (lang == 'english' && 'Media Reports') || 'التقرير الإعلامي',
    },
    {
      n6: (lang == 'english' && 'Photography Books') || 'كتاب التصوير',
    },
    {
      n7: (lang == 'english' && 'Lectures') || 'محاضرات',
    },
    {
      n8: (lang == 'english' && '50 booklist series') || 'سلسلة الـ 50 كُتيب',
    },
    {
      n9: (lang == 'english' && 'New Arrival') || 'الكتب الجديدة',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={require('../../assets/MainLogo.png')}
        resizeMode="center"
        style={{
          width: 150,
          height: 100,
          alignSelf: 'center',
        }}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={names[1].n2}
          labelStyle={{
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          }}
          onPress={() => navigation.navigate(names[1].n2)}
          style={{borderBottomWidth: 0.5}}
        />
        <DrawerItem
          label={names[2].n3}
          labelStyle={{
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          }}
          onPress={() => navigation.navigate(names[2].n3)}
          style={{borderBottomWidth: 0.5}}
        />
        <DrawerItem
          label={names[0].n1}
          labelStyle={{
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          }}
          onPress={() => navigation.navigate(names[0].n1)}
          style={{borderBottomWidth: 0.5}}
        />
        <DrawerItem
          label={names[3].n4}
          labelStyle={{
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          }}
          onPress={() => navigation.navigate(names[3].n4)}
          style={{borderBottomWidth: 0.5}}
        />
        {lang != 'english' && (
          <DrawerItem
            label={names[4].n5}
            labelStyle={{
              fontWeight: lang != 'ar' ? 'bold' : '',
              fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
            }}
            onPress={() => navigation.navigate(names[4].n5)}
            style={{borderBottomWidth: 0.5}}
          />
        )}
        <DrawerItem
          label={names[5].n6}
          labelStyle={{
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          }}
          onPress={() => navigation.navigate(names[5].n6)}
          style={{borderBottomWidth: 0.5}}
        />
        <DrawerItem
          label={names[6].n7}
          labelStyle={{
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          }}
          onPress={() => navigation.navigate(names[6].n7)}
          style={{borderBottomWidth: 0.5}}
        />
        {lang != 'english' && (
          <DrawerItem
            label={names[7].n8}
            labelStyle={{
              fontWeight: lang != 'ar' ? 'bold' : '',
              fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
            }}
            onPress={() => navigation.navigate(names[7].n8)}
            style={{borderBottomWidth: 0.5}}
          />
        )}
        <DrawerItem
          label={names[8].n9}
          labelStyle={{
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          }}
          onPress={() => navigation.navigate(names[8].n9)}
          style={{borderBottomWidth: 0.5}}
        />
        <View style={styles.customItem}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com/kiaaiae')}>
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
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 50,
  },
});

export default CustomSidebarMenu;
