import React , {useState} from 'react';
import {Component} from "react";
import {
  View,
  Text,
  Button,
  Image,
} from "react-native"
import Plant from './assets/plant.gif'

export default class Main extends Component {
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
          source={Plant}
        />
      <Text>Customers in store: {this.props.customers}</Text>
      <Text>Money: {this.props.money}</Text>
      <Text>Your Plant's Bloodlust is {this.props.bloodlust}</Text>
      <Text>Superfood: {this.props.superFoodCount}</Text>
        <Text>Suspicion: {this.props.risk}</Text>
      <Button
        title="Feed Him a Customer"
        onPress={this.props.feedHim}
        />
      <Button
        title="Buy Superfood"
        onPress={this.props.buySuperFood}
        />
      <Button
        title="Let in a customer"
        onPress={this.props.letInCustomer}
        />
      <Button
        title="Make a Sale"
        onPress={this.props.makeSale}
        />
      
    </View>
  )
  }
}
