import styled from "styled-components";

export const PostCardContainer = styled.div`
    background: ${props => props.theme["base-post"]};
    padding: 2.5rem 2rem;
    border-radius: 10px;
    
    height: 250px;
    border: 2px solid ${props => props.theme["base-post"]};

    span {
        color:${props => props.theme["base-text"]};
    }
    &:hover{
        border: 2px solid ${props => props.theme["base-label"]};
        cursor: pointer;
    }
   
`
export const PostHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;


    h2 {
        font-size: 1.25rem;
        color:${props => props.theme["base-title"]};
        margin-right: 1.5rem;
    }

    span {
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
        white-space: nowrap;
    }
`

export const PostContent = styled.div`
    /* overflow:hidden; 
    white-space:nowrap; 
    text-overflow:ellipsis; 
    width: auto; */
`