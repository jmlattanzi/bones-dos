import React from 'react';
import { AlbumContainer, StyledInput } from '../styles/style'


const albums = props => {
    return(
        <div style={{overflow: 'hidden'}}>
            <AlbumContainer>
                {props.albums.map(album => (
                    <div key={Math.floor(Math.random() * 5000)}><a href={album.url}>>> {album.title}</a></div>
                ))}
            </AlbumContainer>
            <div>>> <StyledInput type="text"/></div>
        </div>
    );
};

export default albums;