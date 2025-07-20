// ai.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
// Correctly initialize the GoogleGenerativeAI client
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getRecipeFromGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        // Get the generative model. Note the model name format.
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash-latest",
            systemInstruction: SYSTEM_PROMPT,
        });

        // The user prompt
        const prompt = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        return text;

    } catch (err) {
        console.error("Error fetching recipe from Gemini:", err);
        return undefined;
    }
}