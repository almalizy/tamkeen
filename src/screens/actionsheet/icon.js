import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right,
  Content,
  ActionSheet,
  Text
} from "native-base";
import {TouchableOpacity,Linking,View} from 'react-native';

import styles from "./styles";

var BUTTONS = [
  { text: "مساعد محاسب", icon: "calculator", iconColor: "#2c8ef4" },
  { text: "مندوب مبيعات", icon: "analytics", iconColor: "#f42ced" },
  { text: "مساعد اداري", icon: "aperture", iconColor: "#ea943b" },
  { text: "ادخال بيانات ومعالجة نصوص  ", icon: "paper", iconColor: "#fa213b" },
  { text: "استخدام الحاسب في الاعمال المكتبية", icon: "keypad", iconColor: "#2c8ef4" },
  { text: "محاسب مبيعات", icon: "cart", iconColor: "#f42ced" },
  { text: "خدمة عملاء نساء", icon: "rose", iconColor: "#ff3399" },
  { text: "عامل انتاج", icon: "person", iconColor: "#25de5b" },
  { text: "فنية انتاج", icon: "rose", iconColor: "red" }

];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

function openThePage () {
  Linking.openURL('http://www.tamkeen.sa/pages.php?pages_id=15')
}


export default class ActionSheetNB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>البرامج التأهيلية</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{padding: 20 }}>
            <Button  full info 
              onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Select an option"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )} >
              <Text > قائمة البرامج التأهيلية </Text>
            </Button>

        <View style={{  marginTop: 20 }}>
            <Button
            full danger 
            onPress={openThePage}>

            <Text style={styles.text}> البرامج التأهيلية</Text>
            </Button>
        </View>

      </Content>
    </Container>
    );
  }
}
