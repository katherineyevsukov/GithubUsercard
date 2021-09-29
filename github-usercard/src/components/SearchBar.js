import React from "react";
import styled from 'styled-components';


const StyledSearchDiv = styled.div`
display: flex;
justify-content: center;
padding: 1em;

` 

export default class Searchbar extends React.Component{

    state = {
        username: ""
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
        
    }

  render() {
      
    return (
      <StyledSearchDiv>  
      <form onSubmit={(e) => this.props.handleSearchSubmit(e, this.state.username)}>
        <label>Search for another user:
        <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
        </label>
        <button type="submit">Search</button>
      </form>
      </StyledSearchDiv>
    );
  }
}
