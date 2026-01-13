import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{title:"Welcome", headerShown: true, headerTintColor:"#1c5cb6"}}/>
        <Stack.Screen name="(dashboard)" options={{title:"Dashboard", headerShown: true, headerTintColor:"#1c5cb6",
         }}/>
      </Stack>
  );
}
