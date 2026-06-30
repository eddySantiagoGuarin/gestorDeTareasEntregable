import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';

// Importaciones nombradas usando llaves
import { Header } from './src/components/Header';
import { TaskInput } from './src/components/TaskInput';
import { TaskItem } from './src/components/TaskItem';

export const App = () => {

  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const initialTasks = [
      { id: '1', text: 'Finalize project proposal', completed: false },
      { id: '2', text: 'Call client about feedback', completed: false },
      { id: '3', text: 'Buy groceries for dinner', completed: false },
    ];
    setTasks(initialTasks);
  }, []);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#504f4f" />
      <Header />
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <TaskInput onAddTask={handleAddTask} />

        <Text style={styles.sectionTitle}>Active Tasks ({activeTasks.length})</Text>
        {activeTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}

        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>
          Completed Tasks ({completedTasks.length})
        </Text>
        {completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#504f4f',
  },
  scrollContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#504f4f  ',
    marginBottom: 12,
  },
});

// Nota: Si su entorno (como Expo o Metro) requiere que el archivo raíz tenga un default, 
// puede dejar esta línea al final del archivo sin alterar el formato de flecha de arriba:
export default App;