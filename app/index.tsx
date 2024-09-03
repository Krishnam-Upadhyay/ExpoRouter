import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const index = () => {
  return (
    <SafeAreaView style={{flex:1,}}>
        <StatusBar style='light' />
    <View style={{flex:1,backgroundColor:'green',justifyContent:"center",alignItems:"center"}} >
      <Text>index</Text>
      <View>
      <Link href={"/register" }asChild><Button title='Open REgister Page'/></Link>

      </View>
      <View>
      <Link href={"/one" }asChild><Button title='Open REgister Page'/></Link>

      </View>
    </View>

    </SafeAreaView>
  )
}

export default index