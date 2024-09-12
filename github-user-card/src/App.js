// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";

import User from "./components/User";
import Followers from "./components/Followers";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    userInfo: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/omaddoc")
      .then((res) => {
        console.log(res);
        this.setState({
          userInfo: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/omaddoc/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users/omaddoc/followers")
  //     .then((res) => {
  //       this.setState({
  //         followers: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User: {this.state.userInfo.name}</h1>
          <User userInfo={this.state.userInfo} />
          <Followers followers={this.state.followers} />
        </header>
      </div>
    );
  }
}

export default App;
