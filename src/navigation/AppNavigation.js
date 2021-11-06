import React from 'react';
import {Animated, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import {useSelector} from 'react-redux';
import {navigationRef, isReadyRef} from './NavigationService';
import Header from '../components/Header';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
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
import Search from '../screens/Search';
const Stack = createStackNavigator();

function Mainstack() {
  const forSlide = ({current, next, inverted, layouts: {screen}}) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0,
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted,
            ),
          },
        ],
      },
    };
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          cardStyle: {backfaceVisibility: 'hidden'},
        }}
      />
      <Stack.Screen
        name="Library1"
        component={BottomTabs}
        options={{
          header: ({}) => <Header />,

          headerBackground: 'white',
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          // cardStyleInterpolator: {},
          cardStyleInterpolator: forSlide,
        }}
      />

      <Stack.Screen
        name="PdfReader"
        component={PdfReader}
        options={{
          headerShown: false,
          cardStyle: {backfaceVisibility: 'hidden'},
        }}
      />
      <Stack.Screen
        name="Library2"
        component={BottomTabs}
        options={{
          header: ({}) => <Header />,
          headerBackground: 'white',
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const InitialNavigator = () => {
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
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerItemStyle: {borderBottomWidth: 0.5},
          drawerActiveBackgroundColor: '#62CE4E',
          drawerActiveTintColor: 'white',
          drawerLabelStyle: {
            fontWeight: lang != 'ar' ? 'bold' : '',
            fontFamily: lang == 'ar' ? 'NeoSansArabicBold' : '',
          },
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name={(lang == 'english' && 'Home') || 'الرئيسية'}
          component={Mainstack}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default InitialNavigator;
