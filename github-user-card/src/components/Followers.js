import React, { Component } from "react";
// import axios from "axios";

class Followers extends Component {
  //   state = {
  //     followers: [],
  //   };

  //   componentDidMount() {
  //     axios
  //       .get("https://api.github.com/users/omaddoc/followers")
  //       .then((res) => {
  //         this.setState({
  //           followers: res.data,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  render() {
    const { followers } = this.props;
    // I could also put if followers.length === 0 and it would give me the same affect
    if (followers === []) return <p>Loading Followers...</p>;
    return (
      <div className="followers-wrapper">
        {/* <h4>Followers:</h4> */}
        {followers.map((follower) => (
          <div key={follower.id} className="follower-card">
            <img
              style={{ width: "80px", borderRadius: "50%" }}
              src={follower.avatar_url}
              alt={follower.login}
            />
            <h4>{follower.login}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
