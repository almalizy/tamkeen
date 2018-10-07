import React, { Component } from "react";
import { Image,View,Linking ,Dimensions} from "react-native";
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
  Body,
  Right
} from "native-base";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;

const logo = require("../../../assets/mobilefix.jpg");
const cardImage = require("../../../assets/drawer-cover.png");

function openRegisterPage () {
  Linking.openURL('http://tamkeen.sa/adv.html')
}

class NHCardImage extends Component {
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
            <Title>دورات صيانة الجوال</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>دورات تعليم صيانة الجوال</Text>
                  <Text note>دورات احترافية</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
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
              <Text style={styles.mobileText}>نفسك تصبح مهندس جوالات ؟   </Text>
              <Text style={styles.mobileText}> بتسمع عن معاهد كثير ومش قادر تميز الافضل ؟؟  </Text>
              <Text style={styles.mobileText}>  اخذت دورة صيانة من قبل لكن لم تصل الى الاحتراف ؟؟؟ </Text>
              <Text style={styles.mobileText}>   !!!  الامر مختلف كثير مع معهد عكاظ للتدريب !!! </Text>
              

                </Body>

            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      <View>
              <Text style={styles.mobileText}>   دورتنا عملية مش مجرد شرح نظري</Text>
              <Text style={styles.mobileText}>   مدربين اكفَاء ممارسين لصيانة الجوال </Text>
              <Text style={styles.mobileText}>  معتمدين من قبل اكاديمية سموحة الدولية للتدريب </Text>
              <Text style={styles.mobileText}>   حقيبتنا التدريبية متميزة جدا</Text>
              <Text style={styles.mobileText}>  تقدر تحصل قيمة الدورة باحضار جوالات اصدقاءك وعائلتك واصلاحهم عمليا اثناء الدورة  تحت اشراف المدرب ومساعدته </Text>
              <Text style={styles.mobileText}>   وفوق ده كله شهادة معتمدة من المؤسسة العامة للتدريب المهني والتقني </Text>
      </View>
         <View style={{ marginBottom: 20 }}>
 

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

export default NHCardImage;
