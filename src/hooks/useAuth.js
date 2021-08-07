import { useState, useEffect } from 'react';
import { User } from '../services/users';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const getDataAuth = async () => {
        try {
            const data = await User.get();
            if (data.length > 0) {
                setAuthenticated(true);
                setUser(data[0])
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
