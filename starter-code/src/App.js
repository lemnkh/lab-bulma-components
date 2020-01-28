import React from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />

                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </div>
            
        );
    }
};

export default App;