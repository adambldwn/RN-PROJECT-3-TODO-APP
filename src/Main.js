import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {main} from './styles';
import {TodoInput, TodoCard} from './components';

const Main = () => {

  const [list, setList] = useState([])
  
  function addTodo(text){
    const element = {
      id: list.length,
      todo: text,
      isDone: false
    }

    
    const newArray = [...list, element]
    setList(newArray)

  }

  const renderTodo = ({item}) => <TodoCard data={item}/>

  return(
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>{list.length}</Text>
        </View>

        <FlatList
          keyExtractor={(_,index)=> index.toString()}
          data={list}
          renderItem={renderTodo}
          ListEmptyComponent={() => <Text style={main.emptyComponent}>Nothing to do..</Text> }
        />

        <TodoInput 
          onTodoEnter={todoText => addTodo(todoText)}
        />

      </View>
    </SafeAreaView>
  )
}

export default Main;