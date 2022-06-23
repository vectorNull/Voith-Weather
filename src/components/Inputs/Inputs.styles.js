import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

export const SearchAndLocation = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;


`

export const Input = styled.input`
    font-size: large;
    padding: 8px;
    margin-right: 8px;
    font-weight: 400;
    width: 75%;
    text-transform: capitalize;

    ::placeholder {
        text-transform: lowercase;
    }

    :focus {
        outline: none;
    }
`

export const FarenheitAndCelciusDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 25%;
    justify-content: space-around;
    align-items: center;
`

export const TempButtons = styled.button`
    font-size: large;
    color: white;
`