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

var BUTTONS = ["دورات الأمن والسلامة", "الدورات المالية", "الدورات الادارية", " الدورات المهنية التخصصية", "دورات الحاسب الالي"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

function openThePage () {
  Linking.openURL('http://www.tamkeen.sa/pages.php?pages_id=14')
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
            <Title>البرامج التطويرية</Title>
          </Body>
          <Right />
        </Header>
        <Content padder >

      <Button  full info style={styles.mt15}
                  onPress={() => ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "البرامج التطويرية"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              ) }  
          >
            <Text >قائمة الدورات التطويرية</Text>
       </Button>

          <View style={{  marginTop: 20}}>
        <Button
          full danger style={styles.mt15}
          onPress={openThePage}
        >
        <Text style={styles.text}>لمعرفة المزيد عن الدورات التطويرية</Text>
        </Button>
        </View>


        </Content>
      </Container>
    );
  }
}
