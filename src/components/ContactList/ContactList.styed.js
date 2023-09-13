import styled from 'styled-components';

export const ContactListContainer = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ContactItem = styled.li`
    margin-bottom: 10px;
`;

export const ContactInfo = styled.p`
    font-size: 18px;
    margin: 0;
`;

export const DeleteButton = styled.button`
    background-color: #ff5733;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #ff451d;
    }
`;
