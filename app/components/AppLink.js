import {Pressable, Text} from 'react-native';

const AppLink = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default AppLink;
