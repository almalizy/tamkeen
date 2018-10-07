import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions ,ImageBackground, Image, Platform} from 'react-native';
import { Button } from 'react-native-elements';
import MainScreen from './MainScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="...للمتابعة..."
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
        
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          ImageBackground={slide.imageBackground}
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
         
          <ImageBackground source={slide.imageBackground} style={styles.imageBackground} />
          <Image source={slide.imageLogo} style={styles.imageLogo} />

          {/* <View
                    style={{   
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 50,
                          backgroundColor: '#e6e6e6'
                          }}
          >   */}
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
    
          {/* </View> */}

      </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  imageBackground: {
    position: 'absolute',
    backgroundColor: 'green',
    borderRadius: 5,
    flexDirection: 'row',
    height: 330,
    padding: 5,
    paddingTop: 16,
    bottom: 20,
    right: 10,
    left: 10,
    borderWidth: 1,
    borderColor: 'green',
    flex: 2
  
 },
 imageLogo: {
  position: "absolute",
  // left: Platform.OS === "android" ? 0 : 50,
  top: Platform.OS === "android" ? 35 : 60,
  width: SCREEN_WIDTH,
  height: 100,
  flex: 1,
  // marginVertical: 5,
  alignSelf: 'center',

 },

  textStyle: {
    fontSize: 25,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: -140,
    flex: 3

  },
  buttonStyle: {
    backgroundColor: 'green', alignSelf: 'center'
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding:10,
    // marginBottom:3,
    // borderRadius:0,
    // shadowColor:'blue',
    // shadowOffset:{width: 0, height: 5},
    // shadowOpacity:0.35,
  
  },

};

export default Slides;
