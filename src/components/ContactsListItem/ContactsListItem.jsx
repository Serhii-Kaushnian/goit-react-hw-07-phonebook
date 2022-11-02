import React from 'react';
import { useDeleteContactMutation } from 'redux/slice';
import {
  Button,
  ItemContainer,
  ItemContainerSpan,
  Item,
} from './ContactsListItem.styled';
import { SpinnerCircularFixed } from 'spinners-react';

export default function ContactsListItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteContacts = id => {
    deleteContact(id);
  };
  return (
    <>
      {contact && (
        <Item>
          <ItemContainer>
            {contact.name} :
            <ItemContainerSpan>{contact.phone}</ItemContainerSpan>
            <Button
              disabled={isDeleting}
              id={contact.id}
              onClick={() => deleteContacts(contact.id)}
              type="button"
            >
              {isDeleting && (
                <SpinnerCircularFixed size={12} style={{ paddingRight: 5 }} />
              )}
              Delete Contact
            </Button>
          </ItemContainer>
        </Item>
      )}
    </>
  );
}
