import styled from "styled-components";

export const Wrapper = styled.div`
margin-top: 0.5rem;
.item {
    & .swiper-slide {
        width: 18.75rem; 
        display: flex;
        /* flex: 1; */
        flex-direction: row;
        /* justify-content: space-around; */
        /* margin-right: 1.5rem;  */
        /* width: 3rem!important; */
        height: 3.5rem!important;
    }
    & .swiper-slide a {
        /* margin-left: 0.5rem; */
        margin-right: 0.2rem;
        margin-left: 1rem;
    }
    & a img {
        width: 2.5rem;
        height: 2.5rem;
    }
    & a span {
        margin-left: 0.1rem;
        text-align: center;
        /* font-size: 16px; */
    }
}
.swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: orange;
    border-radius: 0.5rem;
    left: 0;
    top: 0;
}
.swiper-container-horizontal>.swiper-scrollbar {
    position: absolute;
    left: 45%;
    bottom: 0;
    z-index: 50;
    height: 0.25rem;
    width: 3rem;

}

.swiper-scrollbar {
    border-radius: 0.5rem;
    /* position: relative; */
    touch-action: none;
    -ms-touch-action: none;
    /* background: orange; */
}

`