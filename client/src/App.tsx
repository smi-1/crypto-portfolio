import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Content } from './components/Content'
import { SideBar } from './components/SideBar'
import { Overlay } from './components/Overlay'

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <NavBar onMenuClick={() => setShowOverlay(prev => !prev)} isOpen={showOverlay} />
      <main>
        <Overlay isOpen={showOverlay} onClose={() => setShowOverlay(prev => !prev)}>
          <SideBar />
        </Overlay>
        <Content />
        <SideBar />
      </main>
    </>
  )
}

export default App
