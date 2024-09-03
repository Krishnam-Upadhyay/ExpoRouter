import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={{flex:1,}}>

    <View style={{flex:1,backgroundColor:'green',justifyContent:"center",alignItems:"center"}} >
      <Text>Register</Text>
      <View>
      <Link href={"/login" }asChild><Button title='Open REgister Page'/></Link>

      </View>
    </View>

    </SafeAreaView>
  )
}

export default index