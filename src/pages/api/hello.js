

export default async function fetchOpenAI(req,res) {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const responseData = await openai.createCompletion({
    model: "text-davinci-003",
    // prompt:"tell me a joke",
    prompt: `I want a creative solution,use quotes or dialoges from movies or anything, My target audience is ${TargetAudience}. I want the emotion of the message to be ${Emotion}. The goal of the message should be to communicate ${goal}. I am offering ${communicate}. The tone of the message should be ${tone}. Please create a message with three parts: a message title, a message subtitle, and a call to action. Please present the this as an array , with each part in a separate element. we dont need the labels and use double quotes for the text `,
    max_tokens: 2048,
    temperature: 0.9,
  });

  res.send(responseData.data?.choices[0].text);



  // console.log(responseData.data?.choices[0].text);
  // // covert ' to "
  // // const newstr = responseData.data?.choices[0].text.replace(/'/g, "\'");
  // const newstr = responseData.data?.choices[0].text.replace(/'/g, `\'`);
  // console.log(newstr);
  // const array = JSON.parse(newstr);

  // setResponse(array);
  // console.log(response);
  // console.log(response.data?.choices[0].text.split(" "));
}