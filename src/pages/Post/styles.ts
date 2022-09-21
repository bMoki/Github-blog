import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    max-width: 872px;
    margin: 0 auto;
    padding-bottom: 10rem;
    margin: -5rem auto 0 auto;
   
`
export const InfoContainer = styled.div`
    background:${props => props.theme["base-profile"]};
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    margin: -6rem auto 0 auto;
    padding: 2rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`
export const Info = styled.div`
    color: ${props => props.theme["base-title"]};
    padding-bottom: 0.5rem;
    font-size:1.5rem;
    font-weight: bold;
`

export const InfoFooter = styled.div`
    display: flex;
    gap: 2rem;
    
    svg{
        color: ${props => props.theme["base-label"]};
    }

    span {
        color: ${props => props.theme["base-span"]};
    }

    div{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    
`
export const Link = styled.div`
    display: inline-block;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid ${props => props.theme.blue};
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.blue};
        font-weight: bold;
        font-size: 0.75rem;
    }
    
`
export const LinkRight = styled(Link)`
    svg {
        margin-left: 0.5rem;
    }
`
export const LinkLeft = styled(Link)`
    svg {
        margin-right: 0.5rem;
    }
`
export const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Content = styled.div`
    padding: 2.5rem;
    color: ${props => props.theme["base-text"]};
    white-space: pre-wrap;
    
    img {
        max-width: 100%;
        max-height: 100%;
    }
`