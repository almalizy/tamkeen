import React, { Component } from "react";
import { Image, Dimensions,View,Linking } from "react-native";
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
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/pc-repaire.jpg");
const cardImage = require("../../../assets/repairePc.jpg");

function openRegisterPage () {
  Linking.openURL('http://tamkeen.sa/adv.html')
}
class NHCardShowcase extends Component {
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
            <Title>صيانة الحاسب الالي</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>دورات الحاسب الآلي</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
                <Text>
                  اذا اردت ان تواكب التكنولوجيا....
                  اذا اردت ان تسير نحو المستقبل....
                  اذا اردت ان تلبي متطلبات الاسواق...
                  فبادر بالحصول على دورات الحاسب الالي في معهد عكاظ
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <View style={{ marginBottom: 80 }}>
        <Button
              style={{ backgroundColor: "green", alignSelf: "center" }}
              onPress={openRegisterPage}
            >
              <Icon active name="people" />
              <Text style={styles.text}>التسجيل....هنا !! </Text>
            </Button>

          </View> 
      </Container>
      
    );
  }
}

export default NHCardShowcase;
