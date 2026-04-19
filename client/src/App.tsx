
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar'
import { Content } from './components/Content'
import { SideBar } from './components/SideBar'
import { Overlay } from './components/Overlay'
import { AuthProvider, useAuth } from "./context/AuthContext";
import { FormLogin } from "./components/FormLogin";
import { PrivateRoute } from "./components/PrivateRoute";
import { Dashbar } from "./components/Dashbar";
import { TestMessage } from './components/TestMessage';
import { ROUTES } from './components/Routes';

function AppContent() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <NavBar onMenuClick={() => setShowOverlay(prev => !prev)} isOpen={showOverlay} />
      <main>
        <Routes>
          <Route path="/" element={
            <>        <Overlay isOpen={showOverlay} onClose={() => setShowOverlay(prev => !prev)}>
              <SideBar />
            </Overlay>
              <Content />
              <SideBar />
            </>
          } />
          <Route path={ROUTES.LOGIN} element={
            <main><FormLogin /></main>} />
          <Route
            path={ROUTES.DASHBAR}
            element={
              <PrivateRoute>
                <TestMessage />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent /> {/* AuthProvider wrappas runt allt */}
    </AuthProvider>
  );
}

export default App;

