import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';

interface IProps {}

const ShowPricesScreen: FC<PropsWithChildren<IProps>> = () => {
  return (
    <View>
      <Caption>Prices of Units</Caption>
    </View>
  );
};

export default ShowPricesScreen;
