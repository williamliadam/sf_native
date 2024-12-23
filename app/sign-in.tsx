import { router } from 'expo-router';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useSession } from './ctx';
import { ThemedText } from '@/components/ThemedText';
import LoginForm from '@/features/auth/loginForm';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={styles.container}>     
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
