/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar, Card, DataTable, Divider, Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from '../../i18n';

interface IProps {}

const ShowPricesScreen: FC<PropsWithChildren<IProps>> = () => {
  const navigation = useNavigation();
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
          title={strings.pricesLabel}
          titleStyle={styled.appBarTitle}
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styled.body}>
          <Card style={{marginTop: 30}}>
            <DataTable>
              <Divider />
              <Title
                style={{
                  textAlign: 'center',
                  marginVertical: windowHeight / 60,
                }}>
                {strings.homeTypeMeter + ' ' + strings.chooseTypes}
              </Title>
              <Divider />
              <DataTable.Header>
                <DataTable.Title>{strings.tableTitle1}</DataTable.Title>
                <DataTable.Title numeric>
                  {strings.tableTitle2} (ကျပ်)
                </DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>၁ မှ ၃၀</DataTable.Cell>
                <DataTable.Cell numeric>၃၅</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၃၁ မှ ၅၀</DataTable.Cell>
                <DataTable.Cell numeric>၅၀</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၅၁ မှ ၇၅</DataTable.Cell>
                <DataTable.Cell numeric>၇၀</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၇၆ မှ ၁၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၉၀</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၁၀၁ မှ ၁၅၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၁၀</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၁၅၁ မှ ၂၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၂၀</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၂၀၁ နှင့်အထက်</DataTable.Cell>
                <DataTable.Cell numeric>၁၂၅</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card>

          <Card style={{marginVertical: 35}}>
            <DataTable>
              <Divider />
              <Title
                style={{
                  textAlign: 'center',
                  marginVertical: windowHeight / 60,
                }}>
                {strings.factoryTypeMeter + ' ' + strings.chooseTypes}
              </Title>
              <Divider />
              <DataTable.Header>
                <DataTable.Title>{strings.tableTitle1}</DataTable.Title>
                <DataTable.Title numeric>
                  {strings.tableTitle2} (ကျပ်)
                </DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>၁ မှ ၅၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၂၅</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၅၀၁ မှ ၅၀၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၃၅</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၅၀၀၁ မှ ၁၀၀၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၄၅</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၁၀၀၀၁ မှ ၂၀၀၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၅၅</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၂၀၀၀၁ မှ ၅၀၀၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၆၇</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၅၀၀၀၁ မှ ၁၀၀၀၀၀</DataTable.Cell>
                <DataTable.Cell numeric>၁၇၅</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>၁၀၀၀၀၁ နှင့်အထက်</DataTable.Cell>
                <DataTable.Cell numeric>၁၂၁၈၀၅</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowPricesScreen;

const windowHeight = Dimensions.get('screen').height;

export const styled = StyleSheet.create({
  container: {flex: 1},
  appBar: {
    backgroundColor: '#ffb142',
  },
  appBarTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'myanmar',
  },
  body: {
    display: 'flex',
  },
});
