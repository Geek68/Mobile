import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TelechargementStyle from './StyleTelechargement';
import ProgressBar from 'react-native-progress/Bar'
import { COLOR } from '../../Outils/Constantes';
import moment from 'moment';
const Telechargement = ({name,type,taille}) => {
  const date = moment().format('DD-MM-YYYY');
  const Type = ()=>{
    switch(type){
      case 'document':
        return <MaterialCommunityIcons name="file" style={TelechargementStyle.Icone}/>
      case 'audio':
        return <MaterialCommunityIcons name="music" style={TelechargementStyle.Icone}/>
      case 'video':
        return <MaterialCommunityIcons name="video" style={TelechargementStyle.Icone}/>
      case 'image':
        return <MaterialCommunityIcons name="file-image" style={TelechargementStyle.Icone}/>
      case 'logiciel':
        return <MaterialCommunityIcons name="android" style={TelechargementStyle.Icone}/>
      case 'archive':
          return <MaterialCommunityIcons name="archive" style={TelechargementStyle.Icone}/>
      default:
        return null
    }
  }
  const convertBytes = (bytes) => {
    parseInt(bytes)
    const sizes = ['Octets', 'Ko', 'Mo', 'Go', 'To'];
    if (bytes === 0) return '0 Octets';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};
  return (
    <View id='TelechargementParent' style={TelechargementStyle.parent}>
      <View id='header' style={TelechargementStyle.header}>
        <Text>{date}</Text>
        <MaterialCommunityIcons name="segment" style={{fontSize:15}}/>
      </View>
      <View id='PropretieNama' style={{flexDirection:"row",gap:10,alignItems:"center"}}>
          {
            Type()
          }
          <View style={{width:'90%'}}>
            <Text  style={TelechargementStyle.name}>{name}</Text>
            <Text>{convertBytes(taille)}</Text>
            <Text>Temps restant</Text>
            <Text>Etat</Text>
          </View>   
      </View>
    </View>
  )
}

export default Telechargement