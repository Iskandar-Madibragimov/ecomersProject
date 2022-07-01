import styled from "styled-components";

export const ProsWrapper = styled.div`
    background-color: #1f222f;
`

export const ProsContainer = styled.div`
display: flex;
    width: 90vw;
    margin: auto;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    background-color: #1f222f;
    color: white;
`

export const Pro = styled.div`
    padding: 40px;
    text-align: center;

    h5,p{
        margin: 8px 0;
    }

    img{
        fill: white;
    }
`
export const Line = styled.div`
    width: 1px;
    height: 50px;
    background-color: grey;
    margin-top: 50px;
`