import React from "react";
import styled from "styled-components";
import User from "./components/User";
import fetchGithubUsers from "./services/fetchGithubInfo";
import SearchBar from "./components/SearchBar";

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1em;
  /* grid-auto-rows: minmax(100px, auto); */
  margin: 1em;

  header {
    grid-column: 6 / 12;
  }

  h1 {
    font-size: 7rem;
    text-align: center;
    padding: 0;
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
        <header className="App-header">
          <h1>Github Profile</h1>
          <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
        </header>
        <User />
      </StyledApp>
    );
  }
}

export default App;
