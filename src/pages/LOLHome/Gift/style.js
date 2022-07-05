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

    .gift-info {
        width: 16.75rem;
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
            float: left;
            margin-right: 0.5rem;
            width: 2rem;
            height: 2rem;
            border-radius: 0.5rem;
        }
        & a p {
            margin-top: 0.2rem;
        }
        & a span {
            float: right;
            width: 2rem;
            height: 1rem;
            text-align: center;
            border: 1px solid orange;
            background: orange;
            border-radius: 0.5rem;
        }
    }

`