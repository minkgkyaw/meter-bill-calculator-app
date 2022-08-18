import {returnPrices} from './pricesCalculator';

type Input = number;

export const homeUnitCalculation = (input: Input) => {
  switch (true) {
    case input < 31:
      return input * 35; // maxPrices 1050 kyats (30 units x 35 kyats) will be next minPrices
    case input < 51:
      return returnPrices(input, 30, 50, 1050);
    case input < 76:
      return returnPrices(input, 50, 70, 2050);
    case input < 101:
      return returnPrices(input, 75, 90, 3800);
    case input < 151:
      return returnPrices(input, 100, 110, 6050);
    case input < 201:
      return returnPrices(input, 150, 120, 11550);
    case input > 200:
      return returnPrices(input, 200, 125, 17550);
    default:
      return 0;
  }
};
