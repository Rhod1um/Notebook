//import { StatusBar } from 'expo-status-bar'; Jon siger unødvendig for basal app
import { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

//vi bruger bestemt måde at gemme værdi fra tekstfeltet
const [text, setText] = useState('')  //useState er en react-native hook, en hook, er som en session
//en hook "lever" på tværs af rendering, som en session. gemmer data. Her gemmer vi 
//ingenting som default. Vi får en liste fra den, variabel som har værdien og en metode som bruges til
//at gemme data i variablen. text her kan hedde hvad som helst, er bare en variabel
//på TextInput er der en masse built in metoder, vi kan lytte på om teksten ændre sig
//kalder setText så at ord man trykker gemmes i session/hook, tager i sig selv tastet text som parameter
//det her er meget centralt for eksamen: <TextInput placeholder='Ny note' onChangeText={(txt) => setText(txt)}></TextInput>
//inddrager hook, centralt 
//her kan vi bruge [], const [text, setText] på højre side, hvorfor? array decomposed, i én linje, to variabler

//her liste for at gemme tekst, gemmer tom array
const [list, setList] = useState([]) //er forsinket i browserens console.log

//handler til knap, normalt at gøre for knapper, skal have en handler
function addButtonPress(){
  console.log("du skrev: " + text) //på onPress kaldes funktionen når der trykkes
  //^der skal ikke være () på funktionskaldet for så kaldes den når den compiles
  //her skal tekst gemmes i en liste
  //... spread operator, tager tidligere array og man kan tilføje element til det
  if (text != 0){ //add kun hvis der er text, 0 er åbenbart også mellemrum med kun = og ikke ==?
    setList([...list,  text]) //så man har det gamle i ...list og text er det nye tilføjet
    console.log(list)
  }
  
}

  return (
    <View style={styles.container}>
      <TextInput placeholder='Ny note' onChangeText={(txt) => setText(txt)}></TextInput>
      <Button title='Add' onPress={addButtonPress}></Button>

      <Text>Noter: </Text>
      {list.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//ved navigation, ({navigation, route}), route er en container der kan sende data tilbage
//navigation er et objekt som er en funktion som parses
//&& er en simpel if sætning, specielt for react native 
