import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button, } from 'react-native';

export default function App() {
  const [newTask, setNewTask] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar uma nova tarefa</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder='Digite uma tarefa'
          onChange={ (text) => setNewTask(text)}
          value={newTask}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.task}>
          <Text style={[styles.textTask]} >Estudar react</Text>
          <Button title="Concluir" />
          <Button title="Excluir" />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: "#333"
  },
  inputContainer:{
    flexDirection: "row",
    marginBottom: 20,
  },
  input:{
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  button:{
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",

  }
});
