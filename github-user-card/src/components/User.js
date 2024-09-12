import React, { Component } from "react";
// import axios from "axios";
import Details from "./Details";

class User extends Component {
  //   componentDidMount() {
  //     console.log("User: ", this.props.userInfo);
  //     const userDetails = this.props.userInfo;
  //   }
  //   state = {
  //     user: [],
  //   };

  //   componentDidMount() {
  //     axios
  //       .get("https://api.github.com/users/omaddoc")
  //       .then((res) => {
  //         this.setState({
  //           user: res.data,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  render() {
    // console.log("Render User: ", this.state.user);
    // if (!this.props.userInfo) return <p>Loading...</p>;
    const { avatar_url, name, login } = this.props.userInfo;
    return (
      <div>
        {/* <h2>Render Card Details</h2> */}
        <img
          style={{ width: "150px", borderRadius: "50%" }}
          src={avatar_url}
          alt={name}
        />
        <p>{login}</p>
      </div>
    );
  }
}

export default User;
