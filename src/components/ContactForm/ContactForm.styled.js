import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

