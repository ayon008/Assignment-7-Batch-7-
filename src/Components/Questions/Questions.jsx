import React from 'react';

const Questions = () => {
    return (
        <div>
            <div>
                <h1>What are the differences between Props and State?</h1>
                <p><strong>Ans:</strong> The basic difference between Props and state  are
                    <ol type='1'>
                        <li>Props is a functional component passing data from parent to child where state manages internal component data</li>
                        <li>Props is unidirectional that means it can only pass data from parent to child component and it also immutable where state is mutable </li>
                    </ol>
                </p>
            </div>
            <div>
                <h1>How does useState works?</h1>
                <p><strong>Ans: </strong> useState is a react hook that manages internal data of components. in general, useEffect returns an array with a variable and a function. And the variable is declared. The function used to update the variable.</p>
            </div>
            <div>
                <h1>What are the uses of useEffect beside data loading?</h1>
                <p>Mainly the useState hook is used whether the state of an component has to be changed.</p>
            </div>
            <div>
                <h1>How does the react work?</h1>
                <p><strong>Ans: </strong>
                    React creates a virtual DOM in memory to update the browser's DOM. The virtual DOM will try to find the most efficient way to update the browser's DOM. Unlike browser DOM elements, React elements are simple objects and are cheap to create.
                </p>
            </div>
        </div>
    );
};

export default Questions;