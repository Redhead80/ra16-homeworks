
import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

function GetData () {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/data', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            <div>{data.status}</div>
        </div>
    );
}

export default GetData;
