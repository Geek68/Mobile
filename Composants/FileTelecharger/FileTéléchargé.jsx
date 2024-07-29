import { View, Text,Button, Pressable } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FileTelechargeStyle from './StyleFileTelecharge';
import { COLOR } from '../../Outils/Constantes';
import { DeleteFile,OpenFile} from './FonctionOpen';

const FileTelecherge= ({item}) => {
  const Type = ()=>{
    switch(item.type){
      case 'document':
        return <MaterialCommunityIcons name="file" 
                style={FileTelechargeStyle.fileIcone}/>
      case 'audio':
        return <MaterialCommunityIcons name="music" 
                  style={FileTelechargeStyle.fileIcone}/>
      case 'video':
        return <MaterialCommunityIcons name="video" 
                  style={FileTelechargeStyle.fileIcone}/>
      case 'image':
        return <MaterialCommunityIcons name="file-image" 
                  style={FileTelechargeStyle.fileIcone}/>
      case 'logiciel':
        return <MaterialCommunityIcons name="android" 
                  style={FileTelechargeStyle.fileIcone}/>
      case 'archive':
          return <MaterialCommunityIcons name="archive" 
                  style={FileTelechargeStyle.fileIcone}/>
      default:
        return null
    }
  }
  return (
    <View style={FileTelechargeStyle.fileConteneur}>
      <>
      {
        Type()
      }
      </>
      <View style={{flexDirection:"column",gap:10}}>
        <View>
            <Text style={FileTelechargeStyle.fileTitle}>Name : {item.nom}</Text>
            <Text>Type :{item.type}</Text>
        </View>
        <Pressable style={FileTelechargeStyle.BtnOpen} onPress={()=>{OpenFile(item.emplacement,item.nom,item.mimetype)}}> 
          <Text style={{color:COLOR.sombre,fontSize:15}}>Ouvrir</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FileTelecherge