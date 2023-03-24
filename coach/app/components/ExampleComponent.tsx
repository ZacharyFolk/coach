import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
  title: string;
  content: string;
}
const ExampleComponent: React.FC<Props> = ({title, content}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});
export default ExampleComponent;
