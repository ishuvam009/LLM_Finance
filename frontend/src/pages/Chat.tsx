import { useState, useRef, useEffect } from "react";
import { ArrowUp } from 'lucide-react';

export const Chat = () => {
    const [message, setMessage] = useState("");
    const textareaRef = useRef(null);

    // Auto-resize textarea based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Reset height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
        }
    }, [message]);

    return (
        <div className="h-screen w-screen mt-40 flex flex-col items-center">
            <p className="text-3xl font-bold">What can I help with?</p>

            <div className="border border-slate-300 mt-6 shadow-2xl px-6 py-4 rounded-3xl w-2/3 max-w-2xl flex flex-col">
                <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask anything"
                    rows={1}
                    className="w-full resize-none overflow-hidden p-2 rounded-md focus:outline-none"
                />
                <div className="flex items-center self-end justify-center h-8 w-8 text-white bg-black rounded-full mt-4">
                    <ArrowUp />
                </div>
            </div>
        </div>
    );
};
