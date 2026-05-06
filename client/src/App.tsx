
import { useState, useEffect } from 'react'
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
import { useLocation } from "react-router-dom";

function AppContent() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setShowOverlay(false);
  }, [location]);

  return (
    <>
      <NavBar overlayOpen={showOverlay} overlayClose={() => setShowOverlay(false)} overlayToggle={() => setShowOverlay(prev => !prev)} />
      <main>
        <Overlay isOpen={showOverlay} onClose={() => setShowOverlay(prev => !prev)}>
          <SideBar />
        </Overlay>
        <Routes>
          <Route path="/" element={
            <>
              <Content />
              <SideBar />
            </>
          } />
          <Route path={ROUTES.LOGIN} element={<FormLogin />} />
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
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent /> {/* AuthProvider wrappas runt allt */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

