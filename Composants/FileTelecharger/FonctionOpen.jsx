import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import { Permission } from '../../ecrans/Formulaire/FctTelechargeur';
import { DeleteFichicerTélécharge } from '../../Data/FileTelechargeData';
 export const DeleteFile = async (emplacement,nom,mimetype,id)=>
{
    await Permission()
    const typeTab= mimetype.split('/');
    const pathFichier = `${emplacement}/${nom}`
    const fileExists = await RNFS.exists(pathFichier);
    alert(fileExists)
    if (fileExists) {
        try {
            await RNFS.unlink(pathFichier);
            DeleteFichicerTélécharge(id);
        } catch (error) {
            console.error("Erreur lors de la suppression du fichier :", error);
        }
    } else {
        console.error("Le fichier n'existe pas :", pathFichier);
    }
};

export const OpenFile = async (emplacement,nom,mimetype)=>
    {
        await Permission()
        const typeTab= mimetype.split('/');
        const pathFichier = `${emplacement}/${nom}.${typeTab[1]}`
        const fileExists = await RNFS.exists(pathFichier)
        if (fileExists) {
            try {
                await FileViewer.open(pathFichier,{showOpenWithDialog:true,mimetype:mimetype});
                console.log("fichier opening")
            } catch (error) {
                console.error("Voilà :", error);
            }
        } else {
            console.error("Le fichier n'existe pas :", pathFichier);
        }
    };


