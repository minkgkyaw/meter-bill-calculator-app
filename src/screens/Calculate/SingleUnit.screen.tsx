/* eslint-disable react-native/no-inline-styles */
import React, {FC, PropsWithChildren, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Keyboard, SafeAreaView, View} from 'react-native';
import {
  Appbar,
  Card,
  TextInput,
  Button,
  RadioButton,
  Checkbox,
  Caption,
} from 'react-native-paper';
import {Formik} from 'formik';
import {styled} from './SingleUnit.styles';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../../i18n';
import {singleUnitInput} from './schema';
import {HomeScreenNavigationType} from '../../types/navigator.types';

type FormInputProps = {
  units: string;
  type: 'Home' | 'Factory';
};
const initialValues: FormInputProps = {
  units: '',
  type: 'Home',
};

const CalculateSingleUnitScreen: FC<PropsWithChildren<{}>> = () => {
  const navigator = useNavigation<HomeScreenNavigationType>();
  const [maintenance, setMaintenance] = useState<boolean>(true);

  const onSubmit = (value: FormInputProps) => {
    Keyboard.dismiss();
    return navigator.navigate('detail', {
      units: +value.units,
      type: value.type,
      maintenance,
    });
  };
  return (
    <SafeAreaView style={styled.container}>
      <Appbar.Header style={styled.appBar}>
        <Appbar.BackAction
          color={'white'}
          onPress={() => {
            navigator.goBack();
          }}
        />
        <Appbar.Content
          title={strings.singUnitScreenTitle}
          titleStyle={styled.appBarTitle}
        />
      </Appbar.Header>
      <View style={styled.body}>
        <Formik
          validationSchema={singleUnitInput}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            isValid,
            dirty,
          }) => {
            return (
              <Card style={styled.card}>
                <Card.Content style={styled.cardContent}>
                  <TextInput
                    right={
                      <TextInput.Icon
                        name="backspace"
                        color="#4B4B4B"
                        onPress={() => setFieldValue('units', '')}
                      />
                    }
                    mode={'outlined'}
                    onChangeText={handleChange('units')}
                    defaultValue={values.units}
                    keyboardType={'number-pad'}
                    label={strings.inputLabel}
                    value={values.units}
                    onBlur={handleBlur('unit')}
                    outlineColor={'black'}
                    activeOutlineColor={'#ffda79'}
                  />
                </Card.Content>
                <Card.Content style={styled.cardContent}>
                  <RadioButton.Group
                    onValueChange={handleChange('type')}
                    value={values.type}>
                    <View style={styled.meterTypeGroup}>
                      <View style={styled.meterBtnGroup}>
                        <RadioButton.Item
                          labelStyle={{overflow: 'hidden'}}
                          label={strings.homeTypeMeter}
                          value="Home"
                          color={'#ffda79'}
                        />

                        <RadioButton.Item
                          labelStyle={{overflow: 'hidden'}}
                          label={strings.factoryTypeMeter}
                          value="Factory"
                          color={'#ffda79'}
                        />
                      </View>
                      <LinearGradient
                        style={styled.gradient}
                        colors={['#ffffff', '#F6F6F6']}>
                        <Caption style={styled.caption}>
                          {strings.chooseTypes}
                        </Caption>
                      </LinearGradient>
                    </View>
                  </RadioButton.Group>
                </Card.Content>
                <Card.Content style={styled.cardContent}>
                  <Checkbox.Item
                    label={strings.maintenance}
                    color={'#ffda79'}
                    status={maintenance ? 'checked' : 'unchecked'}
                    onPress={() => setMaintenance(!maintenance)}
                  />
                </Card.Content>
                <Card.Content style={styled.cardContent}>
                  <Button
                    disabled={!dirty || !isValid}
                    mode={'contained'}
                    color={'#ffda79'}
                    onPress={handleSubmit}
                    compact={true}>
                    {strings.submitBtn}
                  </Button>
                </Card.Content>
              </Card>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default CalculateSingleUnitScreen;
