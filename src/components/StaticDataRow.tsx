/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DataTable} from 'react-native-paper';

const homeRowFor1To30 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၁ မှ ၃၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၃၅</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၁၀၅၀
    </DataTable.Cell>
  </DataTable.Row>
);

const homeRowFor31To50 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၃၁ မှ ၅၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၅၀</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၁၀၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const homeRowFor51To75 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၅၁ မှ ၇၅ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၇၀</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၁၇၅၀
    </DataTable.Cell>
  </DataTable.Row>
);

const homeRowFor76To100 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၇၆ မှ ၁၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၉၀</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၂၂၅၀
    </DataTable.Cell>
  </DataTable.Row>
);

const homeRowFor101To150 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၁၀၁ မှ ၁၅၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၁၀</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၅၅၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const homeRowFor151To200 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၁၅၁ မှ ၂၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၂၀</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၆၀၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const factoryRowFor1To500 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၁ မှ ၅၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၂၅</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၆၂၅၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const factoryRowFor501To5000 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၅၀၁ မှ ၅၀၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၃၅</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၅၀၇၅၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const factoryRowFor5001To10000 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၅၀၀၁ မှ ၁၀၀၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၄၅</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၇၂၅၀၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const factoryRowFor10001To20000 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၁၀၀၀၁ မှ ၂၀၀၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၅၅</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၁၅၅၀၀၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const factoryRowFor20001To50000 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၂၀၀၀၁ မှ ၅၀၀၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၆၇</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၅၀၁၀၀၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const factoryRowFor50001To100000 = (
  <DataTable.Row style={{flex: 4}}>
    <DataTable.Cell style={{flex: 1.9}}>၅၀၀၀၁ မှ ၁၀၀၀၀၀ </DataTable.Cell>
    <DataTable.Cell style={{flex: 0.9}}>၁၇၅</DataTable.Cell>
    <DataTable.Cell style={{flex: 1.2}} numeric>
      ၈၇၅၀၀၀၀
    </DataTable.Cell>
  </DataTable.Row>
);

const StaticDataRow = (unit: number, type: 'Home' | 'Factory') => {
  if (type === 'Home') {
    if (unit < 51) {
      return homeRowFor1To30;
    } else if (unit < 76) {
      return (
        <>
          {homeRowFor1To30}
          {homeRowFor31To50}
        </>
      );
    } else if (unit < 101) {
      return (
        <>
          {homeRowFor1To30}
          {homeRowFor31To50}
          {homeRowFor51To75}
        </>
      );
    } else if (unit < 151) {
      return (
        <>
          {homeRowFor1To30}
          {homeRowFor31To50}
          {homeRowFor51To75}
          {homeRowFor76To100}
        </>
      );
    } else if (unit < 200) {
      return (
        <>
          {homeRowFor1To30}
          {homeRowFor31To50}
          {homeRowFor51To75}
          {homeRowFor76To100}
          {homeRowFor101To150}
        </>
      );
    } else if (unit >= 200) {
      return (
        <>
          {homeRowFor1To30}
          {homeRowFor31To50}
          {homeRowFor51To75}
          {homeRowFor76To100}
          {homeRowFor101To150}
          {homeRowFor151To200}
        </>
      );
    }
  } else if (type === 'Factory') {
    if (unit < 5001) {
      return factoryRowFor1To500;
    } else if (unit < 10001) {
      return (
        <>
          {factoryRowFor1To500}
          {factoryRowFor501To5000}
        </>
      );
    } else if (unit < 20001) {
      return (
        <>
          {factoryRowFor1To500}
          {factoryRowFor501To5000}
          {factoryRowFor5001To10000}
        </>
      );
    } else if (unit < 50001) {
      return (
        <>
          {factoryRowFor1To500}
          {factoryRowFor501To5000}
          {factoryRowFor5001To10000}
          {factoryRowFor10001To20000}
        </>
      );
    } else if (unit < 100000) {
      return (
        <>
          {factoryRowFor1To500}
          {factoryRowFor501To5000}
          {factoryRowFor5001To10000}
          {factoryRowFor10001To20000}
          {factoryRowFor20001To50000}
        </>
      );
    } else if (unit >= 100000) {
      return (
        <>
          {factoryRowFor1To500}
          {factoryRowFor501To5000}
          {factoryRowFor5001To10000}
          {factoryRowFor10001To20000}
          {factoryRowFor20001To50000}
          {factoryRowFor50001To100000}
        </>
      );
    }
    return;
  }
};

export default StaticDataRow;
