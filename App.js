import React , {useState} from 'react';
import {Component} from "react";
import { View, Text, Button } from "react-native";
import Main from './mainscreen.js';
import Inspector from './inspection.js';
// import { Button } from 'react-native-elements';

export default function App() {
  const [bloodlust, setBloodlust] = useState(0)
  const [customers, setCutomers] = useState(0)
  const [money, setMoney] = useState(0)
  const [superFood, setSuperFood] = useState(false)
  const [superFoodCount, setSuperFoodCount] = useState(0)
  const [inspector, setInspector] = useState(false)
  const [arrested, setArrested] = useState(false)
  const [risk, setRisk] = useState(0)
  
  const reset = () => {
    setBloodlust(0)
    setCutomers(0)
    setMoney(0)
    setSuperFoodCount(0)
    setArrested(false)
    setInspector(false)
    setRisk(0)
  }
  
  const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  const inspectorVisit = () => {
   let riskTaken = 20
   if (risk > 5 && risk < 10) {
     riskTaken = 15
   } else if (risk > 10) {
     riskTaken = 10
   }
   let number = randomInteger(1, riskTaken)
   if (number === 5) {
     setInspector(true)
   }
  console.log(number)
  }
  
  const bribe = () => {
    setInspector(false)
    if (money >= 20) {
      setMoney(money - 20)
      setInspector(false)
      setRisk(risk - 5)
    } else if (money < 20) {
      setArrested(true)
    }
    console.log(arrested)
  }
  
  const feedHim = () => {
    let number = randomInteger(5, 20)
    if (customers === 0) {
      alert('the store is empty')
    } else if (money < 5) {
      alert('Not Enough Money')
    }
    
    else if (bloodlust < number) {
      setBloodlust(0)
      setCutomers(customers - 1)
      setMoney(money - 5)
      inspectorVisit()
      setRisk(risk + 1)
    }
    else {
      setBloodlust(bloodlust - number)
      setCutomers(customers - 1)
      setMoney(money - 5)
      inspectorVisit()
      setRisk(risk + 1)
    }
    
  }
  
  const buySuperFood = () => {
    if (money >= 20) {
      setSuperFood(true);
      setBloodlust(bloodlust - 10)
      setSuperFoodCount(superFoodCount + 3)
      setMoney(money - 20)
      inspectorVisit()
      setRisk(risk + 1)
    } else {
      alert('not enough money')
    }
    
  }
  
  const letInCustomer = () => {
    setCutomers(customers + 1)
    setRisk(risk + 1)
//     setBloodlust(bloodlust + 5);
    
  }
  
  const makeSale = () => {
    let cash = randomInteger(5, 20)
    let hunger = randomInteger(5, 20)
    if (customers === 0) {
      alert('the store is empty')
    }
    
      else if (superFoodCount > 0) {
      setMoney(money + cash);
      setCutomers(customers - 1)
      setSuperFoodCount(superFoodCount - 1)
      inspectorVisit()
      setBloodlust(bloodlust + (hunger % 2))
      setRisk(risk + 1)
    } else {
      setMoney(money + cash);
      setCutomers(customers - 1)
      setBloodlust(bloodlust + hunger)
      inspectorVisit()
      setRisk(risk + 1)
    }
  }
  
  if (bloodlust >= 100) {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Your plant got too hungry and ate you!</Text>
    
      <Button
        title="Try Again"
        onPress={reset}
        />
      
    </View>
    )
  } else if (money >= 100 && bloodlust < 100) {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>You made rent without getting eaten! You win!</Text>
    
      <Button
        title="Try Again"
        onPress={reset}
        />
      
    </View>
    )
  } else if (inspector === true) {
    return(
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Inspector 
        bribe = {bribe}
        risk = {risk}
        />
      
    </View>
    )
  } else if (arrested === true) {
    return(
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>You didn't have enough money. You are under arrest</Text>
    
      <Button
        title="Try Again"
        onPress={reset}
        />
      
    </View>
    )
  } 
  
  
  else {
    return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Main
        bloodlust = {bloodlust}
        customers = {customers}
        money = {money}
        risk = {risk}
        superFoodCount = {superFoodCount}
        feedHim = {feedHim}
        letInCustomer = {letInCustomer}
        makeSale = {makeSale}
        buySuperFood = {buySuperFood}
        
        />
      
    </View>
  )
  }
  
  
  
}
