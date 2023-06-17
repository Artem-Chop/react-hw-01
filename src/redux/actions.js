import { nanoid } from 'nanoid';
import { types } from './types';

export const addContacts = ({ Name, Number }) => ({
  type: types.ADD_CONTACTS,
  payload: { id: nanoid(), name: Name, number: Number },
});
