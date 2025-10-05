
import React, { useState, useRef, useEffect } from 'react';
import { RobotIcon } from '../icons/Icons';
import Card from '../ui/Card';
import { getChatbotResponse } from '../../services/geminiService';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);
    
    useEffect(() => {
        if(isOpen && messages.length === 0) {
            setIsLoading(true);
            getChatbotResponse("Hello").then(response => {
                setMessages([{ text: response, sender: 'ai' }]);
                setIsLoading(false);
            });
        }
    }, [isOpen, messages.length]);


    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage: Message = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponse = await getChatbotResponse(input);
        const aiMessage: Message = { text: aiResponse, sender: 'ai' };

        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-neon-blue rounded-full text-white flex items-center justify-center shadow-lg shadow-neon-blue/50 hover:scale-110 transition-transform"
                aria-label="Toggle Chatbot"
            >
                <RobotIcon className="w-8 h-8" />
            </button>

            {isOpen && (
                <div className="fixed bottom-28 right-8 w-96 h-[32rem] z-50">
                    <Card className="flex flex-col h-full !p-0">
                        <header className="p-4 border-b border-white/20">
                            <h3 className="font-bold text-lg">AI Warehouse Assistant</h3>
                        </header>
                        <div className="flex-1 p-4 overflow-y-auto">
                            <div className="flex flex-col gap-4">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-neon-blue text-dark-bg rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 rounded-bl-none'}`}>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></span>
                                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>
                        <footer className="p-4 border-t border-white/20">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask something..."
                                    className="flex-1 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border-transparent focus:border-neon-blue focus:ring-0"
                                />
                                <button onClick={handleSend} className="px-4 py-2 bg-neon-blue text-dark-bg font-semibold rounded-lg">Send</button>
                            </div>
                        </footer>
                    </Card>
                </div>
            )}
        </>
    );
};

export default Chatbot;
