import React from 'react';
import './background.css';

const Symbols = () => {
    const quantity = 15;
    const symbolsArray = ['C++', 'JS', 'Py', 'PHP', '{}', ';', '&&', '</>', 'HTML'];
    const symbols = Array.from({ length: quantity }).map((_, i) => symbolsArray[i % symbolsArray.length]);

    return (
        <>
            {symbols.map((symbol, i) => (
                <div key={i} className="symbol">{symbol}</div>
            ))}
        </>
    );
};

export default Symbols;
