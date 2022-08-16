import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Appbar, Card, Divider, Paragraph, Subheading} from 'react-native-paper';
import {DetailScreenProps} from '../../types/navigator.types';
import {homeUnitCalculation} from '../../services/caclulateHomeUnits';
import {factoryUnitCalculation} from '../../services/calculateFactoryUnits';
import {convertToMyanmar} from '../../services/conveter';
import {strings} from '../../i18n';

const ShowDetailScreen: FC<PropsWithChildren<DetailScreenProps>> = ({
  route,
  navigation,
}) => {
  const {units, type, maintenance} = route.params;

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
    <View style={{flex: 1, alignItems: 'center'}}>
      <Appbar.Header>
        <Appbar.BackAction
          color={'white'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title={strings.singUnitScreenTitle}
          // titleStyle={styled.appBarTitle}
        />
      </Appbar.Header>
      <Card style={{width: 350, marginVertical: 30}}>
        <Card.Title
          title={'တွက်ချက်မှု စာရင်း'}
          subtitle={
            type === 'Home'
              ? 'အိမ်သုံးမီတာ အမျိုးအစား'
              : 'လုပ်ငန်းသုံးမီတာ အမျိုးအစား'
          }
        />
        <Divider />
        <Card.Content>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Paragraph>{strings.detailScreenUnitLabel}</Paragraph>
            <Subheading style={{fontWeight: 'bold'}}>{`${convertToMyanmar(
              String(units),
            )} ယူနစ်`}</Subheading>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Paragraph>{strings.detailScreenPricesLabel}</Paragraph>
            <Subheading style={{fontWeight: 'bold'}}>{`${convertToMyanmar(
              String(prices),
            )} ကျပ်`}</Subheading>
          </View>

          {maintenance && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Paragraph>{strings.detailScreenMaintenanceLabel}</Paragraph>
              <Subheading style={{fontWeight: 'bold'}}>{`${convertToMyanmar(
                String(500),
              )} ကျပ်`}</Subheading>
            </View>
          )}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Paragraph>{strings.detailScreenTotalPricesLabel}</Paragraph>
            <Subheading style={{fontWeight: 'bold'}}>{`${convertToMyanmar(
              String(totalPrices),
            )} ကျပ်`}</Subheading>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ShowDetailScreen;
