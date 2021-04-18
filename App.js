import React , {useState} from 'react';
import {Component} from "react";
import { View, Text, Button } from "react-native";
// import { Button } from 'react-native-elements';

export default function App() {
  const [bloodlust, setBloodlust] = useState(0)
  const [customers, setCutomers] = useState(0)
  const [money, setMoney] = useState(0)
  
  const feedHim = () => {
    if (customers === 0) {
      alert('the store is empty')
    } else if (money < 5) {
      alert('You are bankrupt. Game Over')
      setMoney(0);
      setCutomers(0)
      setBloodlust(0)
    }
    
    else if (bloodlust < 10) {
      setBloodlust(0)
      setCutomers(customers - 1)
      setMoney(money - 5)
    }
    else {
      setBloodlust(bloodlust - 10)
      setCutomers(customers - 1)
      setMoney(money - 5)
    }
    
  }
  
  const letInCustomer = () => {
    setCutomers(customers + 1);
    setBloodlust(bloodlust + 5);
  }
  
  const makeSale = () => {
    if (customers === 0) {
      alert('the store is empty')
    } else if (money >= 990 && bloodlust < 95) {
      setMoney(money + 10);
      setBloodlust(bloodlust + 5)
      alert('You made rent without getting eaten! You win!')
      setMoney(0);
      setCutomers(0)
      setBloodlust(0)
    } else if (bloodlust >= 95) {
      alert('Uh Oh! Your plant got to hungry and ate you!')
      setMoney(0);
      setCutomers(0)
      setBloodlust(0)
    }
    
      else {
      setMoney(money + 10);
      setCutomers(customers - 1)
      setBloodlust(bloodlust + 5)
    } 
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Customers in store: {customers}</Text>
      <Text>Money: {money}</Text>
      <Text>Your Plant's Bloodlust is {bloodlust}</Text>
      <Button
        title="Feed Me"
        onPress={feedHim}
        />
      <Button
        title="Let in a customer"
        onPress={letInCustomer}
        />
      <Button
        title="Make a Sale"
        onPress={makeSale}
        />
      
    </View>
  );
}
