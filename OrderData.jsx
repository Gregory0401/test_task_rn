import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Map from "./components/Map";

import React from "react";

const OrderData = ({ values, onOpen }) => {
  const start = values;

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.h1}>Дані замовлення</Text>
          </View>

          <View style={styles.viewServices}>
            <View style={styles.data}>
              <Text style={styles.text}>Прізвище</Text>
              <Text style={styles.text4}>{values.surname}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.text}>По-батькові</Text>
              <Text style={styles.text4}>{values.secondname}</Text>
            </View>

            <View style={styles.data}>
              <Text style={styles.text}>Ім`я</Text>
              <Text style={styles.text4}>{values.name}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.text}>Номер телефону</Text>
              <Text style={styles.text4}>{values.tel}</Text>
            </View>
          </View>

          <View style={styles.button}>
            <Button title="Повна оплата" />
          </View>
          <Map start={start} />
          <View style={styles.view}>
            <Text style={styles.text3}>Подача транспорту</Text>
            <Text style={styles.text2}>2000 грн</Text>
          </View>
          <View style={styles.line2}></View>

          <View style={styles.view}>
            <Text style={styles.text3}>Маршрут загрузка-вигрузка</Text>
            <Text style={styles.text2}>2000 грн</Text>
          </View>
          <View style={styles.line2}></View>

          <View style={styles.view}>
            <Text style={styles.text3}>Послуги експедитора</Text>
            <Text style={styles.text2}>2000 грн</Text>
          </View>
          <View style={styles.line2}></View>

          <View style={styles.view}>
            <Text style={styles.text3}>Послуги грузчиків</Text>
            <Text style={styles.text2}>
              {values.loader * values.busy * 100}грн
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text2}>{values.loader} грузчиків </Text>
            <Text style={styles.text2}>{values.loader * 100}грн</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text2}>Зайнятість </Text>
            <Text style={styles.text2}>{values.busy}год</Text>
          </View>
          <View>
            <Text style={styles.h3}>Повна ціна </Text>
            <Text style={styles.text3}>
              {values.loader * values.busy * 100 + 2000 * 3} грн
            </Text>
          </View>

          <Button title="Оформити" onPress={onOpen} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(235, 235, 235, 0.5)",
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  viewData: {
    width: 350,
    height: 150,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  h1: {
    fontSize: 24,
    fonteHight: 700,
    lineeHight: 30,
    fontWeight: 700,
    letterSpacing: 0,
    textAlign: "center",
    marginBottom: 35,
    color: "#000000",
  },
  h3: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 16,
  },
  text: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    marginBotom: 3,
  },
  text3: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    marginBotom: 3,
  },
  text2: {
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 20,
    color: "#5A5A5A",
    marginLeft: "auto",
    marginRight: 5,
  },
  text4: {
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 20,
    color: "#5A5A5A",
  },
  viewServices: {
    width: 350,
    height: 122,
    flex: 0.15,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  data: {
    width: 150,
    marginBottom: 20,
  },
  view: {
    flex: 0.1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  line2: {
    backgroundColor: "#C4C4C4",
    width: 350,
    height: 1,
    marginBottom: 10,
  },
  button: {
    width: 350,
    height: 40,
    marginBottom: 17,
    alignItems: "center",
    backgroundColor: "#dfddf7",
  },
});

export default OrderData;
