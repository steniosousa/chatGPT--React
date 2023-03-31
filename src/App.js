import './App.css';
import {  useState } from 'react';
function App() {
  const [query, setQuery] =useState('')
  const [ response, setResponse] = useState('')
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: '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',
  });

  const openai = new OpenAIApi(configuration);

  async function get(){
    const {data} = await openai.createCompletion({
      model: "text-babbage-001",
      prompt: query,
      temperature: 0,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setResponse(data.choices[0].text)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://sistema.selletiva.com.br/images/logo.svg" className="App-logo" alt="logo" />
        <input onChange={e =>setQuery(e.target.value)}></input>
        <button onClick={get}>Send</button>
        <br></br>
        <h1>Resposta:</h1>
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App;
