
import { PermissionsAndroid,requestMultiple } from 'react-native';
import notifee from "@notifee/react-native";
export  const Permission= async () => { 
  const permissions = [
    PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES, 
    PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
    PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
    ]

  try{
      const granted = await PermissionsAndroid.requestMultiple(permissions)
    
      const allPermissionsGranted = Object.values(granted).every(
        result => result === PermissionsAndroid.RESULTS.GRANTED
      );

      if (allPermissionsGranted) {
        console.log('Tout les Permissions accordées');
      } else {
        console.log('Permission refusée');
        
      }
  }
  catch(err)
  {
    console.error(err);
  }
  };

  export const Notification = async (nom)=>
    {
      const notificationId= 'ID_telechargement'
      try {
            // Request permissions (required for iOS)
          await notifee.requestPermission();
  
          // Create a channel (required for Android)
          const channelId = await notifee.createChannel({
            id: "default",
            name: "Default Channel",
          });
  
          // Display a notification
          await notifee.displayNotification({
            id :notificationId,
            title: nom,
            body: "Téléchargement en cours... (0%)",
            android: {
              channelId,
              smallIcon:'icon',
              progress:{
                max:100,
                current:0
              },
              pressAction: {
                id: "default",
              },
            },
          });
          return notificationId
            
      } catch (error) {
        console.log(error);
        return null
      }
    }

  export const updateNotification = async (progress,nom,id) => {
      try {
        await notifee.displayNotification({
          id: id,
          title: nom,
          body: `Téléchargement en cours... (${progress}%)`,
          android: {
            channelId: 'default',
            smallIcon: 'icon',
            progress: {
              max: 100,
              current: progress,
            },
            pressAction: {
              id: "default",
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
  

