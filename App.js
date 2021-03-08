import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    width: "80%",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  }
});

export default function App() {
  const [text, setText] = useState('');
  const [textArr, setTextArr] = useState([])
  console.log(text)
  function addTodo() {
    setTextArr(prev => [...prev, text])
  }
  console.log(textArr)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>Todo List</Text>
        <TextInput
          style={{
            height: 40, paddingLeft: 10,
            width: '80%', borderColor: 'gray',
            borderWidth: 1, marginBottom: 10
          }}
          onChangeText={(e) => setText(e)}
          placeholder="Type your notes"
        />
        <Button
          onPress={addTodo}
          title="Learn More"
        />
        {/* <FlatList
        data={textArr}
        renderItem={(data) => {
          return (
            <View style={styles.card}>
              <Text>{data.item}</Text>
            </View>
          )
        }}
      /> */}
        {
          textArr.map(data => {
            return (
              <View style={styles.card}>
                <Text>{data}</Text>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  );
}

