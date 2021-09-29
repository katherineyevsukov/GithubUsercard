import React from 'react';
import styled from 'styled-components';

const StyledFollowerContainer = styled.div`
display: flex;
padding: 1em;

img{
    max-height: 10vh;
    margin-right: 1em;
}


.user-info-container{
    font-size: 2rem;
}
`

export default class Follower extends React.Component{

    render(){
        const { follower } = this.props
        return(
            
            <StyledFollowerContainer>
            <div className="follower-image-container">
                <img src={follower.avatar_url} alt="follower"></img>
            </div>
            <div className="user-info-container">
                <h4>{follower.login}</h4>
                <button onClick={(e) => this.props.handleSearchSubmit(e, follower.login)}>View My Profile</button>

            </div>
            </StyledFollowerContainer>
        )
    }
}