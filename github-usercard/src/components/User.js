import React from "react";
import styled from "styled-components";

const StyledUserContainer = styled.div`
  grid-row-start: 1;
  grid-column: 1/6;
  border: 1px solid whitesmoke;
  

  h2 {
    font-size: 2.5rem;
    margin: 0.5em 0;
  }

  .user-container{
    padding: 2rem;
    
  }
  .user-info-container {
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .chart-container{
     
      grid-column: 1/6;
      padding: 1em;
  }
 
`;

export default class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
       
      <StyledUserContainer>
        <section className="user-container">
          <div className="user-image-container">
            <img src={user.avatar_url} alt="user"></img>
          </div>
          <div className="user-info-container">
            <h2>Name: {user.name}</h2>
            <p>Bio: {user.bio}</p>
            <p>Location: {user.location ? user.location : "unlisted"}</p>
            <p>Repos: {user.public_repos}</p>

            <p>Following: {user.following}</p>
            <p>Followers: {user.followers}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              See My Github
            </a>
            {/* <div className="contributions-container">
                    <img src={`https://github.com/users/${user.login}/contributions`} alt="contributon graph"></img>
                </div> */}
          </div>
          
        </section>
        <div className="chart-container">
       <img
         src={`https://ghchart.rshah.org/${user.login}`}
         alt="2016rshah's Github chart"
       />
     </div>
      </StyledUserContainer>
       
  
    );
  }
}
