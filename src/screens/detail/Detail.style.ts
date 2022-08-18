import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
// const windowHeight = Dimensions.get('screen').height;

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listDataItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeader: {fontWeight: 'bold'},
  card: {width: windowWidth / 1.05, marginTop: 30},
});
