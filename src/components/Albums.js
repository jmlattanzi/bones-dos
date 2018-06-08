import React from 'react';
import styled from 'styled-components';

const AlbumContainer = styled.div`
    height: 300px;
    width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    overflow-y: scroll;
    padding-right: 17px;
    padding: 10px;
    box-sizing: content-box;
`;

const StyledInput = styled.input`
    background-color: black;
    color: white;
    border: 1px solid black;
    font-family: 'haxrcorp';
    font-size: 32px;
`

const albums = props => {
    return(
        <div style={{overflow: 'hidden'}}>
            <AlbumContainer>
                {props.albums.map(album => (
                    <div key={Math.floor(Math.random() * 5000)}><a href="">>> {album.title}</a></div>
                ))}
            </AlbumContainer>
            <div>>> <StyledInput type="text"/></div>
        </div>
    );
};

export default albums;