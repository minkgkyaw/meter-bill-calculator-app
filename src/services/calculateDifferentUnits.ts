import {homeUnitCalculation} from './calculateHomeUnits';
import {factoryUnitCalculation} from './calculateFactoryUnits';

export const finAndCalculateDifferentUsedUnit = (
  type: 'Home' | 'Factory',
  prevUnit: number,
  curUnit: number,
) => {
  const units = Math.abs(curUnit - prevUnit);

  return type === 'Home'
    ? homeUnitCalculation(units)
    : factoryUnitCalculation(units);
};
