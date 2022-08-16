export const returnPrices = (
  inputUnits: number,
  minUnits: number,
  targetUnitPrices: number,
  minPrices: number,
) => {
  if (inputUnits === 0) {
    return 0;
  }

  const usedUnits = inputUnits - minUnits;

  const pricesOfUsedUnits = usedUnits * targetUnitPrices;

  return minPrices + pricesOfUsedUnits;
};

//return inputUnits  > 70000
//   ? totalPrices.toExponential(4)
//   : totalPrices.toLocaleString('en-US');
