
import { GoogleGenerativeAI } from "@google/generative-ai";

const key="AIzaSyBTVPXNouUfj2p5JvnGZpQwg3inD26zasU"

const genAI = new GoogleGenerativeAI(key);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;