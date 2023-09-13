import { Component } from "react";
import { Button, Form, Input } from "./ContactForm.styled";

export class ContactForm extends Component {
    state = { name: '', number: '' }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    }

    render() { 
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <Button type="submit">Add contact</Button>
            </Form>
        );
    }
}

export default ContactForm;