
// This is a mock service to simulate Gemini API calls.
// In a real application, this would interact with the @google/genai library.

export const getMarketPrediction = async (): Promise<string> => {
    const predictions = [
        "High demand for Ionic Power Cells expected in the next 7 days due to solar flare activity.",
        "Medical sector showing increased need for Hydrogel Packs. Suggest increasing stock by 15%.",
        "Price of Carbon Nanotubes may fluctuate. Monitor supplier NanoWorks for updates.",
        "Electronics demand is stable, but a new Quantum Processor competitor is emerging.",
    ];
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(predictions[Math.floor(Math.random() * predictions.length)]);
        }, 1000);
    });
};

export const getReorderSuggestion = async (): Promise<string[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['PID-002', 'PID-006']);
        }, 800);
    });
};

export const getChatbotResponse = async (message: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`I am a warehouse AI assistant. You asked about "${message}". I can help with inventory queries, bot status, and demand forecasts. What would you like to know?`);
        }, 1200);
    });
};

export const getAIRecommendation = async (): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Consider diversifying suppliers for the 'Energy' category to mitigate risk from Voltacorp's recent production slowdowns. Demand trends suggest a 10% increase in this sector next quarter.");
        }, 1500);
    });
};
