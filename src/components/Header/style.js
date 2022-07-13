import styled from 'styled-components'

export const HeaderWrapper = styled.div`
        /* width: 18.75rem; */
        /* height: 2rem; */
        line-height: 1.75rem;
    .nav-box {
        display: flex;
        border-bottom: 1px solid rgb(245,245,245);
        background: #fff;
        & .sale {
        width: 14.25rem!important;
        height: 2rem;
        display: flex;
        flex-wrap: nowrap;
        & .swiper-slide{
            width: 5rem!important;
            display: flex;
            /* flex: 1; */
            flex-direction: row;
            & a {
            width: 4rem;
            height: 2rem;
            /* margin-left: 0.5rem; */
            /* margin-right: 1rem; */
            /* display: inline-block; */
            position: relative;
            text-align: center;
            font-size: 0.65rem;
            /* line-height: 0.65rem; */
            color: #666;

            &.active {
                font-size: 0.7rem;
                font-weight: 700;
                color:#333;
            }

            &.active::after
            {
                content: "";
                background-color: blue;
                width: 1rem;
                height: 0.1rem;
                font-size: 1.5rem;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
            }      
        }
        }
        }
        & i {
        margin-left: 0.5rem;
        width: 0.5rem;
        font-size: 1.5rem;
        }
        & .icon-right {
        margin-right: 0.5rem;
        width: 0.5rem;
        font-size: 1.5rem;
        }

        
}

`