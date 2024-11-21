import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateProfile from './src/screens/CreateProfile'

const App = () => {
  return (
    <View style={styles.container}>
     <CreateProfile/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  }
})