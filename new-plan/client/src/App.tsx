import axios from 'axios'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const downloadTemplate = async () => {
    const response = await axios.post("http://localhost:8000/api/generate", {
      project_type: ""
    }, { responseType: "blob" })

    console.log(response)

    const blob = new Blob([response.data], { type: 'application/zip' });

    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'novo-teste-5.zip';
    link.click();

    console.log(downloadUrl);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={downloadTemplate}>
          Download Template Here!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
