import "./App.css";
import { messages } from "./messages";

function App() {
  return (
    <>
      <h1>{`🎨 Viện bảo tàng content 🖼️`}</h1>
      <div className="message-grid">
        {messages.map((msg) => (
          <div className="message" key={msg.id}>
            <p
              dangerouslySetInnerHTML={{
                __html: msg.text.replace(
                  /(logtime|tracking|log time|track time|track-time)/gi,
                  (found) => {
                    return `<mark>${found}</mark>`;
                  },
                ),
              }}
            ></p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
