import { useState } from "react";
import Form from "./Form";
import OrderData from "./OrderData";
import { View, StyleSheet } from "react-native";
import { Map } from "./components/Map";

const Order = () => {
  const [country, setCountry] = useState("");
  const [obl, setObl] = useState("");
  const [town, setTown] = useState("");
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [secondname, setSecondName] = useState("");
  const [busy, setBusy] = useState("");
  const [loader, setLoader] = useState("");
  const [adress, setAdress] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [country2, setCountry2] = useState("");
  const [obl2, setObl2] = useState("");
  const [town2, setTown2] = useState("");
  const [adress2, setAdress2] = useState("");

  const onSubmit = (values) => {
    setCountry(values.country);
    setObl(values.obl);
    setTown(values.town);
    setTel(values.tel);
    setName(values.name);
    setSurname(values.surname);
    setSecondName(values.secondname);
    setBusy(values.busy);
    setLoader(values.loader);
    setAdress(values.adress);

    setCountry2(values.country2);
    setObl2(values.obl2);
    setTown2(values.town2);
    setAdress2(values.adress2);

    setOpen(true);
  };

  const date = {
    country,
    obl,
    town,
    tel,
    name,
    surname,
    secondname,
    busy,
    adress,
    loader,
    country2,
    obl2,
    town2,
    adress2,
  };

  const onOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <View style={styles.container}>
        {/* {open2 && <Map values={(start, finish)} />} */}
        {open ? (
          <OrderData values={date} onOpen={onOpen} />
        ) : (
          <Form
            // updateData={this.updateData}
            onOpen={onOpen}
            onSubmit={onSubmit}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});

export default Order;
