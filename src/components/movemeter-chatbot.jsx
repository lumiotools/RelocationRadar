import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";

export function MovemeterChatbot({ onClose, toLocation }) {
  const [messages, setMessages] = useState([
    {
      text: `Hello! I'm your MoveMeter assistant. How can I help you with your relocation to ${toLocation}?`,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);

      // Simulate bot response based on input
      setTimeout(() => {
        let botResponse;
        if (
          input.toLowerCase().includes("school") ||
          input.toLowerCase().includes("education")
        ) {
          botResponse = {
            text: `Here are the top 10 schools in ${toLocation}:\n1. Lowell High School\n2. Ruth Asawa San Francisco School of the Arts\n3. Galileo Academy of Science and Technology\n4. Abraham Lincoln High School\n5. George Washington High School\n6. Raoul Wallenberg High School\n7. Balboa High School\n8. Mission High School\n9. John O'Connell High School\n10. Phillip and Sala Burton Academic High School`,
            sender: "bot",
            showTopSchoolsButton: true,
          };
        } else {
          botResponse = {
            text: `I'm here to help answer any questions about your potential move to ${toLocation}. You can ask about schools, housing, neighborhoods, or any other aspects of living here.`,
            sender: "bot",
          };
        }
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleTopSchools = () => {
    setMessages((prev) => [
      ...prev,
      {
        text: "Here are the top schools in the area...",
        sender: "bot",
        isTopSchools: true,
      },
    ]);
  };

  const handleContactAgent = () => {
    // Add contact agent functionality here
    console.log("Contacting agent...");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 right-10 w-96 z-50"
    >
      <Card
        className="shadow-xl border-2 border-[#77003b]/20"
      >
        <CardHeader
          className="flex flex-row items-center justify-between p-4 bg-[#77003b] text-white rounded-t-lg"
        >
          <CardTitle
            className="text-lg font-semibold"
          >
            Chat with AI
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-[#550029] text-white"
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="p-4">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-start ${
                      message.sender === "user"
                        ? "bg-[#77003b] text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {message.text}
                    {message.showTopSchoolsButton && (
                      <Button
                        onClick={handleTopSchools}
                        className="mt-2 bg-[#F1889F] hover:bg-[#E16B84] text-white w-full"
                      >
                        Contact Agent
                      </Button>
                    )}

                    {message.isTopSchools && (
                      <Button
                        onClick={handleContactAgent}
                        className="mt-2 bg-[#F1889F] hover:bg-[#E16B84] text-white w-full"
                      >
                        CONTACT AGENT
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex gap-2 mt-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow"
            />

            <Button
              onClick={handleSend}
              className="bg-[#77003b] hover:bg-[#550029] text-white"
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
