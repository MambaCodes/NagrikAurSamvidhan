import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SendIcon, ScaleIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Function to parse and format text
function parseText(text) {
  // Handle bold text
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Handle italic text
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Handle code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
  // Handle inline code
  html = html.replace(/`([^`]*)`/g, '<code>$1</code>');
  
  // Handle headers
  html = html.replace(/^(#{1,6})\s*(.*)$/gm, (_, hashes, content) => {
    const level = hashes.length;
    return `<h${level}>${content}</h${level}>`;
  });

  // Handle unordered lists
  html = html.replace(/^-\s(.*)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)/g, '<ul>$&</ul>');
  
  // Handle ordered lists
  html = html.replace(/^\d+\.\s(.*)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)/g, '<ol>$&</ol>');
  
  // Wrap everything in a div
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}


// Function to handle messages with context
async function sendMessageToAI(message) {
  const response = await fetch('http://127.0.0.1:5000/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: message }),
  });

  const data = await response.json();
  
  if (response.ok) {
    return data.answer;
  } else {
    throw new Error(data.error || 'Error fetching response. Please try again.');
  }
}

export default function ChatWithAI() {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef(null)

  useEffect(() => {
    const scrollElement = scrollAreaRef.current;
    if (scrollElement) {
      scrollElement.scrollTo({
        top: scrollElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return

    const userMessage = {
      id: messages.length,
      text: inputMessage,
      sender: 'user',
    }

    setMessages(prevMessages => [...prevMessages, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const aiResponse = await sendMessageToAI(inputMessage)
      const aiMessage = {
        id: messages.length + 1,
        text: aiResponse,
        sender: 'ai',
      }
      setMessages(prevMessages => [...prevMessages, aiMessage])
    } catch (error) {
      console.error('Error sending message to AI:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ConstitutionAI</h1>
        <Button variant="ghost" size="icon">
          <ScaleIcon className="h-6 w-6" onClick={() => navigate("/app")} />
        </Button>
      </header>
      <ScrollArea className="flex-grow p-4 overflow-y-auto" ref={scrollAreaRef}>
        <AnimatePresence>
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                </Avatar>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`mx-2 p-3 rounded-lg ${
                    message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                  }`}
                >
                  {parseText(message.text)}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-start mb-4"
          >
            <div className="flex items-center bg-secondary rounded-lg p-3">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity, duration: 1 }
                }}
                className="flex space-x-2"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </ScrollArea>
      <div className="p-4 bg-background border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          className="flex space-x-2"
        >
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button type="submit" disabled={isLoading}>
              <SendIcon className="h-4 w-4 mr-2" />
              Send
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  )
}
