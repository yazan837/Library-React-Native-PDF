import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import {useSelector} from 'react-redux';
import {navigationRef, isReadyRef} from './NavigationService';
import Header from '../components/Header';
import Home from '../screens/Home';
import HomeScreen from '../screens/HomeScreen';
import Library1 from '../screens/Library1';
import Library2 from '../screens/Library2';
import PdfReader from '../screens/PdfReader';
import Winner from '../screens/Winner';
import Scintific from '../screens/Scintific';
import YearBook from '../screens/YearBook';
import Blessed from '../screens/Blessed';
import Media from '../screens/Media';
import Photo from '../screens/Photo';
import Lectuer from '../screens/Lectuer';
import Booklist from '../screens/Booklist';

const Drawer = createDrawerNavigator();

export default function App() {
  const lang = useSelector(state => state.home.language);
  const names = [
    {
      n1:
        (lang == 'english' && 'Blessed Tree Magazines') ||
        'مجلة الشجر المباركة',
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
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name={(lang == 'english' && 'Home') || 'الرئيسية'}
          component={HomeScreen}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={names[1].n2}
          component={YearBook}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={names[2].n3}
          component={Winner}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={names[0].n1}
          component={Blessed}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={names[3].n4}
          component={Scintific}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={(lang == 'english' && 'Media Reports') || 'التقرير الإعلامي'}
          component={Media}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={(lang == 'english' && 'Photography Books') || 'كتاب التصوير'}
          component={Photo}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={(lang == 'english' && 'Lectures') || 'محاضرات'}
          component={Lectuer}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={
            (lang == 'english' && '50 booklist series') || 'سلسلة الـ 50 كُتيب'
          }
          component={Booklist}
          options={{
            animationEnabled: false,
            swipeEnabled: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
