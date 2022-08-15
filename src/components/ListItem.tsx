import React, {FC, PropsWithChildren} from 'react';
import {Card, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

interface IListItemProps {
  item: {id: string; title: string};
  style: {};
}

const ListItem: FC<PropsWithChildren<IListItemProps>> = ({item, style}) => {
  return (
    <TouchableOpacity>
      <Card style={style}>
        <Card.Actions>
          <Title>{item.title}</Title>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
};

export default ListItem;
