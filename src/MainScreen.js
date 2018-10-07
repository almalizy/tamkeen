import { AppLoading } from 'expo';

// import _ from 'lodash';
import React, { Component } from 'react';
import { Alert, BackHandler, Linking, } from 'react-native';
import Slides from './Slides';

const first = require('../assets/1.jpg');
const two = require('../assets/22.jpg');
const three = require('../assets/3.png');

const firstLogo = require('../assets/logo-kitchen-sink.png');
const twoLogo = require('../assets/logo-kitchen-sink.png');
const threeLogo = require('../assets/logo-kitchen-sink.png');


const SLIDE_DATA = 
[  
  { text: '    وفقا لرؤية 2030   \n   وايمانا   منّا   بقدرات    \n      الشباب  السعودي     \n  على التميز في سوق العمل ',
   color: '#ccffcc',
   imageBackground: first,
  imageLogo: firstLogo },
  { text: '\n والحاجة الشديدة الى  المهن الحرفية ',
   color: '#b3ffb3',
  imageBackground: two,
  imageLogo: twoLogo },
  { text: '                   تساهم شركة تمكين  \n     بتوفير أعلى مستوى من التدريب والتأهيل   \n                  وفقا للمعايير العالمية',
   color: '#99ff99',
imageBackground: three,
imageLogo: threeLogo },
];

class MainScreen extends Component {
  onSlidesComplete = () => {
    // this.props.navigation.navigate('Home'),Alert.alert('مرحبا بكم في شركة تمكين الشاملة المحدودة');
    this.props.navigation.navigate('Home');
  }

  componentWillMount() {
    setTimeout(() => {
      BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
    }, 800);
  }
   
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }
  _onBackPress = () => {
    Alert.alert(
      'هل ترغب في مغادرة التطبيق ',
      'هل ترغب في مغادرة التطبيق',
      // { text: 'للتسجيل ', onPress: () => Linking.openURL('http://tamkeen.sa/adv.html') },
      [ 
        { text: ' التقييم', onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=www.tamkeen.sa.com') },
        { text: 'نعم', onPress: () => BackHandler.exitApp() },
        { text: 'لا', onPress: () => Alert.alert('استمتع بتصفح تطبيق تمكين'), style: 'cancel' },
       ], { cancelable: false }

    );
    return true;
    }
    
  render() {
    return (
      <Slides
data={SLIDE_DATA} 
              onComplete={this.onSlidesComplete}
              style={{ justifyContent: 'center', alignItems: 'center' }}
      />

    );
  }
}

export default MainScreen;
