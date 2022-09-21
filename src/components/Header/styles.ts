import styled from "styled-components";
import cover from "../../assets/cover.svg";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 3.5rem;
    padding-bottom: 9rem;
    justify-content: center;
    background: ${props => props.theme["base-profile"]};
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-size:cover ;
`