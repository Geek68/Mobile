import axios from "axios"
import { useEffect, useState } from "react"

 export const GetFichicerTéléchargé = () =>
 {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://10.0.2.2:8000/api/listdownload')
        .then(res => setData(res.data))
    },[])
    return data
 }
 export const DeleteFichicerTélécharge = (id)=>{
    axios.delete(`http://10.0.2.2:8000/api/deletedownload/${id}`)
    .then(res=>{console.log(res.data.message)})
    .catch(error=>{console.log(error)})
 }

 export const ModificationStatuEnTaille= (nom,taille)=>{
   axios.put(`http://10.0.2.2:8000/api/taille/${nom}`,{taille: taille})
   .then(res=>{console.log(res.data.message)})
   .catch(error=>{console.log(error)})
 }