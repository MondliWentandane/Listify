import { Tabs } from 'expo-router'
import React from 'react'
import { Image } from 'react-native'

const DashboardLayout: React.FC = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='homePage' options={{tabBarShowLabel:false, tabBarIcon:({focused})=>(
            <Image source={focused 
                ? require('@/assets/Icons/homeBlueIcon.png')
                : require('@/assets/Icons/homeBlackIcon.png')
            }/>
        )}}/>
        <Tabs.Screen name='addPage' options={{tabBarShowLabel:false}}/>
        <Tabs.Screen name='listPage' options={{tabBarShowLabel:false}}/>
    </Tabs>
  )
}

export default DashboardLayout
