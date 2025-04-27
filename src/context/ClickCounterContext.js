import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ClickCounterContext = createContext();

export const ClickCounterProvider = ({ children }) => {
    const [clickCount, setClickCount] = useState(() => {
        // Läs från localStorage när sidan laddas
        const savedCount = localStorage.getItem("clickCount");
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    useEffect(() => {
        const handleClick = () => {
            setClickCount(prev => prev + 1);
        };
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    // Varje gång clickCount ändras -> spara i localStorage
    useEffect(() => {
        localStorage.setItem("clickCount", clickCount);
    }, [clickCount]);

    return (
        <ClickCounterContext.Provider value={{ clickCount, setClickCount }}>
            {children}
        </ClickCounterContext.Provider>
    );
};

ClickCounterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
