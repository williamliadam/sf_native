import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useSession } from './ctx';
import { ThemedText } from '@/components/ThemedText';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        Sign In
      </ThemedText>
    </View>
  );
}
