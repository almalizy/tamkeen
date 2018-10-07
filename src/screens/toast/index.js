import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  View
} from "native-base";

import styles from "./styles";

class Anatomy extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>عن المبرمج</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
          </Right >

        </Header>

        <Content padder >
        <View style={styles.view}>
          <Text style={styles.text}>About the App devoloper</Text>

           <Text style={styles.text}>  
           Android and ios Apps Devoloper
            </Text>
            
          <Text style={styles.text2}> about 2 years Experience at React Natvie devoloper and
            working at alot of frameworks like Native Base and Redux ....
          </Text> 

          <Text style={styles.text2}> also i had  Experiance at JAVA , JS , HTML and  CSS  
          </Text>

          <Text style={styles.text2}> 
          I had  over 13 years past work Experiance at mobile software
          </Text>

         

           

            <Text style={styles.text2}> 
            experiance at APi , Node and Mongo DB 
            </Text>

            <Text style={styles.text}>
            Email : softawie@gmail.com
            </Text>

            <Text style={styles.text}> 
            </Text>

            <Text style={styles.text}> 
           </Text>

          <Text style={styles.text}>  
          </Text>

         <Text style={styles.text}> 
         </Text>

        </View>
        </Content>

        {/* <Footer>
          <FooterTab>
            <Button active full>
              <Text>الرجوع للخلف</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

export default Anatomy;
