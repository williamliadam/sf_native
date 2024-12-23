import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {  router, useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { useSession } from '@/app/ctx';

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type FormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {signIn} = useSession();

  const onSubmit = handleSubmit((data) => {
    signIn();
    router.replace('/');
  });

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Login</ThemedText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <ThemedText style={styles.errorText}>{errors.email.message}</ThemedText>}

      <Controller
        
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <Button title="Login" onPress={onSubmit} color="#6200EE" />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#6200EE',
  },
  input: {
    height: 40,
    width:300,
    borderColor: '#6200EE',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
});
