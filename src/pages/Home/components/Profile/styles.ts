import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    background:${props => props.theme["base-profile"]};
    /* margin: -6rem auto 0 auto; */
    padding: 2.5rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    img {
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
    padding-left: 1.5rem; 
    gap: 1rem;
`
export const Info = styled.div`
    color: ${props => props.theme["base-text"]};
    padding-bottom: 0.5rem;
`

export const InfoFooter = styled.div`
    display: flex;
    gap: 1.5rem;
    
    svg{
        color: ${props => props.theme["base-label"]};
    }

    span {
        color: ${props => props.theme["base-subtitle"]};
    }

    div{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    
`

export const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    

    span {
        color: ${props => props.theme["base-title"]};
        font-weight: bold;
        font-size: 1.5rem;
    }

    div {
        display: inline-block;
        
        a {
            text-decoration: none;
            color: ${props => props.theme.blue};
            font-weight: bold;
            font-size: 0.75rem;
        svg {
            margin-left: 0.5rem;
        }

        &:hover{
            border-bottom: 2px solid ${props => props.theme.blue};
        }
    }
    }
   
`
