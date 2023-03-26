import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AuthNavigator from './app/navigation/AuthNavigator';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, background: 'transparent'},
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
      <LinearGradient
        colors={[
          'rgba(194,194,194,1)',
          'rgba(214,219,184,1)',
          'rgba(199,226,225,1)',
          'rgba(0,212,255,1)',
        ]}
        locations={[0, 0.35, 1, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <StatusBar backgroundColor="yellow" />
        <NavigationContainer theme={theme}>
          <AuthNavigator />
        </NavigationContainer>
      </LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  content: {
    // styles for your content
  },
});
export default App;
