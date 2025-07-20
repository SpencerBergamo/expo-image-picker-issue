import { Alert, Button, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  async function openImagePicker() {

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission denied', 'You need to grant permission to access the library.');
      throw new Error('You need to grant permission to access the library.');
    }

    // Make sure to select more than one video file to 
    // get the delayed response 

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ['images', 'videos'],
    });

    // either check the result wasn't canceled or if the result has assets
    if (!result.canceled) {
      console.log(result.assets.length);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Image Picker" onPress={openImagePicker} />
    </View>
  );
}