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
  Right,
  
} from "native-base";
import {TouchableOpacity,Linking,View,Dimensions,Image} from 'react-native';

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;

const cardImage = require("../../../assets/ielts.png");

function openRegisterPage () {
  Linking.openURL('http://tamkeen.sa/adv.html')
}
class NHCardHeaderAndFooter extends Component  {
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
            <Title>Saudi Culture Center</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>The Best Way For  English & IELTS Test</Text>
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
                <Text >
                We provide :
                </Text>
                <Text>
                Variety of English courses and IELTS preparation 
                through tutorial videos by native speakers and
                 many interactive activites that covers 
                 listening , reading , writing and speaking .
                </Text>
                <Text>
                Individual attention for every trainee,
                esecially for weak trainees focusing on weakness areas . 
                </Text>

                

                

              </Body>
            </CardItem>

              
            <CardItem>
              <Body>
              <Text>
                Unique  helpful tips before the exam for better results 
               </Text>
              <Text>
                  Instant feedback in exercises based in real test models and mock exams  
               </Text>

              </Body>
            </CardItem>
            <CardItem>
              <Body>
              
              </Body>
            </CardItem>
            <CardItem footer>
              <Text></Text>
            </CardItem>
          </Card>
        </Content>
        <View style={{ marginBottom: 80 }}>

            <Button
              style={{ backgroundColor: "green", alignSelf: "center" }}
              onPress={openRegisterPage}
            >
              <Icon active name="people" />
              <Text style={styles.text}>التسجيل  !! </Text>
            </Button>

               
          </View> 
      </Container>
    );
  }
}

export default NHCardHeaderAndFooter;
