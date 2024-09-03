import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

const RootLayout = () => {
  const router = useRouter();
  return (
   <Stack screenOptions={{
    headerStyle:{
      backgroundColor:"black",
      
    },
    headerTintColor:"white"
   }}>
    <Stack.Screen name='index' options={{
        title:"Home",
    }}/>
    <Stack.Screen name='register/index'  options={{
        title:"Register",
        headerRight:()=>{
          return (
            <Button title='Login' onPress={()=>{router.push("/login")}} />
          );
          
        }
    }}/>
    <Stack.Screen name='login'  options={{
        title:"Login",
    }}/>
    <Stack.Screen name='(tabs)'  options={{
        headerShown:false,
    }}/>
    <Stack.Screen name='[missing]'  options={{
        title:"404",
    }}/>
   </Stack>
  )
}

export default RootLayout