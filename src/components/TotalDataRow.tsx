/* eslint-disable react-native/no-inline-styles */
import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import {convertToMyanmar} from '../services/converter';
import {strings} from '../i18n';

interface IProps {
  totalPrices: number;
}

const TotalDataRole: FC<PropsWithChildren<IProps>> = ({
  totalPrices,
}: IProps) => {
  return (
    <DataTable.Row>
      <DataTable.Cell style={{flex: 2.5}} textStyle={styled.title}>
        {strings.total}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1.5}} numeric textStyle={styled.title}>
        {convertToMyanmar(String(totalPrices))}
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styled = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 16},
});

export default TotalDataRole;
