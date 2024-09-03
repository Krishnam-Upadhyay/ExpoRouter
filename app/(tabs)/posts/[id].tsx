import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const post = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
        <Stack.Screen options={{
            headerTitle:"PostDetails"+id,
        }} />
      <Text style={{fontSize:20}}>post {id}</Text>
    </View>
  )
}

export default post