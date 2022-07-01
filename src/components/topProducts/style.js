import styled from "styled-components";

export const Parent = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

.div1 { grid-area: 1 / 1 / 3 / 5; }
.div2 { grid-area: 3 / 1 / 4 / 3; }
.div3 { grid-area: 3 / 3 / 4 / 5; }
.div4 { grid-area: 1 / 5 / 2 / 7; }
.div5 { grid-area: 2 / 5 / 3 / 7; }
.div6 { grid-area: 3 / 5 / 4 / 7; }
`