import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { AppProvider } from "./context/AppContext";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Header />
                <Content>
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        
                    </Routes>
                </Content>
               
                <Footer />
            </BrowserRouter>
        </AppProvider>
    );
}



export default App;
