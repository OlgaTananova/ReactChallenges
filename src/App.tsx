import './App.css';
import ColorRenderer from "./color-renderer/ColorRender.tsx";
import DarkMode from "./dark-mode/DarkMode.tsx";

function App() {

  return (
    <>
        <div className='App'>
            {/*<ColorRenderer />*/}
            <DarkMode/>
        </div>
    </>
  )
}

export default App
