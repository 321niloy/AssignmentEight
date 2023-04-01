import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>1 Whats the different of props and State??</h1>
            <p>Answer: Props sends data one components to Other components and <br />
               state is a built-in React object that is used to contain data or information about the component
            </p>

            <h1>2 What is Usestate in React???</h1>
            <p>UseState is a React hook,its allow to add state to a functional Component</p>

            <h1>3 WHAT does work useEffect without data load???</h1>
            <p>
                Answer:Connecting to an external system
                
                Wrapping Effects in custom Hooks
                Controlling a non-React widget
               
                Specifying reactive dependencies
                Updating state based on previous state from an Effect
                Removing unnecessary object dependencies
                R emoving unnecessary function dependencies
                Reading the latest props and state from an Effect
                Displaying different content on the server and the client etc....


            </p>
            
        </div>
    );
};

export default Question;