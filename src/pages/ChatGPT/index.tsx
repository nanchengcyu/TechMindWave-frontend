import React, { useState } from 'react';
import { Form, Input, Button, Card, Divider, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') {
      return;
    }

    const userMessage = createChatMessage('user', inputValue);
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    try {
      const aiResponse = await callOpenAI(inputValue);
      const aiMessage = createChatMessage('ai', aiResponse);
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      message.error('无法获取AI响应');
    }
  };

  const createChatMessage = (sender: string, text: string): Message => {
    return { sender, text };
  };

  const callOpenAI = async (input: string) => {
    const apiKey = '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';
    const prompt = input;
    const max_tokens = 50;
    const engine = 'text-davinci-003';

    const response = await fetch('https://api.openai.com/v1/engines/' + engine + '/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({ prompt, max_tokens }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].text;
    } else {
      throw new Error('No AI response');
    }
  };

  return (
    <div className="chat-page">
      <Card>
        <Divider>聊天dev-待开发中</Divider>
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <Form.Item>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={handleSendMessage}
              placeholder="输入消息..."
            />
          </Form.Item>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            style={{ position: 'absolute', bottom: '0', right: '0' }}
          >
            发送
          </Button>
        </div>
      </Card>
    </div>
  );
};

interface Message {
  sender: string;
  text: string;
}

export default ChatPage;
