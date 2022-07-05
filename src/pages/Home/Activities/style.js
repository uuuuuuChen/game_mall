import styled from "styled-components";

export const Wrapper = styled.div`
/* height: 7.5rem; */

border-bottom: 1px solid #ccc;
.title {
margin-top: 1rem;
margin-left: 1rem;
margin-right: 1rem;
display: flex;
flex: 1;
text-align: center;
flex-direction: row;
/* justify-content: center; */
justify-content: space-between;
.icon-right {
    width: 0.5rem;
    float: right;
}
}
.activity {
    padding-top: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 0.5rem;
    & a img {
        width: 8rem;
        height: 4rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
    }
    & a span {
        text-align: center;
    }
}

`