import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    zIndex: -1,
    backgroundColor: '#E7E7E7',
  },
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
    width: windowWidth,
    alignItems: 'center',
    paddingVertical: windowHeight / 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: windowWidth / 1.2,
    borderRadius: 10,
    overflow: 'hidden',
    // height: windowHeight / 2.5,
  },
  cardContent: {
    marginVertical: 6,
  },
  meterTypeGroup: {
    marginVertical: 5,
    position: 'relative',
    zIndex: 2,
  },
  meterBtnGroup: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F6F6F6',
  },
  gradient: {
    position: 'absolute',
    overflow: 'hidden',
    top: -11,
    left: 11,
    paddingHorizontal: 2.5,
    paddingBottom: 2,
    zIndex: 1,
  },
  caption: {
    fontSize: 12.5,
  },
});
