import React, { useState } from 'react';
import { Form, Input, Button, Card, Divider, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import CryptoJS from 'crypto-js';

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
      const aiResponse = await callXFYunTTS(inputValue);
      const aiMessage = createChatMessage('ai', aiResponse);
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('调用讯飞TTS时出错:', error);
      message.error('无法获取AI响应');
    }
  };

  const createChatMessage = (sender: string, text: string): Message => {
    return { sender, text };
  };

  const callXFYunTTS = async (input: string) => {
    const API_KEY = 'xxx'; // 用您的API密钥替换
    const API_SECRET = 'xxx'; // 用您的API密钥替换
    const url = await getWebsocketUrl(API_KEY, API_SECRET);

    // 调用讯飞TTS API的逻辑
    const response = await fetch(url, {
      method: 'GET', // 或者使用WebSocket等方式调用API
    });
    const data = await response.text();

    return data; // 返回实际的API响应数据
  };

  const getWebsocketUrl = async (apiKey: string, apiSecret: string) => {
    const url = 'wss://tts-api.xfyun.cn/v2/tts';
    const host = location.host;
    const date = new Date().toGMTString();
    const algorithm = 'hmac-sha256';
    const headers = 'host date request-line';
    const signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/tts HTTP/1.1`;
    const signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret);
    const signature = CryptoJS.enc.Base64.stringify(signatureSha);
    const authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
    const authorization = btoa(authorizationOrigin);
    const websocketUrl = `${url}?authorization=${authorization}&date=${date}&host=${host}`;
    return websocketUrl;
  };

  return (
    <div className="chat-page">
      <Card>
        <Divider>聊天</Divider>
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
