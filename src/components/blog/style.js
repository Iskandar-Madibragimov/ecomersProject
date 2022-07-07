import styled from "styled-components";

export const FlashWrapper = styled.div`
    padding: 60px 0;
`

export const Top = styled.div`
display: flex;
width: 90vw;
margin: auto;
justify-content: space-evenly;
margin-bottom: 20px;

h1{
  color: #09432b;
}

.buttons{
  width: 100px;
  justify-content: space-between;
}

button{
  margin: 0 2px;
  border-radius: 50%;
  border: 1px solid #dde3e9;
  padding: 4px;
  cursor: pointer;

}

`
export const Line = styled.div`
  width: 900px;
  height: 1px;
  background-color: #dde3e9;
  margin-top: 16px;
`


export const Product = styled.div`
  width: 350px;
  height: 400px;
  border: 10px solid transparent;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  padding: 10px;
  p {
    margin: 10px 0;
  }

  .title {
    font-size: 20px;
    color: #09432b;
    font-weight: 500;
    display: block;
    overflow: hidden;
    line-height: 25px;
  }
  .about {
    font-size: 12px;
    color: #95ae00;
    text-transform: uppercase;
    font-weight: 500;
  }
  .desc {
    line-height: 25px;
    font-size: 14px;
    margin-bottom: 0;
    width: 330px;
  }
  .date {
    font-size: 12px;
    font-weight: 500;
    color: #95ae00;
    display: inline-block;
    text-transform: uppercase;
  }
`;
