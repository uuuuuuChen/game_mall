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