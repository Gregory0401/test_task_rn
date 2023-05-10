import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { Formik } from "formik";
import { React, useState } from "react";
import Calendar1 from "./components/Calendar2";
import Calendar2 from "./components/Calendar.jsx";

const Form = ({ onSubmit, onOpen }) => {
  const dataRadio = [
    { label: "Послуга экспедитора", value: "послуга экспедитора" },
    { label: "Послуга грузчиків", value: "послуга грузчиків" },
  ];
  const dataRadioPay = [
    { label: "Повна оплата", value: "повна оплата" },
    { label: "Оплата частинами", value: "оплата частинами" },
  ];

  const [chosenOption, setChosenOption] = useState("послуга экспедитора");
  const [chosenOptionPay, setChosenOptionPay] = useState("повна");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");

  const onOpenCalendar = () => {
    setOpen((prevState) => !prevState);
  };
  const onOpenCalendar2 = () => {
    setOpen2((prevState) => !prevState);
  };
  const onDayPress = (day) => {
    setSelected(day.dateString);
    setOpen((prevState) => !prevState);
  };
  const onDayPress2 = (day) => {
    setSelected2(day.dateString);
    setOpen2((prevState) => !prevState);
  };
  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <Text style={styles.h1}>Замовити</Text>

            <Formik initialValues={{ country: "" }} onSubmit={onSubmit}>
              {(props) => (
                <View>
                  <Text style={styles.h2}>Загрузка</Text>
                  <Text style={styles.h3}>Місце</Text>
                  <View>
                    <Text style={styles.text}>Країна</Text>
                    <View style={styles.vectorConteiner}>
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange("country")}
                        value={props.values.country}
                        placeholder="Україна"
                      />
                      <Image
                        style={styles.vector}
                        source={require("./img/vector.png")}
                      />
                    </View>

                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Text style={styles.text}>Область</Text>
                    <View style={styles.vectorConteiner}>
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange("obl")}
                        placeholder="Київська"
                        value={props.values.obl}
                      />
                      <Image
                        style={styles.vector}
                        source={require("./img/vector.png")}
                      />
                    </View>

                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Text style={styles.text}>Місто</Text>
                    <View style={styles.vectorConteiner}>
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange("town")}
                        value={props.values.town}
                        placeholder="Київ"
                      />
                      <Image
                        style={styles.vector}
                        source={require("./img/vector.png")}
                      />
                    </View>

                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Text style={styles.text}>Адреса</Text>
                    <View style={styles.vectorConteiner}>
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange("adress")}
                        value={props.values.adress}
                        placeholder="Антоновича 16"
                      />
                      <Image
                        style={styles.vector}
                        source={require("./img/vector.png")}
                      />
                    </View>

                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Text style={styles.h3}>Дата і час прибуття</Text>
                    <View style={styles.dateHours}>
                      <View style={styles.date}>
                        <Text>Дата</Text>
                        <Text style={styles.text}>{selected}</Text>
                        <View style={styles.lineCalendar}></View>
                      </View>
                      <TouchableOpacity onPress={onOpenCalendar}>
                        <Image
                          style={styles.logo}
                          source={require("./img/calend.png")}
                        />
                      </TouchableOpacity>
                      <View style={styles.hours}>
                        <Text>Час</Text>
                        <TextInput style={styles.input3} />

                        <View style={styles.lineHours}></View>
                      </View>
                    </View>
                    {open && <Calendar2 onDayPress={onDayPress} />}
                  </View>
                  <View style={styles.line2}></View>

                  <View>
                    <Text style={styles.h2}>Вигрузка</Text>
                    <Text style={styles.h3}>Місце</Text>

                    <View>
                      <Text style={styles.text}>Країна</Text>
                      <View style={styles.vectorConteiner}>
                        <TextInput
                          style={styles.input}
                          onChangeText={props.handleChange("country2")}
                          value={props.values.country2}
                          placeholder="Україна"
                        />
                        <Image
                          style={styles.vector}
                          source={require("./img/vector.png")}
                        />
                      </View>

                      <View style={styles.line}></View>
                    </View>
                    <View>
                      <Text style={styles.text}>Область</Text>
                      <View style={styles.vectorConteiner}>
                        <TextInput
                          style={styles.input}
                          onChangeText={props.handleChange("obl2")}
                          value={props.values.obl2}
                          placeholder="Київська"
                        />
                        <Image
                          style={styles.vector}
                          source={require("./img/vector.png")}
                        />
                      </View>

                      <View style={styles.line}></View>
                    </View>
                    <View>
                      <Text style={styles.text}>Місто</Text>
                      <View style={styles.vectorConteiner}>
                        <TextInput
                          style={styles.input}
                          onChangeText={props.handleChange("town2")}
                          value={props.values.town2}
                          placeholder="Київ"
                        />
                        <Image
                          style={styles.vector}
                          source={require("./img/vector.png")}
                        />
                      </View>

                      <View style={styles.line}></View>
                    </View>
                    <View>
                      <Text style={styles.text}>Адреса</Text>
                      <View style={styles.vectorConteiner}>
                        <TextInput
                          style={styles.input}
                          onChangeText={props.handleChange("adress2")}
                          value={props.values.adress2}
                          placeholder="Антоновича 17"
                        />
                        <Image
                          style={styles.vector}
                          source={require("./img/vector.png")}
                        />
                      </View>

                      <View style={styles.line}></View>
                    </View>

                    <View>
                      <Text style={styles.h3}>Дата і час прибуття</Text>
                      <View style={styles.dateHours}>
                        <View style={styles.date}>
                          <Text>Дата</Text>
                          <Text style={styles.text}>{selected2}</Text>
                          <View style={styles.lineCalendar}></View>
                        </View>
                        <TouchableOpacity onPress={onOpenCalendar2}>
                          <Image
                            style={styles.logo}
                            source={require("./img/calend.png")}
                          />
                        </TouchableOpacity>
                        <View style={styles.hours}>
                          <Text>Час</Text>
                          <TextInput style={styles.input3} />
                          <View style={styles.lineHours}></View>
                        </View>
                      </View>

                      {!open2 && <Calendar1 onDayPress2={onDayPress2} />}
                    </View>
                    <View style={styles.line2}></View>

                    <View style={styles.view}>
                      <RadioForm
                        radio_props={dataRadio}
                        initial={0}
                        onPress={(value) => {
                          setChosenOption(value);
                        }}
                      />
                    </View>
                    <View style={styles.viewServices}>
                      <View style={styles.viewLoader}>
                        <Text style={styles.text}>Кількість грузчиків </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={props.handleChange("loader")}
                          value={props.values.loader}
                          placeholder="2"
                        />
                        <View style={styles.lineViewLoader}></View>
                      </View>

                      <View style={styles.viewBusy}>
                        <Text style={styles.text}>Зайнятість </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={props.handleChange("busy")}
                          value={props.values.busy}
                          placeholder="3год"
                        />
                        <View style={styles.lineBusy}></View>
                      </View>
                    </View>
                    <View style={styles.line2}></View>
                    <View>
                      <Text style={styles.h2}>Контактні дані</Text>
                    </View>
                    <View>
                      <Text style={styles.text}>Прізвище</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange("surname")}
                        value={props.values.surname}
                        placeholder="Іванов"
                      />
                    </View>
                    <View style={styles.line3}></View>

                    <View>
                      <Text style={styles.text}>Ім`я</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange("name")}
                        value={props.values.name}
                        placeholder="Іван"
                      />
                    </View>
                    <View style={styles.line3}></View>

                    <View>
                      <Text style={styles.text}>По-батькові</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange("secondname")}
                        value={props.values.secondname}
                        placeholder="Іванович"
                      />
                    </View>
                    <View style={styles.line3}></View>

                    <View>
                      <Text style={styles.text}>Номер телефону</Text>
                      <TextInput
                        type="number"
                        style={styles.input2}
                        onChangeText={props.handleChange("tel")}
                        value={props.values.tel}
                        placeholder="0992222222"
                      />
                    </View>
                    <View style={styles.line3}></View>

                    <View>
                      <Text style={styles.h2}>Оплата</Text>

                      <RadioForm
                        radio_props={dataRadioPay}
                        initial={0}
                        onPress={(value) => {
                          setChosenOptionPay(value);
                        }}
                      />
                    </View>
                  </View>
                  <Button title="Далі" onPress={props.handleSubmit} />
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
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
  h1: {
    fontSize: 24,
    fonteHight: 700,
    lineeHight: 30,
    fontWeight: 700,
    letterSpacing: 0,
    textAlign: "center",
    marginBottom: 15,
    color: "#000000",
  },
  h2: {
    color: "#665CD1",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 25,
    marginBottom: 10,
  },
  h3: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 10,
  },
  text: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    marginBotom: 3,
  },
  input: {
    width: 326,
    height: 20,
    marginBottom: 3,
  },
  input2: {
    width: 326,
    height: 20,
    marginBottom: 3,
    keyboardType: "tel",
  },
  input3: {
    width: 66,
    height: 12,
    marginBottom: 3,
  },
  line: {
    width: 326,
    height: 1,
    backgroundColor: "#665CD1",
    marginBottom: 15,
  },
  lineCalendar: {
    width: 184,
    height: 1,
    backgroundColor: "#665CD1",
    marginBottom: 15,
  },
  lineHours: {
    width: 66,
    height: 1,
    backgroundColor: "#665CD1",
    marginBottom: 15,
  },
  viewLoader: {
    width: 138,
    marginRight: 20,
  },
  lineViewLoader: {
    width: 138,
    height: 1,
    backgroundColor: "#665CD1",
    marginBottom: 15,
  },
  viewBusy: {
    width: 78,
  },
  lineBusy: {
    width: 78,
    height: 1,
    backgroundColor: "#665CD1",
    marginBottom: 15,
  },
  viewServices: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  dateHours: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  line2: {
    backgroundColor: "#C4C4C4",
    width: 350,
    height: 1,
    marginBottom: 20,
  },
  line3: {
    width: 350,
    height: 1,
    backgroundColor: "#665CD1",
    marginBottom: 15,
  },
  view: {
    marginBottom: 20,
  },
  num: {
    keyboardType: "number - pad",
  },

  logo: {
    width: 18,
    height: 18,
    marginRight: 79,
  },
  date: {
    width: 184,
  },
  hours: {
    width: 66,
  },
  vector: {
    width: 10,
    height: 10,
  },
  vectorConteiner: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default Form;
