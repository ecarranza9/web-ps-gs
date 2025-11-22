import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual del sitio web de la Licenciada Giuliana Segura, psicóloga especializada en Terapia Cognitivo-Conductual (TCC) e Integrativa.
Tu objetivo es brindar información empática, clara y concisa a los visitantes del sitio web.

INFORMACIÓN CLAVE SOBRE GIULIANA:
- Especialidad: TCC e Integrativa para adultos.
- Áreas de trabajo: Ansiedad, estrés, autoestima, crisis emocionales, desarrollo personal.
- Enfoque: Basado en evidencia, humano, flexible, adaptado a cada persona.
- Espacio: Seguro, respetuoso y confidencial.

REGLAS:
1. Sé amable, profesional y cálido.
2. Responde preguntas sobre los servicios, el enfoque y la metodología.
3. Si te preguntan por turnos o precios, invítalos amablemente a usar el formulario de contacto del sitio o el botón de WhatsApp.
4. NO realices diagnósticos ni tratamientos psicológicos. Si el usuario expresa una crisis grave, recomiéndale contactar servicios de emergencia locales inmediatamente.
5. Mantén las respuestas breves (máximo 3 párrafos).
6. Habla siempre en español.

PREGUNTAS COMUNES:
- "¿Qué es la TCC?": Es una terapia práctica basada en la evidencia que ayuda a identificar y cambiar patrones de pensamiento y comportamiento negativos.
- "¿Atiende online?": Sí, consultar disponibilidad.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', text: string }[]): Promise<string> => {
  const ai = initializeGemini();
  if (!ai) {
    return "Lo siento, no puedo procesar tu solicitud en este momento. Por favor verifica la configuración.";
  }

  try {
    // Transform history for Gemini
    // Not strictly using history in this simple stateless call for brevity, 
    // but we utilize the chat model for context.
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster chat responses
        }
    });

    // If we wanted to preserve full history we would add history to the chat creation.
    // For this implementation, we send the user message directly to get a fresh response based on system instructions.
    const result = await chat.sendMessage({
        message: message
    });

    return result.text || "No pude generar una respuesta.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Hubo un error al conectar con el asistente. Por favor intenta más tarde.";
  }
};