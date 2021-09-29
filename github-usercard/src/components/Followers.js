import React from 'react';
import styled from 'styled-components';
import Follower from './Follower'

const FollowersContainer = styled.section `
    grid-column: 6 / 12;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: max-content;
    margin: 0 auto;
    h3{
        font-size: 4rem;
        font-style: oblique;
    }
    
`

export default class Followers extends React.Component{

    render(){
        return(
            <FollowersContainer>
                <h3>Followers</h3>
               {this.props.followers.map(fol => {
                  return <Follower key={fol.id} follower={fol} handleSearchSubmit={this.props.handleSearchSubmit}/>
               })}
            </FollowersContainer>
        )
    }
}