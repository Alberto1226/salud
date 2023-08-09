import { useState, useEffect } from 'react';
import Routing from "./routers/Routing";
import { AuthContext } from "./utils/contexts";
import { ToastContainer } from "react-toastify";

function App() {
    const [LoadUser, setLoadUser] = useState(false);
    const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

    useEffect(() => {
        // You can perform any initial setup here if needed
        setRefreshCheckLogin(false);
        setLoadUser(true);
    }, []);

    if (!LoadUser) return null;

    return (
        <AuthContext.Provider value={null}>
            <Routing setRefreshCheckLogin={setRefreshCheckLogin} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
        </AuthContext.Provider>
    );
}

export default App;
