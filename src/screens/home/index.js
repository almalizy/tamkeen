import React, { Component } from 'react';
import { ImageBackground, Linking, View, StatusBar, Image, BackHandler, Alert } from 'react-native';
import { Container, Button, Text } from 'native-base';

import styles from './styles';


const imageLogo = require('../../../assets/launchscreen-bg.png');
const Logo = require('../../../assets/logo-kitchen-sink.png');

class Home extends Component {

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
       ],
      { cancelable: false }

    );
    return true;
    }


  render() {
    return (
    <Container >
        <StatusBar barStyle="light-content" />
        <ImageBackground source={imageLogo} style={styles.imageLogo}>
        
          <View style={styles.logoContainer}>
               <Image source={Logo} style={styles.logo} />
          </View>

          <View
style={{
                  alignItems: 'center',
                  marginBottom: 50,
                  backgroundColor: '#e6e6e6'
                }}
          >
              <Text style={styles.text1}>شركة تمكين المحدودة</Text>
              <Text style={{ fontSize: 30, color: 'green', }} >  ...أكثر من 30 عاما خبرة...      </Text>
              <Text style={styles.text1}>في التدريب والتوظيف</Text>


          </View>


          <View style={{ marginBottom: 80 }}>
                <Button
                  style={{ backgroundColor: 'green', alignSelf: 'center' }}
                  onPress={() => this.props.navigation.navigate('DrawerOpen')}
                >
                <Text style={styles.text2}>اقرأ المزيد.. </Text>
                </Button>
          </View>
              
        </ImageBackground>
    </Container>
    );
  }
}

export default Home;
