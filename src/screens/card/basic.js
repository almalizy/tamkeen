import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";
import {TouchableOpacity,Linking,View} from 'react-native';


import styles from "./styles";
function openRegisterPage () {
  Linking.openURL('http://tamkeen.sa/adv.html')
}


class Basic extends Component {
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
            <Title>لمزيد من الاقتراحات والتعليقات على التطبيق</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Text>نتلقى تعليقاتكم واقتراحاتكم على الايميل</Text>
                <Text>	‫okaz.ksa.05@gmail.com</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Basic;
