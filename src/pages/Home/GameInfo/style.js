import styled from "styled-components";

export const Wrapper = styled.div`
padding-bottom: .5rem;
border-bottom: 1px solid #ccc;
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

    .game-info {
        width: 16.75rem;
        margin-top: 0.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-around;
        & a {
            margin-top: 0.5rem
        }
        & a img {
            float: right;
            /* margin-top: 0.5rem; */
            width: 6rem;
            height: 4rem;
            border-radius: 0.5rem;
        }
        & a p {
            margin-top: 0.25rem;
            width: 10rem;
            /* height: 1.5rem; */
            font-size: 0.8rem;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        }
        & a .content {
            margin-top: 0.5rem;
            /* display: flex; */
            /* flex: 1; */
            /* flex-direction: row; */
            /* justify-content: space-between; */
        }
        & a div span {
            margin-right: 0.5rem;
        }
    }

`