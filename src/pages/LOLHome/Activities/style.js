import styled from "styled-components";

export const Wrapper = styled.div`
/* height: 7.5rem; */
border-bottom: 1px solid rgb(245,245,245);
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
    color: rgb(210,210,210);
}
}
.lol-sale {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    & a img {
        width: 5.5rem;
        height: 3rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
    }
    & a .span2 {
        /* text-align: center; */
        margin-bottom: 0.5rem;
    }
    & a .icon-cart {
        font-size: 1rem;
        float: right;
        margin-right: 0.5rem;
    }
}

`