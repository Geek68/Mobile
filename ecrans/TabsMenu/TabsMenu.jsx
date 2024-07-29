
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home/Home';
import Newdownload from '../Formulaire/Newdownload';
import ExitPage from '../Exit/ExitPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR } from '../../Outils/Constantes';

const Tab = createBottomTabNavigator();

const TabsMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: COLOR.sombre,  // Couleur de surbrillance des onglets actifs
        tabBarInactiveTintColor: COLOR.grey, // Couleur de surbrillance des onglets inactifs
        tabBarStyle: {
            backgroundColor: COLOR.white,  // Couleur d'arrière-plan de la barre d'onglets
            borderTopEndRadius:25,
            borderTopStartRadius:25
        },
        tabBarLabelStyle: {
            fontSize: 12,                 // Taille de la police pour les libellés des onglets
            fontWeight: 'bold',           // Gras pour les libellés des onglets
        },
        headerShown:false
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
        name="newdownload"
        component={Newdownload}
        options={{
          tabBarLabel: 'Ajout URL',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="download" color={color} size={size} />
          ),
        //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="exitpage"
        component={ExitPage}
        options={{
          tabBarLabel: 'Quitter',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabsMenu