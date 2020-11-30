import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import MyComponent from '../src/MyComponent';

const App = () => {
  
  return(
    <View>
    
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.news}>News</Text>
          <Image source={require('../img/news.jpg')} style={{width: 50, height: 50}}/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
        </View>

        <MyComponent title={'A Trump-Pence Strategy on the Virus: Interrupt, Distract, Change the Subject'} image={require('../img/trump-pence.jpg')} desc={"The White House’s approach to avoiding accountability for its record is becoming clearer than ever, and it was on display as Mike Pence faced Kamala Harris"}/>

        <MyComponent title={"World Food Program Awarded Nobel Peace Prize for Work During Pandemic"} image={require('../img/nobel.jpg')} desc={"The Nobel committee said the U.N. agency’s work to address hunger had laid the foundations for peace in nations ravaged by war."}/>

        <MyComponent title={"The pandemic has caused the world’s economies to diverge"} image={require('../img/pandemi.jpg')} desc={"But its long-term impact will be even more far-reaching The pandemic has caused the world’s conomies to diverge But its long-term impact will be even more far-reaching"}/>

        <MyComponent title={"Trump to address hundreds from White House balcony on Saturday"} image={require('../img/kamala.jpg')} desc={"President Donald Trump will emerge from his Covid-forced isolation Saturday for a speech from a White House balcony, allowing the public their first independent glimpse in days of a leader recovering from coronavirus."}/>



      </ScrollView>
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  header : {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  news : {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:10
  },
  button: {
    borderWidth : 2,
    borderRadius : 4,
    borderColor: 'black',
    backgroundColor: 'black',
    marginRight: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontext: {
    color: 'white',
  },
})