import React from "react";
import styled from "styled-components";
import User from "./components/User";
import fetchGithubUsers from "./services/fetchGithubInfo";
import SearchBar from "./components/SearchBar";
import Followers from "./components/Followers"
import githublogo from "../src/githublogo.png"

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content max-content auto;
  gap: 1em;
  /* grid-auto-rows: minmax(100px, auto); */
  margin: 1em;

  .right-side-container{
    grid-column: 6 / 12;
  }


  h1 {
    font-size: 6rem;
    text-align: center;
    padding: 0;
  }
  
  header img{
    height: 5vh;
  }
`;

class App extends React.Component {
  state = {
    user: {},
    followers: [],
  };

  componentDidMount() {
    fetchGithubUsers("katherineyevsukov").then((res) => {
      this.setState({
        ...this.state,
        user: res[0],
        followers: res[1],
      });
    });
  }

  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      return console.log('change', this.state);
    }
  }

  handleSearchSubmit = (e, username) => {
    e.preventDefault()
    fetchGithubUsers(username).then((res) => {
      this.setState({
        ...this.state,
        user: res[0],
        followers: res[1]
      })
    })
  }

  render() {
    return (
      <StyledApp>
        <div className="right-side-container">
        <header className="App-header">
          <h1>Github Profile <span><img src={githublogo} alt="github logo"></img></span></h1>
          
          <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
        </header>
        <Followers followers={this.state.followers} handleSearchSubmit={this.handleSearchSubmit}/>
        </div>
        <User user={this.state.user} />
        
      </StyledApp>
    );
  }
}

export default App;
