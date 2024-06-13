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
                __html: msg.text
                  .replace(
                    /(logtime|tracking|log time|track time|track-time|log-time)/gi,
                    (found) => {
                      return `<mark>${found}</mark>`;
                    },
                  )
                  .replace(/(nhậu)/gi, (found) => {
                    return (
                      found.slice(0, 1) +
                      found
                        .slice(1)
                        .split("")
                        .map(() => "*")
                        .join("")
                    );
                  }),
              }}
            ></p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
