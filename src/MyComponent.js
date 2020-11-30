import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MyComponet = (props) =>{
    return(

        <View style={styles.container}>
            <Image source={props.image} style={{width: 385, height:200}} />
            <Text style={{fontWeight: 'bold', marginTop: 5}}>{props.title}</Text>
            <Text style={{marginTop: 5}}>{props.desc}</Text>
         </View>

    )
};


export default MyComponet;


const styles = StyleSheet.create({

    container: {
      margin: 5,
      padding: 5,
      borderWidth: 2,
      borderRadius: 4
 }
}
)