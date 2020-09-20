import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
  <html>
  <body>${html}</body>  
  <style>${css}</style>
  <script>${js}</script>
  </htm>
 
  `)
    }, 250)
    return ()=> clearTimeout(timeOut)
  }, [js, css, html])


  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />


      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          title="output"
          width="100%"
          height="100%"
          frameBorder="0"></iframe>
      </div>
    </>
  );
}

export default App;
