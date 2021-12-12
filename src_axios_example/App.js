import React, {Component} from 'react'
import List from "./components/List";
import Search from "./components/Search";

// Function
// function App() {

//   return (
//     <div className="App">
//     </div>
//   );
// }
// export default App;

// Class
export default class App extends Component {
  // Initiate state of App
  state = {
    users:[],// Searched data
    isFirst: true, // Default display
    isLoading: false, // While API request is pending
    err: '', // When API request fails
  };

  // Update state of App
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="App">
       <Search updateAppState={this.updateAppState}/>
       <List {...this.state}/>
      </div>
    );
  }
}