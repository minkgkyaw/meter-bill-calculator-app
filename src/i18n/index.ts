import LocalizedStrings from 'react-native-localization';

export const strings = new LocalizedStrings({
  my: {
    homeHeader: 'မီတာဘေ တွက်မယ်',
    title1: 'ယူနစ် တိုက်ရိုက်ထည့် တွက်မည်။',
    title2: 'ယခင်ယူနှစ် နှင့် ယခုယူနစ် ခြားနားချက်ဖြင့် တွက်မည်။',
    title3: 'ယူနစ်အလိုက် သတ်မှတ်ထားသော စျေးနှုန်းများ ကြည့်ရှုရန်။',
    title4: 'ကျွန်ုပ်တို့ အကြောင်း။',
  },
});

// ? Set the language manually
strings.setLanguage('my');
