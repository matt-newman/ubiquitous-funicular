import { useEffect, useState } from "react";

export function useFetch(url: string): any {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchController = new AbortController();

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    signal: fetchController.signal,
                });

                if (!response.ok) {
                    throw new Error(
                        `HTTP Response ${response.status}: ${response.statusText}`
                    );
                }

                const json_obj = await response.json();

                // race condition
                if (!fetchController.signal.aborted) {
                    setData(json_obj);
                }
            } catch (error: any) {
                setError(error.message);
            }
        }

        fetchData();

        return () => {
            fetchController.abort();
        };

    }, [url]);

    return {
        data,
        error
    };
};
