import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Content,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "SimpleDeck",
    text: "صور قاعات التدريب على صيانة الجوالات"
  },
  {
    route: "SoftwareHall",
    text: "صور من معامل السوفت وير"
  },
  {
    route: "AdvancedDeck",
    text: "صور من دورات صيانة الجوال السابقة"
  },
  {
    route: "PcHall",
    text: "صور من معامل الحاسب الالي"
  },
  {
    route: "EnglishHall",
    text: "صور قاعات ومعامل اللغة الانجليزية"
  }
];
class NHDeckSwiper extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>الاستوديو</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
          </Right >

        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >

                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>

                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
                
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHDeckSwiper;
