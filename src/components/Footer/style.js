import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 18.75rem;
    height: 2.5rem;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: #fff;
    .footer {
    margin-top: 0.5rem;
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    
    a {
        display: flex;
        flex-direction: column;
        &.active {
            /* color: #ae8232; */
            color: blue;
        }
        i{
            font-size: 1.5em;
        }
    }
}
`