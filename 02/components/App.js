
import React from 'react';
import Box from './Box';
import TextContext from './context'

class App extends React.Component {

 state = {
     text: 'React HelloWorld Modern!',
 };

 render() {
     const { text } = this.state;
     const { Provider } = TextContext;
       
     return  (
         <Provider value = {text}>
             <Box text = {text} />;
         </Provider>
     )
 }
}

export default App;
