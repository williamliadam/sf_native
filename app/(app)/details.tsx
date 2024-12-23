
import { useNavigation } from 'expo-router';
import {Button, StyleSheet, Text, View} from 'react-native';

const Style = StyleSheet.create({
  Page: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={Style.Page}>
      <Text>Details Screen</Text>
      <Text>itemId: hello</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
}

export default DetailsScreen;