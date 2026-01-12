import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{title:"Home", headerShown: true, headerTintColor:"#1c5cb6"}}/>
      </Stack>
  );
}
