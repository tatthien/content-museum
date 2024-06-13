import "./App.css";
import { messages } from "./messages";

function App() {
  return (
    <>
      <h1>{`🎨 Viện bảo tàng content 🖼️`}</h1>
      <div className="message-grid">
        {messages.map((msg) => (
          <div className="message" key={msg.id}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
