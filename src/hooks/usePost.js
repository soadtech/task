import { useState, useEffect, useCallback } from 'react';

const useFetchPost = (whenResponse, action) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchS, setFetch] = useState(false);

    const [url, setUrl] = useState('')
    const [dataRequest, setDataRequest] = useState('')

    const [showModal, setShowModal] = useState(false)
    const [msg, setMsg] = useState('')


    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const res = await action;
            whenResponse(res)
            setIsLoading(false)
        } catch (error) {
            console.log('ERROR =>', error);
            setIsLoading(false)
            setShowModal(true)
            if (error.response) {

                const dataParse = JSON.parse(error.response.data)
                console.log('FETCH ERROR =>', dataParse);
                setMsg(dataParse.message)
            } else {
                setError(error.message);
                setMsg(error.message)
            }

        }
    }, [dataRequest, url])

    useEffect(() => {
        if (fetchS) {
            fetchData()
            setFetch(false)
        }
    }, [fetchS, fetchData]);

    const handlerFetch = (urlRequest, data) => {
        setDataRequest(data)
        setUrl(urlRequest)
        setFetch(true)
    }

    return {
        response,
        error,
        isLoading,
        handlerFetch,
        msg,
        showModal,
        setShowModal
    };
};

export default useFetchPost;
