import React from 'react'
import styled from 'styled-components'

const StyledUserContainer = styled.div `
grid-row-start: 1;
grid-column: 1/5;
padding: 2rem;
`

export default class User extends React.Component {

    render(){
        const { user } = this.props
    return(
        
        <StyledUserContainer>
            <section className="user-container">
            
            <div className="user-image-container">
                <img src={user.avatar_url} alt="user"></img>
            </div>
            <div className="user-info-container">
                <h2>Name: {user.name}</h2>
                <p>Bio: {user.bio}</p>
                <p>Location: {user.location ? user.location : 'unlisted'}</p>
                <p>Repos: {user.public_repos}</p>
                
                <p>Following: {user.following}</p>
                <p>Followers: {user.followers}</p>
                <a href={user.html_url}>View My Profile</a>
                {/* <div className="contributions-container">
                    <img src={`https://github.com/users/${user.login}/contributions`} alt="contributon graph"></img>
                </div> */}
            </div>
            </section>
        </StyledUserContainer>
    )}
}