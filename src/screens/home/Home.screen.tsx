import React, {FC, PropsWithChildren} from 'react';
import {View, SafeAreaView, StatusBar, FlatList, Image} from 'react-native';
import {Appbar} from 'react-native-paper';

import {strings} from '../../i18n';
import {styles} from './Home.style';
import ListItem from '../../components/ListItem';

const DATA = [
  {
    id: '1',
    title: strings.title1,
  },
  {
    id: '2',
    title: strings.title2,
  },
  {
    id: '3',
    title: strings.title3,
  },
  {
    id: '4',
    title: strings.title4,
  },
];

const Item = ({item}: any) => {
  return <ListItem item={item} style={styles.item} />;
};

const HomeScreen: FC<PropsWithChildren<{}>> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'#ffda79'}
        networkActivityIndicatorVisible={true}
      />
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content
          title={strings.homeHeader}
          titleStyle={styles.appBarTitle}
        />
      </Appbar.Header>
      <View style={styles.body}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/images/playstore.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.innerContainer}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-evenly',
            }}
            data={DATA}
            renderItem={Item}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
