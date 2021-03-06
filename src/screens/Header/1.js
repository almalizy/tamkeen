import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";


import {TouchableOpacity,Linking,View} from 'react-native';
function openThePage () {
  Linking.openURL('http://www.tamkeen.sa/pages.php?pages_id=9')
}


class Header1 extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title> مقدمة عن التوظيف </Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
          </Right >   
               </Header>

        <Content padder style={{padding: 20 }}>
          <Button  full info style={{marginBottom: 30}}
                    onPress={openThePage}
                    >
            <Text>قراءة المقدمة</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Header1;
