import React from 'react';
import styled from 'styled-components';
import User from './components/User'
import fetchGithubUsers from './services/fetchGithubInfo'

const StyledApp = styled.div `
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1em;
  /* grid-auto-rows: minmax(100px, auto); */
  margin: 1em;

  header{
    grid-column: 6 / 12;
  }

  h1 {
    font-size: 6rem;
    text-align: center;
    padding: 0;
  }
`

class App extends React.Component{

  state = {
    user: {},
    followers: []
  }

  componentDidMount(){
    fetchGithubUsers('katherineyevsukov')
    .then((res) => 
{
 
    this.setState({
      user: res[0],
      followers: res[1]
    })

  })
}

  componentDidUpdate(prevState){
    if(this.state !== prevState) {return console.log(this.state) }
  }

  render(){
  return (
    <StyledApp>
      <header className="App-header">
        <h1>Github Profile
        </h1>
      </header>
      <User />
    </StyledApp>
  )
  };
}

export default App;
