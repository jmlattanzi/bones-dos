import styled from 'styled-components';

// album styles
export const AlbumContainer = styled.div`
    height: 300px;
    width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    overflow-y: scroll;
    padding-right: 17px;
    padding: 10px;
    box-sizing: content-box;
`;

export const StyledInput = styled.input`
    background-color: black;
    color: white;
    border: 1px solid black;
    font-family: 'haxrcorp';
    font-size: 32px;
`;

// container style
export const Screen = styled.div`
    height: 480px;
    width: 640px;
    border: 3px solid white;
    border-radius: 5px;
    margin: 25px auto;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    overflow: auto;
`;