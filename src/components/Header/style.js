import styled from 'styled-components'

export const HeaderWrapper = styled.div`
        width: 18.75rem;
        height: 2rem;
        line-height: 1.75rem;
    .nav-box {
        display: flex;
        flex: 1;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        background: #fff;
        & i {
        width: 0.75rem;
        font-size: 2em;
        }

        & .icon-right {
        font-size: 1.5rem;
        }

        a {
        position: relative;
        text-align: center;
        font-size: 0.75rem;
        color: #666;

        &.active {
            font-size: 1rem;
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

`