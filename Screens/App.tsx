import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import setColorScheme = Appearance.setColorScheme;

function App() {
  const theme = useAppSelector(selectCurrentTheme);

  useEffect(() => {
    setColorScheme?.(theme);
  }, [theme]);

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
