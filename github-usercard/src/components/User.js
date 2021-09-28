import React from 'react'
import styled from 'styled-components'

const StyledUserContainer = styled.div `
grid-row-start: 1;
grid-column: 1/5;
padding: 2rem;
`

export default class User extends React.Component {

    render(){
    return(
        <StyledUserContainer>
            <section className="user-container">
            
            <div className="user-image-container">
                <img></img>
            </div>
            <div className="user-info-container">
                <h2>Name</h2>
                <p>Bio:</p>
                <p>Location:</p>
                <p>Repos:</p>
                <p>URL:</p>
                <p>Following</p>
                <p>Followers:</p>
            </div>
            </section>
        </StyledUserContainer>
    )}
}