import { useState, useEffect } from 'react';
import { User } from '../services/users';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const getDataAuth = async () => {
        try {
            const data = await User.get();
            if (data) {
                setAuthenticated(true);
                setUser(data)
            }
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getDataAuth()
    }, [])

    return {
        authenticated,
        user
    }
}

export default useAuth;
