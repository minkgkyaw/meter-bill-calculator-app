import React, {FC, PropsWithChildren} from 'react';
import {Card, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  HomeScreenNavigationType,
  RootStackScreenParamsList,
} from '../types/navigator.types';

interface IListItemProps {
  item: {id: string; title: string; screen: string};
  style: {};
}

const ListItem: FC<PropsWithChildren<IListItemProps>> = ({item, style}) => {
  const navigator = useNavigation<HomeScreenNavigationType>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigator.navigate(item.screen as keyof RootStackScreenParamsList)
      }>
      <Card style={style}>
        <Card.Actions>
          <Title>{item.title}</Title>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
};

export default ListItem;
