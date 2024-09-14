import React, { useState } from "react";
import ChatMessage from './ChatMessages';

function Chat({ user }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const handlesubmit = () => {

    }
    return (
        <div>
            <div className="p-0">
                <h2 className='text-info'>-WECHAT APP-</h2>
            </div>
            <div className="row mt-4">
                <div className="col-xl-4 col-lg-4 col-sm-3 col-2"></div>
                <div className="col-xl-4 col-lg-4 col-sm-6 col-8 chat-message"></div>
                {messages.map((message) => (
                    <ChatMessage {...message} user={user} />
                ))}
                <div className="d-flex align-item-center justify-content-center mt-2">
                    <input className="w-25" type="text"  value={text} onChange={(e) => setText(e.target.value)} />
                    <button className="ms-3 btn btn-secondary " onClick={handlesubmit}>
                        Send
                    </button>
                </div>
                <div id="copyright" className="mt-3">
                    Copyrights Reserved @WechAt-2024
                </div>
            </div>
        </div>
    );
}

export default Chat;
