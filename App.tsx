import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button, } from 'react-native';
import { SupabaseClient } from "@supabase/supabase-js"
import { supabase } from './services/supabase';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

export default function App() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const { data, error } = await supabase.from("tasks").select("*")
  
    if(!error){
      console.error(error)
    }else{
      setTasks(data)
    }
  }

  const handleAddTask = async (task: string) => {
    const { data, error } = await supabase
    .from("tasks")
    .insert({ task, completed: false })
  }

  useEffect(() => {
    fetchTasks()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar uma nova tarefa</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder='Digite uma tarefa'
          onChange={(text) => setNewTask(text as any) }  
          value={newTask}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => handleAddTask(newTask)}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {tasks.map((task) => (
          <View style={styles.task} key={task.id}>
            <Text style={styles.textTask}>{task.task}</Text>
            <Button title="Concluir" />
            <Button title="Excluir" />
          </View>
        ))}
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
  },
  task: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textTask:{
    fontSize: 18,
    flex: 1,
  },
  completed:{
    textDecorationLine: 'line-through',
    color: '#888',
  }
});
