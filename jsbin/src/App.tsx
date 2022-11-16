import { Iframe, Editor, Console } from '@components/layout'
import './App.css'

function App() {
  return (
    <div className="h-screen grid grid-cols-2 grid-rows-2 gap-1">
      <Editor />
      <Iframe />
      <Console />
    </div>
  )
}

export default App
