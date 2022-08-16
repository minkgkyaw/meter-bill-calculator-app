import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 4,
    backgroundColor: '#fefaf4',
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
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefaf4',
    overflow: 'hidden',
    zIndex: 1,
  },
  imgContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  img: {
    width: windowHeight / 4.6,
    height: windowHeight / 4.6,
    borderRadius: 100,
    alignSelf: 'center',
  },
  innerContainer: {
    backgroundColor: '#fefaf4',
    // backgroundColor: 'red',
    flex: 2,
    alignContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    flexWrap: 'wrap',
    overflow: 'hidden',
    width: `${windowWidth / 4.2}%`,
    height: 90,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
  item: {
    width: '100%',
    height: 'auto',
    zIndex: 3,
    backgroundColor: '#ffda79',
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    p: 3,
  },
});
