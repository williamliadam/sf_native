
import { useNavigation } from 'expo-router';
import {Button, StatusBar, Text, View} from 'react-native';

function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text>Settings!</Text>
      
    </View>
  );
}
export default SettingsScreen;