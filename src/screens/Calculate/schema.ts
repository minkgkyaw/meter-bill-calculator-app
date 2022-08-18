import * as Yup from 'yup';
import {strings} from '../../i18n';

export const singleUnitInput = Yup.object({
  units: Yup.string().required(strings.required),
  type: Yup.mixed().oneOf(['Home', 'Factory']).required(strings.typeOfMeter),
});

export const multipleUnitsInput = Yup.object({
  prevUnits: Yup.string().required(strings.required),
  currUnits: Yup.string().required(strings.required),
  type: Yup.mixed().oneOf(['Home', 'Factory']).required(strings.typeOfMeter),
});
