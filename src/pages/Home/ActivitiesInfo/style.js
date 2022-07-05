import styled from "styled-components";

export const Wrapper = styled.div`
margin-top: 0.5rem;
display: flex;
flex: 1;
flex-direction: row;
justify-content: flex-start;
.item {
    width: 18.75rem;
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    & a {
        /* margin-left: 0.5rem; */
        margin-right: 0.6rem; 
        width: 3rem;
        height: 3rem;
    }
    & a img {
        /* background: orange!important; */
        width: 2.5rem;
        height: 2.5rem;
    }
    & a span {
        margin-left: 0.2rem;
        text-align: center;
        /* font-size: 16px; */
    }
}
`