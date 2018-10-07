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
  Left,
  Right,
  Body,
  
} from "native-base";
import {TouchableOpacity,Linking,View} from 'react-native';
import styles from "./styles";

function openGooglePage () {
  Linking.openURL('http://www.tamkeen.sa/index.php')
}
function openFacebook () {
  Linking.openURL('https://www.facebook.com/tamkeencomp1985/')
}
function openTwitterPage () {
  Linking.openURL('https://twitter.com/TamkeenComp1985')
}
function openInstagramPage () {
  Linking.openURL('https://www.instagram.com/tamkeencomp1985/')
}
function openYouTubePage () {
  Linking.openURL('https://www.instagram.com/tamkeencomp1985/')
}
function openRegisterPage () {
  Linking.openURL('http://tamkeen.sa/adv.html')
}


  

class NHCardList extends Component {
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
            <Title
          >...تواصل معنا...</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>

            <CardItem header bordered>
              <Text>مواقع التواصل الاجتماعي</Text>
            </CardItem>

            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-googleplus"
                  style={{ color: "#DD5044" }}
                />
                <Text  onPress={openGooglePage} >Google Plus</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-facebook"
                  style={{ color: "#3B579D" }}
                />
                <Text onPress={openFacebook} >facebook</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Icon 
                 active
                  name="logo-twitter"
                 style={{ color: "#55ACEE" }}
                  />
                <Text onPress={openTwitterPage} >Twitter</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            {/* <CardItem>
              <Left>
                <Icon active name="logo-reddit" style={{ color: "#FF4500" }} />
                <Text>Reddit</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem> */}

            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-instagram"
                  style={{ color: "#007BB6" }}
                />
                <Text  onPress={openInstagramPage} >Instagram</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Icon 
                active 
                name="logo-youtube"
                 style={{ color: "#D62727" }} 
                 />
                <Text onPress={openYouTubePage} > YouTube  </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

           {/* <Text onPress={Alert.alert('مرحبا بكم في شركة تمكين الشاملة المحدودة')} > YouTube  </Text> */}

             
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


export default NHCardList;
