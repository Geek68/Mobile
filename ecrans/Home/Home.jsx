import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStyle from './styleHome';
import { COLOR } from '../../Outils/Constantes';
import Telechargement from '../../Composants/Telechargement/Telechargement';
import FileTelechargeStyle from '../../Composants/FileTelecharger/StyleFileTelecharge';
import { GetFichicerTelecharge } from '../../Data/FileTelechargeData';
const Home = () => {
  const dataTelechargee = GetFichicerTelecharge()
  return (
    <View  id='HomeParent' style={{backgroundColor:COLOR.white,flex:1,flexDirection:"column",gap:20}}>
         <View id="header" style={HomeStyle.header}>
          <View id='logo' style={HomeStyle.logo}>
              <MaterialCommunityIcons name="cloud-download-outline" style={{fontSize:35,color:COLOR.sombre}}/>
              <Text style={HomeStyle.Title}>LE TELECHARGEUR</Text>
          </View>
          <Text style={HomeStyle.Title}>HOME</Text>
        </View>
        <View id="HomeBody" style={{flexDirection:"column",gap:15,paddingHorizontal:10}}>
            <View id='BjrConteneur' style={HomeStyle.BjrConteneur}>
              <View style={{flexDirection:'column',gap:10}}> 
                  <Text style={{fontSize:25,color:COLOR.sombre,fontWeight:"500"}}>Bien le bonjour !!</Text>
                  <Text>Ravie de vous revoir</Text>
              </View>
              <Image source={require('../../Images/Image1.jpg')} style={HomeStyle.Image}/>
          </View>
          <View id='Telechargement' style={{flexDirection:"column",gap:10}}>
            <Text style={HomeStyle.Title}>Vos téléchargements</Text>
            <FlatList 
            data={dataTelechargee}
            showsVerticalScrollIndicator={false}
            keyExtractor={item=>{item.id}}
            numColumns={2}
            style={HomeStyle.flatList}
            renderItem={({item})=>
              <Telechargement item={item}/>
            }/>
      </View>
        </View>
    </View>
  )
}

export default Home