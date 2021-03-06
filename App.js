import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { History } from './history';

const Stack = createStackNavigator();

function CalculatorScreen({ navigation }) {
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
          <Button onPress={button1Pressed} title=" + " />
          <Button onPress={button2Pressed} title=" - " />
          <Button
        title="History"
        onPress={() => navigation.navigate('History', {data})}
      />
        </View>
      </View>
  );
}

function HistoryScreen({route, navigation}) {
  const {data} = route.params;
  return (
      <View style={styles.container}>
        <View style={styles.list}>
        <Text>History: </Text>
        <FlatList data ={data}renderItem={({item})=><Text>{item.value}</Text>}/>
        </View>
      </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:200,
    borderColor:'gray',
    borderWidth:1
  },
  buttons: {
    width: 140,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
},
list: {
  marginTop: 15,
  alignItems: 'center'
}
});