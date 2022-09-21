import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    max-width: 872px;
    margin: 0 auto;
    padding-bottom: 10rem;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 4rem;

    h4{
       font-size: 1.125rem;
       font-weight: bold;
    }

    span{
       font-size: 0.875rem;
       color: ${props => props.theme["base-span"]};
    }
`
export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
`
export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input{
        flex:1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-text"]};
        padding: 1rem;
        border: 1px solid ${props => props.theme["base-border"]};

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`