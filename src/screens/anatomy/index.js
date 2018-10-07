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
            <Title>.ماذا تعرف عن تمكين؟..</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
          </Right >
                  </Header>

        <Content padder >
        <View style={styles.view}>
          <Text style={styles.text}>نبذة عن تمكين</Text>
          <Text style={styles.text}>  تأسست شركة تمكين الشاملة المحدودة كأحد الكيانات الرائدة في مجال التدريب الموجه والتعليم المستمر , وخبراتها في مجال التدريب تمتد لأكثر من 30 سنه حيث أن لديها عدة فروع للتدريب تتنوع برامجها التدريبية لتشمل جميع مناحي التطوير والتأهيل ,
          </Text> 

          <Text style={styles.text}>    وجميعها يهدف إلى سد الفجوة بين الممارسات والنظريات ؛ ونقل المعارف الفنية والإدارية في الدول المتقدمة إلى بيئتنا المحلية بسرعة واحتراف , لتمكين جهاتنا الحكومية ومؤسساتنا وقياداتنا وباحثينا من التميز والمنافسة  وبالتالي اللحاق بركب الإدارة العالمية .
          </Text>

          <Text style={styles.text}>   وتكمن فروع تمكين الشاملة المحدودة كما يلي :
          </Text>

          <Text style={styles.text}>  
            معهد عكاظ للتدريب 
            </Text>

            <Text style={styles.text}> 
            المعهد العلمي الإداري
            </Text>

            <Text style={styles.text}> 
            المعهد الثقافي السعودي العالي النسائي للتدريب 
            </Text>
            <Text style={styles.text}> المركز الثقافي السعودي 
            </Text>

            <Text style={styles.text}> 
            مكتب التوظيف الأهلي 
           </Text>

          <Text style={styles.text}>   وعلى مر السنين كان لشركة تمكين الشاملة المحدودة الريادة في تنفيذ البرامج التدريبية المتخصصة حسب المعايير العالمية وطبقاً لأعلى مستويات الجودة والإحتراف والتي تواكب التغير المستمر في الأنشطة والأعمال والاحتياجات ,
          </Text>

         <Text style={styles.text}>وهي بذلك تساعد على تأهيل المديرين والموظفين ورفع كفاءتهم وتفعيل أدائهم , مما ينعكس إيجابياً على زيادة الإنتاج وتحسين مستوى الأداء , لجهات القطاع الحكومي والقطاع الخاص على حدءٍ سواء 
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
