import React, { useState } from "react"

export default function App() {
    const [message, setMessage] = useState("")

    const messageList = document.getElementById('messageList')

    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            let chatList = document.createElement('p')
            chatList.style.fontSize = '16px'
            chatList.textContent = message
            messageList.appendChild(chatList)
            setMessage("")
        }
    }

    return (
        <div className={'mx-auto mt-40 w-80 border shadow-md h-80 px-4 bg-slate-50'}>
            <div className="w-full h-56 grid" id="messageList"></div>
            <form onSubmit={sendMessage}>
                <div className="flex mt-3 gap-2">
                    <input type="text" className="border h-9" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className="border">Send</button>
                </div>
            </form>
        </div>
    )
}