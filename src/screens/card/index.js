import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import styles from "./styles";
// import Home from "./screens/home/";


const datas = [

  {
    route: "NHCardImage",
    text: "دورات صيانة الجوال"
  },
  {
    route: "NHCardShowcase",
    text: "دورات الحاسب الالي"
  },
  {
    route: "NHCardHeaderAndFooter",
    text: "دورات اللغة الانجليزية"
  },
  {
    route: "NHCardList",
    text: "صفحاتنا على مواقع التواصل الاجتماعي"
  },
  {
    route: "BasicCard",
    text: "اقتراحات وتعليقات"
  },

];

class NHCard extends Component {
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
            <Title>الدورات التدريبية</Title>
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




export default NHCard;
