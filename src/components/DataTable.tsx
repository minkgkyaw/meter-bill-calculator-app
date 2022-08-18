/* eslint-disable react-native/no-inline-styles */
import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Card, DataTable, Divider, Title} from 'react-native-paper';
import {strings} from '../i18n';
import {convertToMyanmar} from '../services/converter';
import {factoryUnitsWorker} from '../services/factoryUnitWorker';
import {homeUnitsWorker} from '../services/homeUnitWorker';
import DynamicDataRow from './DynamicDataRow';
import StaticDataRow from './StaticDataRow';
import TotalDataRole from './TotalDataRow';

const windowWidth = Dimensions.get('screen').width;
// const windowHeight = Dimensions.get('screen').height;

interface IProps {
  totalUnits: number;
  totalPrices: number;
  maintenance: boolean;
  type: 'Home' | 'Factory';
}

const MaintenanceRow = () => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{strings.detailScreenMaintenanceLabel}</DataTable.Cell>
      <DataTable.Cell numeric>{convertToMyanmar(String(500))}</DataTable.Cell>
    </DataTable.Row>
  );
};

const DataTableComponent: FC<PropsWithChildren<IProps>> = ({
  totalUnits,
  totalPrices,
  maintenance,
  type,
}: IProps) => {
  const [layer, setLayer] = useState<string>('၀');
  const [minUnits, setMinUnits] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (type === 'Home') {
      return homeUnitsWorker(totalUnits, setLayer, setAmount, setMinUnits);
    } else {
      return factoryUnitsWorker(totalUnits, setLayer, setAmount, setMinUnits);
    }
  }, [totalUnits, type]);
  return (
    <View style={styled.container}>
      <Card style={styled.card}>
        <DataTable>
          <Title style={{textAlign: 'center', paddingVertical: 5}}>
            နှုံးထားအလိုက် ဇယား
          </Title>
          <Divider />
          <DataTable.Header style={{height: 70, flex: 4}}>
            <DataTable.Title
              textStyle={{fontWeight: 'bold'}}
              style={{flex: 1.8}}>
              {strings.tableTitle1}
            </DataTable.Title>
            <DataTable.Title
              style={{flex: 1}}
              textStyle={{fontWeight: 'bold', textAlign: 'center'}}
              numberOfLines={2}>
              {strings.tableTitle2}
            </DataTable.Title>
            <DataTable.Title
              style={{flex: 1.2}}
              textStyle={{fontWeight: 'bold'}}
              numeric
              numberOfLines={2}>
              {strings.tableTitle4} (ကျပ်)
            </DataTable.Title>
          </DataTable.Header>
          {type === 'Home' &&
            totalUnits > 30 &&
            StaticDataRow(totalUnits, type)}

          {type === 'Factory' &&
            totalUnits > 500 &&
            StaticDataRow(totalUnits, type)}

          {type === 'Home' && totalUnits !== 200 && (
            <DynamicDataRow
              layer={layer}
              units={totalUnits}
              minUnits={minUnits}
              amount={amount}
            />
          )}

          {type === 'Factory' && totalUnits !== 20000 && (
            <DynamicDataRow
              layer={layer}
              units={totalUnits}
              minUnits={minUnits}
              amount={amount}
            />
          )}

          {maintenance && <MaintenanceRow />}
          <TotalDataRole totalPrices={totalPrices} />
        </DataTable>
      </Card>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  card: {width: windowWidth / 1.05, marginVertical: 30},
});

export default DataTableComponent;
