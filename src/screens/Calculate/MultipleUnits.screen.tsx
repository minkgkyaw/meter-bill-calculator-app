/* eslint-disable react-native/no-inline-styles */
import React, {FC, PropsWithChildren, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Keyboard,
  SafeAreaView,
  TextInput as TextInputType,
  View,
} from 'react-native';
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
import {multipleUnitsInput} from './schema';
import {HomeScreenNavigationType} from '../../types/navigator.types';

type FormInputProps = {
  prevUnits: string;
  currUnits: string;
  type: 'Home' | 'Factory';
};
const initialValues: FormInputProps = {
  prevUnits: '',
  currUnits: '',
  type: 'Home',
};

const CalculateMultipleUnitScreen: FC<PropsWithChildren<{}>> = () => {
  const navigator = useNavigation<HomeScreenNavigationType>();
  const [maintenance, setMaintenance] = useState<boolean>(true);

  const onSubmit = (value: FormInputProps) => {
    const units = Math.abs(Number(value.currUnits) - Number(value.prevUnits));
    Keyboard.dismiss();
    return navigator.navigate('detail', {
      units: units,
      type: value.type,
      maintenance,
      options: {
        prevUnits: +value.prevUnits,
        currUnits: +value.currUnits,
      },
    });
  };

  const currUnitRef = useRef<TextInputType>(null);

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
          validationSchema={multipleUnitsInput}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          {({
            handleBlur,
            handleChange,
            setFieldValue,
            handleSubmit,
            isValid,
            dirty,
            values,
          }) => {
            return (
              <Card style={styled.card}>
                <Card.Content style={styled.cardContent}>
                  <TextInput
                    // autoFocus
                    returnKeyType="next"
                    mode={'outlined'}
                    onChangeText={handleChange('prevUnits')}
                    right={
                      <TextInput.Icon
                        name="backspace"
                        color="#4B4B4B"
                        onPress={() => setFieldValue('prevUnits', '')}
                      />
                    }
                    defaultValue={values.prevUnits}
                    keyboardType={'number-pad'}
                    label={strings.labelInput1}
                    value={values.prevUnits}
                    onBlur={handleBlur('prevUnits')}
                    outlineColor={'black'}
                    activeOutlineColor={'#ffda79'}
                    onSubmitEditing={() => currUnitRef.current?.focus()}
                  />
                </Card.Content>
                <Card.Content style={styled.cardContent}>
                  <TextInput
                    // autoFocus
                    mode={'outlined'}
                    onChangeText={handleChange('currUnits')}
                    ref={currUnitRef}
                    right={
                      <TextInput.Icon
                        name="backspace"
                        color="#4B4B4B"
                        onPress={() => setFieldValue('currUnits', '')}
                      />
                    }
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                    defaultValue={values.currUnits}
                    keyboardType={'number-pad'}
                    label={strings.inputLabel}
                    value={values.currUnits}
                    onBlur={handleBlur('currUnits')}
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

export default CalculateMultipleUnitScreen;
