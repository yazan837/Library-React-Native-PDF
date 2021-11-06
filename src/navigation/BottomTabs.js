import React from 'react';
import {useDispatch} from 'react-redux';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Library1 from '../screens/Library1';
import Library2 from '../screens/Library2';
import HomeScreen from '../screens/HomeScreen';
import Winner from '../screens/Winner';
import Scintific from '../screens/Scintific';
import YearBook from '../screens/YearBook';
import Blessed from '../screens/Blessed';
import Media from '../screens/Media';
import Photo from '../screens/Photo';
import Lectuer from '../screens/Lectuer';
import Booklist from '../screens/Booklist';
import NewArrival from '../screens/NewArrival';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  const lang = useSelector(state => state.home.language);
  const names = [
    {
      n1:
        (lang == 'english' && 'Blessed Tree Magazines') ||
        'مجلة الشجرة المباركة',
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

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,

          width: 'auto',
          flexWrap: 'wrap',
          fontWeight: lang != 'ar' ? 'bold' : '',
          fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          paddingHorizontal: 10,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#62CE4E',
          height: 50,
        },
        tabBarBounces: false,
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          width: 'auto',
          transform: [{rotate: lang == 'ar' ? '180deg' : '0deg'}],
        },
        tabBarStyle: {
          transform: [{rotate: lang == 'ar' ? '180deg' : '0deg'}],
        },
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen
        name={(lang == 'english' && 'Home') || 'الرئيسية'}
        component={HomeScreen}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
      <Tab.Screen
        name={names[1].n2}
        component={YearBook}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
      <Tab.Screen
        name={names[2].n3}
        component={Winner}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
      <Tab.Screen
        name={names[0].n1}
        component={Blessed}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
      <Tab.Screen
        name={names[3].n4}
        component={Scintific}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
      {lang != 'english' && (
        <Tab.Screen
          name={(lang == 'english' && 'Media Reports') || 'التقرير الإعلامي'}
          component={Media}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
      )}
      <Tab.Screen
        name={(lang == 'english' && 'Photography Books') || 'كتاب التصوير'}
        component={Photo}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
      <Tab.Screen
        name={(lang == 'english' && 'Lectures') || 'محاضرات'}
        component={Lectuer}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
      {lang != 'english' && (
        <Tab.Screen
          name={
            (lang == 'english' && '50 booklist series') || 'سلسلة الـ 50 كُتيب'
          }
          component={Booklist}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
      )}
      <Tab.Screen
        name={(lang == 'english' && 'New Arrival') || 'الكتب الجديدة'}
        component={NewArrival}
        options={{
          animationEnabled: false,
          swipeEnabled: false,
        }}
      />
    </Tab.Navigator>
  );
}

