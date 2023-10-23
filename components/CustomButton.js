import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function  CustomButton(props){
    return(
        <TouchableOpacity 
        onPress={props.action}
        style={{width: 170,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: props.color,
        borderWidth: 1,
        borderRadius: 5,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'}} >
        <Text 
        style={{fontSize: 18, color: 'white'}}>{props.text}
        </Text>
      </TouchableOpacity>
    );

}
