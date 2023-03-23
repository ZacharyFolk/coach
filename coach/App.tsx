/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Image
          source={require('./app/assets/squatch7.png')}
          style={styles.logo}
        />
        <TextInput style={styles.inputs} placeholder="example@email.com" />
        <TextInput style={styles.inputs} placeholder="********" />

        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnTitle}>Log in</Text>
        </Pressable>
        <View style={styles.linkContainer}>
          <Pressable>
            <Text style={styles.linkText}>Sign Up</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.linkText}>Forgot password</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logo: {
    width: 200,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: height * 0.1,
  },

  inputs: {
    width: width - 40,
    height: 50,
    backgroundColor: '#e0e0e0',
    fontSize: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: '#8469cf',
    marginBottom: 20,
  },
  btnContainer: {
    width: width - 40,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 20,
    color: '#fff',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: 'green',
  },
});

export default App;

// <SafeAreaView style={backgroundStyle}>
// <StatusBar
//   barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//   backgroundColor={backgroundStyle.backgroundColor}
// />
// <ScrollView
//   contentInsetAdjustmentBehavior="automatic"
//   style={backgroundStyle}>
//   <Header />
//   <View
//     style={{
//       backgroundColor: isDarkMode ? Colors.black : Colors.white,
//     }}>
//     <Section title="Register">
//       <TextInput style={styles.inputs} />
//     </Section>
//     {/* <Section title="Step One">
//       Edit <Text style={styles.highlight}>App.tsx</Text> to rock it.
//     </Section> */}
//     <Section title="See Your Changes">
//       <ReloadInstructions />
//     </Section>
//     <Section title="Debug">
//       <DebugInstructions />
//     </Section>
//     <Section title="Learn More">
//       Read the docs to discover what to do next:
//     </Section>
//     <LearnMoreLinks />
//   </View>
// </ScrollView>
// </SafeAreaView>
