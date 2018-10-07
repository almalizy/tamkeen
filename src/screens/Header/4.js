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
  Linking.openURL('http://www.tamkeen.sa/pages.php?pages_id=11')
}


class Header4 extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>الدراسات والأبحاث </Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
          </Right >
                  </Header>

        <Content padder>
          <Button style={{alignSelf:'center'}}
                    onPress={openThePage}
                    >
            <Text>الدراسات والأبحاث</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Header4;
