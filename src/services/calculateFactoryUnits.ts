import {returnPrices} from './pricesCalculator';

type Input = number;

export const factoryUnitCalculation = (input: Input) => {
  switch (true) {
    case input < 501:
      return input * 125; // maxPrices 62500 Kyats (500 units x 125 kyats) will be next minPrices
    case input < 5001:
      return returnPrices(input, 500, 135, 62500);
    case input < 10001:
      return returnPrices(input, 5000, 145, 670000);
    case input < 20001:
      return returnPrices(input, 10000, 155, 1395000);
    case input < 50001:
      return returnPrices(input, 20000, 167, 2945000);
    case input < 100001:
      return returnPrices(input, 50000, 175, 7955000);
    case input > 100000:
      return returnPrices(input, 100000, 180, 16705000);
    default:
      return 0;
  }
};
