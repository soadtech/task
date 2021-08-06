import { useState, useEffect } from 'react';
import { User } from '../services/users';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const getDataAuth = async () => {
        try {
            console.log('llego aki');
            const data = await User.get();
            console.log('llego aki x2');
            console.log('dataaaaaa.', data)
            if (data !== null) {
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
