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

const cardOne = require("../../../assets/pc-1.jpg");
const cardTwo = require("../../../assets/pc-2.jpg");
const cardThree = require("../../../assets/pc-3.jpg");
const cardFour = require("../../../assets/pc-4.jpg");
const cards = [
  {
    text: " معمل حاسب الي 1",
    name: "One",
    image: cardOne
  },
  {
    text: "معمل حاسب الي 2 ",
    name: "Two",
    image: cardTwo
  },
  {
    text: "معمل الحاسب الالي ",
    name: "Three",
    image: cardThree
  },
  {
    text: "معمل الحاسب الالي",
    name: "Four",
    image: cardFour
  }
];

class PcHall extends Component {
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
            <Title>صور اثناء تدريب  للطلاب</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>انتهى..</Text>
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
                      <Text note>صور للتطبيق العملي</Text>
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
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 15
          }}
        >
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>لليسار</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>لليمين</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}

export default PcHall;
