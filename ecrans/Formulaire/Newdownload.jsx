import { View, Text, ImageBackground, TextInput, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormulaireStyle from './styleFormulaire'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR } from '../../Outils/Constantes';
import { Dropdown } from 'react-native-element-dropdown';
import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
import { ModificationStatuEnTaille } from '../../Data/FileTelechargeData';
import RNFS from 'react-native-fs';
const Newdownload = () =>{
  const image1 = require("../../Images/Image2.jpg");
  const [isFocus, setIsFocus]  = useState(false)
  const [url,setUrl] = useState('')
  const [nom,setNom] = useState('')
  const [type,setType] = useState('')
  const [emplacement,setEmplacement] = useState('')
  const [mimeType,setMimeType] = useState('')
  const options = [
    {label:"Image",value:"image"},
    {label:"Audio",value:"audio"},
    {label:"Video",value:"video"},
    {label:"Document",value:"document"},
    {label:"Logiciel",value:"logiciel"},
    {label:"Archive",value:"archive"},
  ]

  console.log(url,nom,type,emplacement,mimeType)

  const extractionMineType = (headers) =>{
        const contentTypeHeader = headers['content-type']
        if(contentTypeHeader)
        {
          const mineType = contentTypeHeader.split(';')[0].trim()
          return mineType
        }
  }

  const  FctTelechargeur = async (url,nom,emplacement,mimeType)=>{
    try{
        const res = await RNFetchBlob.config({ method: 'HEAD' }).fetch('HEAD', url);
        const fileSize = res.info().headers['content-length'];

        const { config, fs } = RNFetchBlob;
        const options = {
            fileCache :true,
            addAndroidDownloads:{
                useDownloadManager: true,
                notification: true,
                path: emplacement+'/'+nom,
                description: 'Téléchargement en cours...',
                mime: mimeType,
                
            }
        }
        const response = await config(options).fetch('GET',url)
        ModificationStatuEnTaille(nom,fileSize)
    }
    catch(error){
      console.error(error)
    }
    
  }
  
  const Envoie = async (e)=>{
    e.preventDefault()
    try {
      

      axios.post('http://10.0.2.2:8000/api/newdownload',{url:url,nom:nom,type:type,emplacement:emplacement,mimetype:mimeType})
      .then((res)=>{
        console.log(res.data.message)
      FctTelechargeur(url,nom,emplacement,mimeType)
        })
      .catch(err=>{console.log(err)})
      
    } 
    catch (error) {
      console.error(error)
    }
  }

  const ChoixEmplacement = async ()=>
  {
    setEmplacement('/storage/emulated/0/Download')
    const reponsMineType = await axios.head(url)
    const mime = extractionMineType(reponsMineType.headers)
    setMimeType(mime)
  }

  return (
<View>
   <View id='FormularHeader' style={FormulaireStyle.header}>
        <ImageBackground source={image1} resizeMode='cover' style={FormulaireStyle.ImageBahground}>
           <View style={{flexDirection:"row",alignItems:"center",gap:9}}>
              <MaterialCommunityIcons name="cloud-download-outline" style={{fontSize:30,color:COLOR.white,margin:15}}/>
           </View>
        </ImageBackground>
      </View>
      <View id='FormularBody' style={{padding:15,width:"100%",flexDirection:"column",gap:30}}>
        <View id='FormularText'>
            <Text style={{color:COLOR.sombre,fontSize:25,fontWeight:"bold"}}>Ajout d' URL</Text>
            <Text >Veuillez à remplir les champs avant de démarer</Text>
        </View>
      <View id="FormularComplet" style={{padding:15,width:"100%",flexDirection:"column",gap:50}}>
        <View id='FormularChamps' style={{flexDirection:"column",gap:20}}>
              <View style={{flexDirection:"column",gap:18}}>
                <Text style={FormulaireStyle.label}>URL: </Text>
                <TextInput style={FormulaireStyle.champsInputs} name="url" value={url} onChangeText={(e)=>{setUrl(e)}}/>
              </View>
              <View style={{flexDirection:"column",gap:10}}>
                <Text style={FormulaireStyle.label}>Nom: </Text>
                <TextInput style={FormulaireStyle.champsInputs} value={nom} onChangeText={(e)=>{setNom(e)}}/>
              </View>
              <View style={{flexDirection:"column",gap:10}}>
                <Text style={FormulaireStyle.label}>Categorie: </Text>
                <Dropdown
                    style={FormulaireStyle.champsInputs}
                    data={options}
                    placeholder={!isFocus ? 'Choisir la categorie' : '...'}
                    placeholderStyle={FormulaireStyle.styleTextDropdown}
                    selectedTextStyle={FormulaireStyle.styleTextDropdown}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    name='type'
                    value={type}
                    onChange={(e)=>{setType(e.value)}}
                />
              </View>
              <View style={{flexDirection:"column",gap:10}}>
                <Text style={FormulaireStyle.label}>Emplacement </Text>
               <Pressable style={FormulaireStyle.styleBoutton} onPress={ChoixEmplacement}>
                      {
                        emplacement==="" ? (<Text style={FormulaireStyle.label}>Choisir l'emplacement</Text>) : (<Text style={FormulaireStyle.label}>{emplacement}</Text>)
                      }
               </Pressable>
              </View>
          </View>
          <Button title='Demarer'    onPress={Envoie} style={{ backgroundColor: 'white', color: 'white', padding: 20 }}/>
      </View>
      </View>
</View>)
}
export default Newdownload