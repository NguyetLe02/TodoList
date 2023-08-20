import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
// import Profile from './pages/Profile/Profile';
import Layout from './container/Layout/Layout';


function App() {
    return (

        // <Layout />
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
}

export default App;
