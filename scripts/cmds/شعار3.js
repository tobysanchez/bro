const axios = require('axios');

module.exports = {
  config: {
    name: "شعار3",
    version: "1.0",
    author: "Samir.",
    countDown: 10,
    role: 0,
    shortDescription: "احصل على صورة خاصة بك",
    longDescription: "احصل على صورة خاصة بك",
    category: "gfx",
    guide: {
      en: "{p}{n} name | subname",
    }
  },

  onStart: async function ({ message, event, api }) {
    const info = event.body.slice(event.body.indexOf(' ') + 1);
    if (!info) {
      return message.reply("الرجاء إدخال التنسيق:\ngfx3  name | subname");
    }

    const [text, text1] = info.split("|").map((item) => item.trim());

    await message.reply("جاري معالجة طلباتك ، برجاء الانتظار ...");

    const img = `https://tanjiro-api.onrender.com/gfx3?text=${text}&text2=${text1}&api_key=tanjiro`;
    const form = {
      body: "هذا هو شعار GFX الخاص بك✨",
      attachment: [await global.utils.getStreamFromURL(img)]
    };

    message.reply(form);
  }
};
