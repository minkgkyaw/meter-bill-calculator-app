/* eslint-disable react-native/no-inline-styles */
import React, {FC, PropsWithChildren} from 'react';
import {DataTable} from 'react-native-paper';
import {convertToMyanmar} from '../services/converter';

interface IProps {
  layer: string;
  units: number;
  amount: number;
  minUnits: number;
}

const DynamicDataRow: FC<PropsWithChildren<IProps>> = ({
  layer,
  units,
  amount,
  minUnits,
}: IProps) => {
  const totalUnit = units - minUnits;
  const totalPrices = totalUnit * amount;
  return (
    <DataTable.Row style={{flex: 4}}>
      <DataTable.Cell style={{flex: 1.9}}>{layer}</DataTable.Cell>
      <DataTable.Cell style={{flex: 0.9}} textStyle={{textAlign: 'center'}}>
        {convertToMyanmar(String(amount))}
      </DataTable.Cell>
      <DataTable.Cell style={{flex: 1.2}} numeric>
        {convertToMyanmar(String(totalPrices))}
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default DynamicDataRow;
