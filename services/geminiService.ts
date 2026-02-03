import { GoogleGenAI } from "@google/genai";
import { PROFILE } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a system instruction that gives the AI the persona of the user
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PROFILE.name}, a ${PROFILE.title} at ${PROFILE.institution}.
Your goal is to answer questions from visitors about ${PROFILE.name}'s research, publications, and background.
Be professional, polite, and academic in tone.

Here is the profile data you have access to:
Bio: ${PROFILE.bio}
Research Interests: ${PROFILE.research.map(r => r.title).join(", ")}
Recent News: ${PROFILE.news.map(n => n.content).join("; ")}
Publications: ${PROFILE.publications.map(p => p.title).join("; ")}
Contact Email: ${PROFILE.email}

If asked about something not in this data, politely say you don't know but suggest contacting ${PROFILE.name} directly at ${PROFILE.email}.
Keep answers concise (under 100 words) unless asked for details.
`;

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "AI Assistant is currently offline (API Key missing). Please contact me via email.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};