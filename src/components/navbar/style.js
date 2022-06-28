import styled from "styled-components";

export const NavbarWrapper = styled.div`
    display: block;
    width: 90vw;
    margin: auto;
    border: 1px solid black;

    `

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    /* border: 1px solid black; */

    ul{
        display: flex;
        list-style-type: none;

        li{
            padding: 0 15px;

        }
    }
`

export const Middle = styled.div`
    display: flex;
    width: 90vw;
    margin: auto;
    justify-content: space-between;

    img{
        width: 80px;
        height: 50px;
    }
`
export const Search = styled.div`
    display: flex;
    border: 1px solid black;
    
    select,input{
        height: 45px;
        border: none;
    }

    input{
        width: 300px;
        padding: 0 10px;
        outline: none;
    }

    select{
        border-right: 1px solid black;
        padding: 0 10px;
    }

    button{
        border: none;
        width: 50px !important;
        background-color: #95ae00;
        cursor: pointer;
    }
`

export const Options = styled.div`
    display: flex;

`

export const Option = styled.div`
    display: block;
    transform: translateX(-40px);
    margin: 0 10px;
`

export const Bottom = styled.div`
    

    ul{
        list-style-type: none;
        display: flex;

        li{

        }
    }
`