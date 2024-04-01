const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = async (prompt) => {

  try {

    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: `You are a helpfull assistant.` },
        { role: "user", content: prompt }
      ],
      model: "gpt-3.5-turbo",
    });

    let content = response.choices[0].message.content;
console.log(content)
    return {
      status: 1,
      response: content
    };
  } catch (error) {
    return {
      status: 0,
      response: ' مرحبا بك، الروبوت لايدعم الصور، تظهر هذه الرسالة في حالة قمت بإرسال صورة www.aouartech.site'
    };
  }
};


module.exports = {
  chatCompletion
};
