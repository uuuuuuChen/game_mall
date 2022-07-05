import styled from "styled-components";

export const Wrapper = styled.div`
/* height: 7.5rem; */
margin-bottom: 3rem;
.title {
margin-top: 0.5rem;
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

.sale {
    margin-top: 0.5rem;
    margin-left: 1rem;
    /* padding-right: 1rem; */
    display: flex;
    flex: 2;
    flex-direction: row;
    justify-content: space-around;
    & .swiper-slide {
        width: 12rem!important;
        height: 5rem;
        border: 1px solid #ccc;
        margin-right: 0.5rem;
  
    a {
        margin-right: 0.5rem;
    }
     a div {
        margin-left: 0.5rem;
    }
     a div .icon-right {
        float: right;
        clear: both;
    }
     a img {
        float: left;
        margin-left: 0.5rem;
        width: 6rem;
        height: 4rem;
        border-radius: 0.5rem;
        clear: both;
    }
     a span {
        margin-left: 0.3rem;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        /* overflow: hidden; */
        text-align: center;
    }
}
}
.bottom {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
`