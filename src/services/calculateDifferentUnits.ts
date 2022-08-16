import {homeUnitCalculation} from './caclulateHomeUnits';
import {factoryUnitCalculation} from './calculateFactoryUnits';

export const finAndCalculateDifferentUsedUnit = (
  type: 'Home' | 'Factory',
  prevUnit: number,
  curUnit: number,
) => {
  const units = Math.abs(curUnit - prevUnit);

  console.log(units);

  return type === 'Home'
    ? homeUnitCalculation(units)
    : factoryUnitCalculation(units);
};
