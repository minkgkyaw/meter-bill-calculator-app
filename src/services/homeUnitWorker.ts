export const homeUnitsWorker = (
  totalUnits: number,
  setLayer: (arg0: string) => void,
  setAmount: (arg0: number) => void,
  setMinUnits: (arg0: number) => void,
) => {
  if (totalUnits > 200) {
    setLayer('၂၀၁ နှင့် အထက်');
    setAmount(125);
    return setMinUnits(200);
  } else if (totalUnits > 150) {
    setLayer('၁၅၁ မှ ၂၀၀');
    setAmount(120);
    return setMinUnits(150);
  } else if (totalUnits > 100) {
    setLayer('၁၀၁ မှ ၁၅၀');
    setAmount(110);
    return setMinUnits(100);
  } else if (totalUnits > 75) {
    setLayer('၇၆ မှ ၁၀၀');
    setAmount(90);
    return setMinUnits(75);
  } else if (totalUnits > 50) {
    setLayer('၅၁ မှ ၇၅');
    setAmount(70);
    return setMinUnits(50);
  } else if (totalUnits > 30) {
    setLayer('၃၁ မှ ၅၀');
    setAmount(50);
    return setMinUnits(30);
  } else if (totalUnits < 31) {
    setLayer('၁ မှ ၃၀');
    setAmount(35);
    return setMinUnits(0);
  }
};
