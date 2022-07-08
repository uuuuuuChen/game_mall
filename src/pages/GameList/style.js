import styled from "styled-components";

export const GameWrapper = styled.div`
    .game_name {
        display: block;
        width: 100%;
        height: 2.5rem;
        border-bottom: 1px solid rgb(206, 204, 204);
        font-size: 0.9rem;
        line-height: 2.5rem;
        text-indent: 0.5rem;
    }
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
        }
        .span2 {
            width: 2.5rem;
            text-align: center;
            /* padding: 0.5rem; */
            border: 1px solid #ccc;
            border-radius: 0.5rem;
            margin-right: 0.5rem;
            /* background: orange; */
        }
    }
`