import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

function GetLoading () {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/loading', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error ({error})</div>}
            <div>{data.status}</div>
        </div>
    );
}

export default GetLoading;
