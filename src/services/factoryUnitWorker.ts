export const factoryUnitsWorker = (
  totalUnits: number,
  setLayer: (arg0: string) => void,
  setAmount: (arg0: number) => void,
  setMinUnits: (arg0: number) => void,
) => {
  if (totalUnits > 100000) {
    setLayer('၁၀၀၀၀၁ နှင့် အထက်');
    setAmount(180);
    return setMinUnits(100000);
  } else if (totalUnits > 50000) {
    setLayer('၅၀၀၀၁ မှ ၁၀၀၀၀၀');
    setAmount(175);
    return setMinUnits(50000);
  } else if (totalUnits > 20000) {
    setLayer('၂၀၀၀၁ မှ ၅၀၀၀၀');
    setAmount(155);
    return setMinUnits(20000);
  } else if (totalUnits > 10000) {
    setLayer('၁၀၀၀၁ မှ ၂၀၀၀၀');
    setAmount(155);
    return setMinUnits(10000);
  } else if (totalUnits > 5000) {
    setLayer('၅၀၀၁ မှ ၁၀၀၀၀');
    setAmount(145);
    return setMinUnits(5000);
  } else if (totalUnits > 500) {
    setLayer('၅၀၁ မှ ၅၀၀၀');
    setAmount(135);
    return setMinUnits(500);
  } else if (totalUnits < 501) {
    setLayer('၁ မှ ၅၀၀');
    setAmount(125);
    return setMinUnits(0);
  }
};
