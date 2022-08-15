import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';

const SingleUnitScreen: FC<PropsWithChildren<{}>> = () => {
  return (
    <View>
      <Caption>Hello world</Caption>
    </View>
  );
};

export default SingleUnitScreen;
