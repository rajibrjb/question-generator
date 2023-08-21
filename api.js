const { Configuration, OpenAIApi } = require('openai');
const limiter = require('./limiter');
require('dotenv').config()
// Provide the API key via environment variable


async function askGPT3(question) {
  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY,
    })
  )
  // return limiter.schedule(async () => {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello world"}],
      }],
    });
    console.log(response.data.choices[0].message.content)
    return chatCompletion.data.choices[0].message.content;
  // });
}

module.exports = {
  askGPT3
};
