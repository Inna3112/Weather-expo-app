import { StyleSheet, View } from 'react-native';
import { Link, Stack } from 'expo-router';

import Switch from '@/components/AppText/AppText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Switch>This screen not exist.</Switch>
        <Link href="/" style={styles.link}>
          <Switch>Go to home screen!</Switch>
        </Link>
      </View>
    </>
  );
}
