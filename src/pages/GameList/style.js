import styled from "styled-components";

export const GameWrapper = styled.div`
    height: 100vh;
    overflow: scroll;
    overflow-y: auto;
    h2 {

        display: inline-flex;
        margin-left: 0.5rem;
        margin-right: 0.2rem;
    }
    .icon-right {
        margin-left: 0.5rem;
        font-size: 1rem;
        font-weight: 700;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .span1 {
            margin-left: -4rem;
            font-size: 0.5rem;
        }
        .span2 {
            width: 2.5rem;
            text-align: center;
            /* padding: 0.5rem; */
            border: 1px solid rgb(245,245,245);
            border-radius: 0.5rem;
            margin-right: 0.5rem;
            /* background: rgb(245,245,245); */
            &.active {
                border-width:thin;
                color: #65A5FF;
                border: 1px solid #65A5FF;
                border-radius: 0.5rem;
            }
            
        }
    }
    .search {
        margin-bottom: 0.5rem;
        .search1 {
        margin-left: 0.5rem;
        display: inline-block;
        width: 85%;
        }
    }
    .list {
        margin-left: 0.3rem;
        /* width: 100%; */
        li {
            margin: 0 0.5rem;
            margin-bottom: 0.4rem;
            display: inline-block;
            text-align: center;
            /* width: 4.5rem; */
            height: 1.5rem;
            margin-right: 0.5rem;
            font-size: 0.4rem!important;
            line-height: 1rem;
            background: rgb(245,245,245);
            border: 0.25rem solid rgb(245,245,245);
            border-radius: 0.5rem;
            position: relative;
            & i {
                position: absolute;
                top: -0.3rem;
                right: -0.3rem;
            }
        }
    }
`



export const Container = styled.li`
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #fff;
    transform-origin: right bottom;
    /* CSSTransition 过渡类型给children */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active,&.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .list {
        /* display: flex;
        flex-direction: row; */
        /* justify-content: space-around; */
        img {
            /* width: 100%; */
            display: inline-block;
            height: 50px;
            /* border-bottom: 1px solid rgb(206, 204, 204); */
            font-size: 18px;
            line-height: 50px;
            text-indent: 10px;
        }
        span {
            margin-left: 0.5rem;
            line-height: 2.5rem;
            font-size: 0.6rem;
        }
        & .icon {
            line-height: 2.5rem;
            float: right;
            color: rgb(255,207,47);
            height: 0.6rem;
            /* background-color: black; */
            /* border-radius: 50%; */
        }
}
`