import { View, Text } from 'react-native'
import React from 'react'
import Routes from './Routes/Routes'
import Home from './ecrans/Home/Home'
import Newdownload from './ecrans/Formulaire/Newdownload'
import { COLOR } from './Outils/Constantes'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor :COLOR.white}}>
      <Routes/>
    </View>
  )
}

export default App