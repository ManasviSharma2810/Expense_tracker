import React from 'react'
import { View} from 'react-native'
import { useSelector } from 'react-redux'
const ExpensesList = () => {
    const usersData = useSelector(state=>state.data)
    console.log(usersData);
    
  return (
   <View>

   </View>
  )
}

export default ExpensesList;
