import React , {useState} from 'react';
import {Component} from "react";
import Cop from "./assets/cop.gif";
import {
  View,
  Text,
  Button,
  Image,
} from "react-native"
// import { Button } from 'react-native-elements';

export default class Inspection extends Component {
 constructor(props) {
    super(props)
  }
  
  render() {
    return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Image 
          style={{
            width: 300,
            height: 200,
          }}
          resizeMode={"contain"}
          source={Cop}
        />
     <Text>A detective comes snooping around...</Text>
    
      <Button
        title="Bribe Him - $20"
        onPress={this.props.bribe}
        />
      
    </View>
  )
  }
}
