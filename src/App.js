import React from 'react';
import { Root } from 'native-base';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Header1 from './screens/Header/1';
import Header2 from './screens/Header/2';
import Header3 from './screens/Header/3';
import Header4 from './screens/Header/4';
import Header5 from './screens/Header/5';
import Header6 from './screens/Header/6';
import Header7 from './screens/Header/7';
import Header8 from './screens/Header/8';

import BasicFooter from './screens/footer/basicFooter';
import IconFooter from './screens/footer/iconFooter';
import IconText from './screens/footer/iconText';
import BadgeFooter from './screens/footer/badgeFooter';

import RegularActionSheet from './screens/actionsheet/regular';
import IconActionSheet from './screens/actionsheet/icon';
import SimpleDeck from './screens/deckswiper/simple';
import AdvancedDeck from './screens/deckswiper/advanced';
import EnglishHall from './screens/deckswiper/EnglishHall';
import PcHall from './screens/deckswiper/PcHall';
import SoftwareHall from './screens/deckswiper/SoftwareHall';

import BasicCard from './screens/card/basic';
import NHCardImage from './screens/card/card-image';
import NHCardShowcase from './screens/card/card-showcase';
import NHCardList from './screens/card/card-list';
import NHCardHeaderAndFooter from './screens/card/card-header-and-footer';

import SideBar from './screens/sidebar';
import Header from './screens/Header';
import Home from './screens/home/';
import Anatomy from './screens/anatomy/';
import Footer from './screens/footer/';
import NHDeckSwiper from './screens/deckswiper/';
import NHCard from './screens/card/';
import Toast from './screens/toast';
import Actionsheet from './screens/actionsheet';
import MainScreen from './MainScreen';


const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Main: { screen: MainScreen },
    Anatomy: { screen: Anatomy },
    Header: { screen: Header },
    Footer: { screen: Footer },
    NHCard: { screen: NHCard },
    NHDeckSwiper: { screen: NHDeckSwiper },
    Toast: { screen: Toast },
    Actionsheet: { screen: Actionsheet }
  },

  {
    initialRouteName: 'Main',
    contentOptions: { activeTintColor: '#e91e63' },
    // drawerPosition: 'right',
    contentComponent: props => <SideBar {...props} />
  }
);


const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: Home },

    Header1: { screen: Header1 },
    Header2: { screen: Header2 },
    Header3: { screen: Header3 },
    Header4: { screen: Header4 },
    Header5: { screen: Header5 },
    Header6: { screen: Header6 },
    Header7: { screen: Header7 },
    Header8: { screen: Header8 },

    BasicFooter: { screen: BasicFooter },
    IconFooter: { screen: IconFooter },
    IconText: { screen: IconText },
    BadgeFooter: { screen: BadgeFooter },

    BasicCard: { screen: BasicCard },
    NHCardImage: { screen: NHCardImage },
    NHCardList: { screen: NHCardList },
    NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },

    SimpleDeck: { screen: SimpleDeck },
    AdvancedDeck: { screen: AdvancedDeck },
    EnglishHall: { screen: EnglishHall },
    PcHall: { screen: PcHall },
    SoftwareHall: { screen: SoftwareHall },
    NHCardShowcase: { screen: NHCardShowcase },

    RegularActionSheet: { screen: RegularActionSheet },
    IconActionSheet: { screen: IconActionSheet }
  },

  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  }

);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
