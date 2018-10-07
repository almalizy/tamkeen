import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const cardOne = require("../../../assets/hallone.jpg");
const cardTwo = require("../../../assets/halltwo.jpg");
const cardThree = require("../../../assets/hallthree.jpg");
const cardFour = require("../../../assets/hallfour.jpg");

const cards = [
  {
    text: "صورة لاحد قاعات المحاضرات",
    name: "One",
    image: cardOne
  },
  {
    text: "صورة لاحد قاعات المحاضرات",
    name: "Two",
    image: cardTwo
  },
  {
    text: "صورة للمعدات بالقاعات",
    name: "Three",
    image: cardThree
  },
  {
    text: "نموذج للمعدات داخل القاعات",
    name: "Four",
    image: cardFour
  }
];

class SimpleDeck extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>صور من القاعات</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            dataSource={cards}
            looping={false}
            renderEmpty={() =>
              <View>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      <Text note>صور القاعات</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 300
                    }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                  <Text>
                    {item.name}
                  </Text>
                </CardItem>
              </Card>}
          />
        </View>
      </Container>
    );
  }
}

export default SimpleDeck;
