/* eslint-disable react-native/no-inline-styles */
import React, {FC, PropsWithChildren} from 'react';
import {Dimensions, Linking, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Caption, Paragraph, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
interface IProps {}

const AboutUsScreen: FC<PropsWithChildren<IProps>> = () => {
  return (
    <View style={styled.container}>
      <Title>Myanmar Meter Bill Calculator</Title>
      <Paragraph style={styled.paragraph}>
        Hello friend, I am Min Kaung Kyaw. This application is one of my open
        source projects. You can checkout in github.
      </Paragraph>
      <TouchableOpacity
        style={styled.caption}
        onPress={() =>
          Linking.openURL(
            'https://github.com/minkgkyaw/meter-bill-calculator-app.git',
          )
        }>
        <Icon size={30} name="github" />
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('screen').width;

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    maxWidth: windowWidth / 1.2,
  },
  caption: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutUsScreen;
