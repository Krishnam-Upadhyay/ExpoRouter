import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const one = () => {
    const router = useRouter();
  return (
    <>
    <View>
      <Text style={{fontSize:20}}>one</Text>
    </View>
    <View>
      <Button title='Go Back' onPress={()=>router.back()}  />
    </View>
    
    </>
  )
}

export default one