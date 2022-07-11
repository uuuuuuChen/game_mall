import styled from 'styled-components'

export const Wrapper = styled.div`
.container {
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }
  
  .side {
    flex: none;
    border-right: 1px solid rgb(245,245,245);
  }
  
  .main {
    flex: auto;
  }
  
  
  .content {
    display: none;
    /* height: 100%; */
    /* justify-content: center; */
    margin-left: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    color: #cccccc; 
    overflow-y: hidden;
    &.active {
      display: flex;
    }
    & .game-list {
        /* height: 6rem; */
        display: flex;
        flex-direction: column; 
        flex-wrap: wrap;
      & img {
        flex:1;
        margin-left: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 4rem;
        height: 4rem;
      }
      & span {
        font-size: 0.4rem;
        margin-left: 0.3rem;
        color: #666;
        width: 4rem;
        /* word-wrap:break-word; */
        /* white-space: normal; */
        height: 2rem;
        text-align: center;
      }
    }
  }


`