import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';

import Colors from '@/constants/Colors';

function ButtonGoBack() {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
    >
      <View style={{ paddingHorizontal: 12 }}>
        <Ionicons name="chevron-back" size={24} color={Colors.light.bgWhite()} />
      </View>
    </Pressable>
  );
}

export default ButtonGoBack;
