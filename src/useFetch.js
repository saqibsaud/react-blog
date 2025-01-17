import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortFetch = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortFetch.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error("Could not fetch the data from that resource");
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name !== "AbortError"){
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 500);

        return () => abortFetch.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;