import LocalizedStrings from 'react-native-localization';

export const strings = new LocalizedStrings({
  my: {
    homeHeader: 'မီတာဘေ တွက်မယ်',
    title1: 'ယူနစ် တိုက်ရိုက်ထည့် တွက်မည်။',
    title2: 'ယူနစ် ခြားနားချက်ဖြင့် တွက်မည်။',
    title3: 'စျေးနှုန်းများ ကြည့်ရှုရန်။',
    title4: 'ကျွန်ုပ်တို့ အကြောင်း။',
    positive: 'ယူနစ်များသည် အပေါင်းကိန်းဂဏန်းများသာ ဖြစ်ရမည်။',
    minUnit: 'အနှိမ့်ဆုံး ၁ ယူနစ် ထည့်သွင်းရမည်။',
    required: 'ယူနစ်များကို ဖောင်တွင် ထည့်သွင်းရန်လိုအပ်ပါသည်။',
    typeOfMeter: 'မီတာအမျိုးအစား ရျွေးချယ်ရန် လိုအပ်ပါသည်။',
    singUnitScreenTitle: 'ယူနစ်တိုက်ရိုက်',
    inputLabel: 'သုံးစွဲသည့် ယူနစ်',
    homeTypeMeter: 'အိမ်သုံး',
    factoryTypeMeter: 'လုပ်ငန်းသုံး',
    chooseTypes: 'မီတာ အမျိုးအစား',
    maintenance: 'ထိန်းသိမ်းခ ထည့်တွက်ရန်',
    detailScreenUnitLabel: 'သုံးစွဲခဲ့သည့် ယူနစ် စုစုပေါင်း',
    detailScreenPricesLabel: 'ကျသင့်ငွေ တန်ဘိုး',
    detailScreenMaintenanceLabel: 'မီတာ ထိန်းသိမ်းခ',
    detailScreenTotalPricesLabel: 'ကျသင့်ငွေ စုစုပေါင်း',
    submitBtn: 'တွက်မည်',
    detailTitle: 'အသေးစိတ်',
    detailCardTitle: 'တွက်ချက်မှု စာရင်း',
    detailCardTitle2: 'အသေးစိတ် တွက်ချက်မှု စာရင်းဇယား',
    tableTitle1: 'ယူနစ်အလွှာ',
    tableTitle2: 'နှုံးထား',
    tableTitle3: 'သုံးစွဲ ယူနစ်',
    tableTitle4: 'ကျသင့်ငွေ',
    total: 'စုစုပေါင်း ကျသင့်ငွေ (ကျပ်)',
    labelInput1: 'ယခင် သုံးစွဲခဲ့သည့် ယူနစ်',
    labelInput2: 'ယခု သုံးစွဲ ယူနစ်',
    pricesLabel: 'စျေးနှုန်းများ',
  },
});

// ? Set the language manually
strings.setLanguage('my');
