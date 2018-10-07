const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageLogo: {
    flex:1,
    width: 400,
    height: 100,
    alignSelf: "center"

    // alignItems:'centre'
  },
  logoContainer: {
    flex: 2,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
    width: 300,
    marginVertical: 5,
    alignSelf: "center"

  },
  logo: {
    // position: "absolute",
    right: Platform.OS === "android" ? 40 : -10,
    // top: Platform.OS === "android" ? 35 : 60,
    width: 400,
    height: 80,
    flex: 1,
    bottom: -18

    // marginVertical: 5,
    // alignSelf: "center",


  },
text1: {
  color: "black",
  bottom: 6,
  marginTop: 5,
  fontSize : 20
},
  text2: {
    color: "white",
    bottom: 6,
    marginTop: 5,
    // fontSize: 26,
  }
};
