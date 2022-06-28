import styled from "styled-components";

export const FooterWrapper = styled.div`
    background-color: #1f222f;

`

export const Top = styled.div`
    display: flex;
    width: 90vw;
    margin: auto;
    justify-content: space-between;
    padding: 50PX 0;
    border-top: 1px solid #9ea4b4;
    
    h4{
        color: white;
    }
    p{
        margin: 20px 0;
        color: #9ea4b4;
    }
`

export const About = styled.div`
    
`
export const Help = styled.div`
    display: flex;
    align-items: center;

    img{
        height: 52px;
    }
`
export const HelpInfo = styled.div`
    display: block;
    margin-left: 10px;
    
    p{
        margin-bottom: 0;
    }
    h2{
        color: #95ae00;
    }
`
export const Company = styled.div`
    p{
        transition: .5s;
        cursor: pointer;

        :hover{
            color: #95ae00;
            transform: translateX(10px);
        }
    }
`
export const Category = styled.div`
    p{
        transition: .5s;
        cursor: pointer;

        :hover{
            color: #95ae00;
            transform: translateX(10px);
        }
    }
`
export const Support = styled.div`
    p{
        transition: .5s;
        cursor: pointer;

        :hover{
            color: #95ae00;
            transform: translateX(10px);
        }
    }
`
export const App = styled.div`
    p{
        transition: .5s;
        cursor: pointer;

        :hover{
            color: #95ae00;
            transform: translateX(10px);
        }
    }

    img{
        margin-right: 10px;
    }
    span{
        color: #95ae00;

    }
`
export const Bottom = styled.div`
    padding: 50PX 0;
    display: block;
    border-top: 1px solid #9ea4b4;


    ul{
        display: flex;
        list-style: none;
        margin: auto;
        width: fit-content;

        li{
            color:#9ea4b4;
            padding: 0 25px;
        }

        .border{
            width: 1px;
            height: 15px;
            border: 1px solid #9ea4b4;
        }
    }

    p{
        width: fit-content;
        margin: auto;
        color:#9ea4b4;


        span{
            color: #95ae00;

        }
    }
`

export const ImgWrapper = styled.div`
    width: fit-content;
    margin: auto;
    padding: 30px 0;
`
