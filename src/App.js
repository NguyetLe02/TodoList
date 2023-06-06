import { Route, Routes } from 'react-router-dom';
// import Overview from './pages/Overview/Overview';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Login/Login';
function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<Overview />} /> */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
}

export default App;
