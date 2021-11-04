import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';

export default function Calculator() {
  const [eka, setEka] = useState ("");
  const [toka, setToka] = useState ("");
  const [vastaus, setVastaus] = useState ("");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [avain, setAvain] = useState(0);
  const button1Pressed = () => {
    setData([...data, {key: avain, value: eka + " + " + toka + " = " + (parseInt(eka)+parseInt(toka))}]);
    setAvain(avain+1);
    setText("");
    setVastaus("Result: " + (parseInt(eka)+parseInt(toka)))
  }
  const button2Pressed = () => {
    setData([...data, {key: avain, value: eka + " - " + toka + " = " + (parseInt(eka)-parseInt(toka))}]);
    setAvain(avain+1);
    setText("");
    setVastaus("Result: " + (parseInt(eka)-parseInt(toka)))
  }

  return (
      <View style={styles.container}>
        <Text>{vastaus}</Text>
        <TextInput style={styles.input}onChangeText={eka=>setEka(eka)}value={eka} keyboardType="numeric"/>
        <TextInput style={styles.input}onChangeText={toka=>setToka(toka)}value={toka} keyboardType="numeric"/>
        <View style={styles.buttons}>
          <Button onPress={button1Pressed} title="+" />
          <Button onPress={button2Pressed} title="-" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150
  },
  input: {
    width:200,
    borderColor:'gray',
    borderWidth:1
  },
  buttons: {
    width: 60,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  list: {
    marginTop: 15
  }
});