import styled from 'styled-components'

export const Wrapper = styled.div`
width: 18.75rem;
flex: 1;
overflow-y: auto;
overflow-x: hidden;
/* overflow-y属性指定如果它溢出了元素的内容区是否剪辑顶部/底部边缘内容。
如果溢出框，则应该提供滚动机制。 */
.cart {
    position: fixed;
    bottom: 3rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    border: 1px solid rgb(245,245,245);
    background-color: #fff;
    z-index: 9999;
    .icon {
    position: relative;
    font-size: 1rem;
    top: 0.3rem;
    margin-left: 0.6rem;
    }
    .number {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        text-align: center;
        font-size: 0.6rem;
        background-color: red;
        color: white;
        border: 1px solid white;
        border-radius: 0.4rem;
        position: absolute;
        top: 0.2rem;
        right: 0.1rem;
    }
}

`