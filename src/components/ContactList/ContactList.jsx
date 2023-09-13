import { ContactInfo, ContactItem, ContactListContainer, DeleteButton } from "components/ContactList/ContactList.styed"


export const ContactList = ({contacts, deleteContact}) => (
    <ContactListContainer>
        {contacts.map(({ id, name, number }) => {
            return (
                <ContactItem key={id}>
                    <ContactInfo>
                        {name}:{number}
                    </ContactInfo>
                    <DeleteButton
                        type="button"
                        onClick={() => deleteContact(id)}
                    >
                        Delete contact
                    </DeleteButton>
                </ContactItem>
        )
        })}
    </ContactListContainer>
)