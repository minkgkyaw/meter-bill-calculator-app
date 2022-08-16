import React, {FC, PropsWithChildren, useEffect} from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Image,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import {Appbar} from 'react-native-paper';

import {strings} from '../../i18n';
import {DATA} from './data';
import {styles} from './Home.style';
import ListItem from '../../components/ListItem';

const Item = ({item}: any) => {
  return <ListItem item={item} style={styles.item} />;
};

const HomeScreen: FC<PropsWithChildren<{}>> = () => {
  useEffect(() => {
    return () => BackHandler.exitApp();
  }, []);

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
            source={require('../../assets/images/playstore.jpeg')}
            style={styles.img}
          />
        </View>
        <View style={styles.innerContainer}>
          <FlatList
            contentContainerStyle={styles.flatListContainer}
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
