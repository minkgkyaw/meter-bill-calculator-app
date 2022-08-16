import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';

interface IProps {}

const AboutUsScreen: FC<PropsWithChildren<IProps>> = () => {
  return (
    <View>
      <Caption>About Us</Caption>
    </View>
  );
};

export default AboutUsScreen;
