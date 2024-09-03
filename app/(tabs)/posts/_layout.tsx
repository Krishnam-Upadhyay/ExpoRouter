import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
  <Stack>
    <Stack.Screen name='index' options={{
        headerTitle:"Posts",
        
        headerStyle:{
            backgroundColor:'black',
           
            
        },
        headerTintColor:"white"
    }} />
    <Stack.Screen name='[id]'options={{
        headerTitle:"Posts",
        
        headerStyle:{
            backgroundColor:'black',
           
            
        },
        headerTintColor:"white"
    }} />
  </Stack>
  )
}

export default _layout