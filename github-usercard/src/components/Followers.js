import React from "react";
import styled from "styled-components";
import Follower from "./Follower";

const FollowersContainer = styled.section`
  grid-column: 6 / 12;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: max-content;
  margin: 0 auto;
  height: 80vh;
  padding: 2em 4rem;
  overflow-y: scroll;
  border: 2px solid white;
  h3 {
    font-size: 4rem;
    font-style: oblique;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

export default class Followers extends React.Component {
  render() {
    return (
      <FollowersContainer>
        <h3>Followers</h3>
        {this.props.followers.map((fol) => {
          return (
            <Follower
              key={fol.id}
              follower={fol}
              handleSearchSubmit={this.props.handleSearchSubmit}
            />
          );
        })}
      </FollowersContainer>
    );
  }
}
