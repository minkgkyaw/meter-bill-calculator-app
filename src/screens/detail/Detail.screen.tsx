import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Appbar, Card, Divider, Paragraph, Subheading} from 'react-native-paper';
import {DetailScreenProps} from '../../types/navigator.types';
import {homeUnitCalculation} from '../../services/calculateHomeUnits';
import {factoryUnitCalculation} from '../../services/calculateFactoryUnits';
import {convertToMyanmar} from '../../services/converter';
import {strings} from '../../i18n';
import {styled} from './Detail.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import DataTableComponent from '../../components/DataTable';

const ListDataItem = ({left, right}: {left: string; right: string}) => (
  <View style={styled.listDataItem}>
    <Paragraph>{left}</Paragraph>
    <Subheading style={styled.subHeader}>{right}</Subheading>
  </View>
);

const ShowDetailScreen: FC<PropsWithChildren<DetailScreenProps>> = ({
  route,
  navigation,
}) => {
  const {units, type, maintenance, options} = route.params;

  const [prices, setPrices] = useState<number>(0);
  const [totalPrices, setTotalPrices] = useState<number>(0);

  useEffect(() => {
    const calc = () => {
      const calculatedPrices =
        type === 'Home'
          ? homeUnitCalculation(units)
          : factoryUnitCalculation(units);

      setPrices(calculatedPrices);

      if (maintenance) {
        return setTotalPrices(prices + 500);
      } else {
        return setTotalPrices(prices);
      }
    };
    calc();
  }, [units, type, maintenance, prices]);
  return (
    <SafeAreaView style={styled.container}>
      <Appbar.Header style={styled.appBar}>
        <Appbar.BackAction
          color={'white'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title={strings.detailTitle}
          titleStyle={styled.appBarTitle}
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styled.body}>
          <Card style={styled.card}>
            <Card.Title
              title={strings.detailCardTitle}
              subtitle={
                type === 'Home'
                  ? 'အိမ်သုံးမီတာ အမျိုးအစား'
                  : 'လုပ်ငန်းသုံးမီတာ အမျိုးအစား'
              }
            />
            <Divider />
            <Card.Content>
              {options?.prevUnits && (
                <ListDataItem
                  left={strings.labelInput1}
                  right={`${convertToMyanmar(String(options.prevUnits))} ယူနစ်`}
                />
              )}
              {/* <Card.Content> */}
              {options?.currUnits && (
                <ListDataItem
                  left={strings.labelInput2}
                  right={`${convertToMyanmar(String(options.currUnits))} ယူနစ်`}
                />
              )}
              <ListDataItem
                left={strings.detailScreenUnitLabel}
                right={`${convertToMyanmar(String(units))} ယူနစ်`}
              />
              <ListDataItem
                left={strings.detailScreenPricesLabel}
                right={`${convertToMyanmar(String(prices))} ကျပ်`}
              />
              {maintenance && (
                <ListDataItem
                  left={strings.detailScreenMaintenanceLabel}
                  right={`${convertToMyanmar(String(500))} ကျပ်`}
                />
              )}
              <Divider style={{marginTop: 3}} />
              <ListDataItem
                left={strings.detailScreenTotalPricesLabel}
                right={`${convertToMyanmar(String(totalPrices))} ကျပ်`}
              />
            </Card.Content>
          </Card>

          {/* detail excel */}
          <DataTableComponent
            totalPrices={totalPrices}
            totalUnits={units}
            maintenance={maintenance}
            type={type}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowDetailScreen;
