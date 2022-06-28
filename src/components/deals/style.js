import styled from "styled-components";

export const DealsWrapper = styled.div`
    width: 90vw;
    display: flex;
    margin: auto;
    justify-content: space-between;
`

export const DealsCard = styled.div`
    position: relative;
    color: white;

    p{
        position: absolute;
        font-size: 20px;
        left: 30px;
    }

    h2{
        position: absolute;
        left: 30px;
        bottom: 90px;
        width: 180px;
    }

    .when{
        bottom: 190px;
    }
    .buy{
        bottom: 40px;
        cursor: pointer;
        transition: .5s;

        :hover + div{
            background-color: #95ae00;
        }
    }
    
    img{
        width: 700px;
        height: 250px;
    }
    
    div{
        transition: .5s;
        position: absolute;
        width: 150px;
        height: 1px;
        background-color: white;
        left: 30px;
        bottom: 35px;
    }
    `