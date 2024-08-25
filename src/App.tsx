import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CFIModule, HomeModule, RBACModule } from "./module_selector/modules";

// child inside parent resource CorpGroup > Companies, companies > contacts
export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<HomeModule />}/>
            <Route path="/rbac/*" element={<RBACModule />}/>
            <Route path="/cfi/*" element={<CFIModule/>} />
        </Routes>
    </BrowserRouter>
  
  );
};
