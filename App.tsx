import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>("a")


  return (
    <View style={styles.container}>
      <View>
        <TextInput 
        onChangeText={v => setName(v)}
        value={name}
        autoCapitalize='words'
        // keyboardType='numeric'
        // maxLength={6}
        // multiline={true}
        autoCorrect={false}
        style={styles.textInput}
         />
        <Text style={styles.text}>{name}</Text>
      </View>

      <Button title="Add new"  />

      <Text style={styles.text}>
        hello khac tu hihi
        <Text style={styles.tudeptrai}> tu dep trai</Text>
        </Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',    
    paddingTop: 50,
    paddingHorizontal: 20
  },

  text: {
    fontSize: 30,
    color: "red"
  },
  tudeptrai: {
    color: "green"
  }, 
  textInput: {
    borderColor: "violet",
    borderWidth: 1,
    padding: 10
  }
});
