import { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from "react";
import UploadModal from '../components/UploadModal';

// Define interface for message objects
interface Message {
  text: string;
  sender: 'user' | 'assistant';
}

export default function Chat() {
    const [message, setMessage] = useState<string>("");
    const [chatStarted, setChatStarted] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Test responses
    const demoResponses: string[] = [
        "Hello! How can I assist you today?",
        "I understand your question. Here's what I can tell you about that topic...",
        "That's an interesting question! Let me share some insights with you.",
        "I'm here to help! Let me provide some information on that.",
        "Great question! Here's what I know about that."
    ];

    // Auto-resize textarea based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Reset height
            const maxHeight = 120; // Maximum height before scrolling (in pixels)
            
            if (textareaRef.current.scrollHeight > maxHeight) {
                textareaRef.current.style.height = `${maxHeight}px`;
                textareaRef.current.style.overflowY = "auto";
            } else {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                textareaRef.current.style.overflowY = "hidden";
            }
        }
    }, [message]);

    // Scroll to bottom when messages update
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = (): void => {
        if (!message.trim()) return;

        // Add user message
        const newMessages: Message[] = [...messages, { text: message, sender: 'user' }];
        
        // Get a random response for demo purposes
        const responseIndex = Math.floor(Math.random() * demoResponses.length);
        const response = demoResponses[responseIndex];
        
        // Add response message with slight delay to simulate processing
        setTimeout(() => {
            setMessages([...newMessages, { text: response, sender: 'assistant' }]);
        }, 500);

        setMessages(newMessages);
        setChatStarted(true);
        setMessage(""); // Clear message after sending
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (message.trim()) {
                handleSendMessage();
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(e.target.value);
    };

    const handleFileUpload = (file: File) => {
        // Handle the uploaded PDF file here
        console.log('Uploaded file:', file);
        setMessages([...messages, { 
            text: `Uploaded file: ${file.name}`, 
            sender: 'user' 
        }]);
        setChatStarted(true);
    };

    const handleLinkAdd = (url: string) => {
        // Handle the added link here
        console.log('Added link:', url);
        setMessages([...messages, { 
            text: `Added link: ${url}`, 
            sender: 'user' 
        }]);
        setChatStarted(true);
    };

    return (
        <div className="h-screen w-full flex flex-col relative">
            {!chatStarted && (
                <div className="flex flex-col items-center mt-40">
                    <p className="text-3xl font-bold">What can I help with?</p>
                </div>
            )}

            {chatStarted && (
                <div ref={chatContainerRef}
                    className="flex-1 overflow-y-auto p-4 pt-6 pb-24 mx-30">
                    {messages.map((msg, index) => (
                        <div key={index} 
                            className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div 
                                className={`rounded-4xl p-4 ${
                                    msg.sender === 'user' 
                                        ? 'bg-gray-100 text-black max-w-xs md:max-w-sm' 
                                        : 'text-black max-w-xs md:max-w-md'
                                } break-words`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="absolute bottom-4 w-full px-4">
                <div className="border border-slate-300 shadow-2xl px-4 py-3 rounded-3xl mx-auto max-w-2xl flex flex-col bg-white">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsUploadModalOpen(true)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            +
                        </button>
                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask anything"
                            rows={1}
                            className="w-full resize-none p-2 rounded-md focus:outline-none"
                        />
                    </div>
                    <div 
                        onClick={message.trim() ? handleSendMessage : undefined}
                        className={`flex items-center self-end justify-center h-8 w-8 text-white rounded-full mt-2 ${
                            message.trim() ? 'bg-black cursor-pointer' : 'bg-slate-300 cursor-not-allowed'
                        }`}>
                        ↑
                    </div>
                </div>
            </div>

            <UploadModal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                onUpload={handleFileUpload}
                onLink={handleLinkAdd}
            />
        </div>
    );
}