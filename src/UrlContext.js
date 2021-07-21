import React, { createContext, useState } from 'react';

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
    const [theUrl, setTheUrl] = useState('http://localhost:3030/hp-characters');
    return (
        <UrlContext.Provider 
            value={{ 
                theUrl, 
                setTheUrl 
            }} 
        >
            { children }
        </UrlContext.Provider>
    )
}

