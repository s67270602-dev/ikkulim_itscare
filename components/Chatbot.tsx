
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '안녕하세요! 이끌림잇츠케어 AI 어드바이저입니다. 부산, 울산, 양산, 김해 지역의 제빙기나 에어컨 위생 관리에 대해 궁금한 점이 있으신가요?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `당신은 '이끌림잇츠케어'의 전문 상담사입니다. 
          부산, 울산, 양산, 김해 지역 전역에서 제빙기 청소, 에어컨 청소를 전문으로 하는 업체임을 강조하세요.
          답변은 친절하고 전문적이어야 하며, 제빙기의 물때, 곰팡이, 에어컨 세균의 위험성을 알려주세요.
          동남권(부산/울산/양산/김해) 전 지역 어디든 신속하게 방문 가능하다는 점을 언급하세요.
          마지막에는 항상 '정확한 견적은 방문 상담을 통해 가능하니 1577-7672로 연락달라'고 안내하세요.
          한국어로 답변하세요.`
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || '죄송합니다. 일시적인 오류가 발생했습니다.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: '상담 연결이 지연되고 있습니다. 직접 전화를 주시면 더 빠른 상담이 가능합니다!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      
      {/* Social Floating Buttons (Visible only when chat is closed) */}
      {!isOpen && (
        <>
          {/* Naver Blog */}
          <a 
            href="https://blog.naver.com/itscare77" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#03C75A] w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-white text-xl font-black hover:scale-110 transition-transform animate-fade-in"
            title="네이버 블로그"
          >
            N
          </a>
          
          {/* Kakao Channel */}
          <a 
            href="https://pf.kakao.com/_Azgyn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FAE100] w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-[#3B1E1E] text-xl hover:scale-110 transition-transform animate-fade-in"
            title="카카오톡 채널"
          >
            <i className="fas fa-comment"></i>
          </a>
        </>
      )}

      {/* Chatbot Window or Trigger Button */}
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 transition-all animate-slide-up">
          <div className="bg-[#0069D9] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot text-xl"></i>
              <span className="font-bold">위생 관리 AI 상담</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#0069D9] text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-200 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="궁금한 내용을 입력하세요..."
              className="flex-grow text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0069D9]"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-[#0069D9] text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#0052a9] transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#0069D9] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform animate-pulse"
        >
          <i className="fas fa-comment-dots"></i>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
