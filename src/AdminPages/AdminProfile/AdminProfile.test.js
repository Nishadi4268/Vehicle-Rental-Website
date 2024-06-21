import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AdminProfile from './AdminProfile'; 

// Mock the Link component
jest.mock('react-router-dom', () => ({
  Link: jest.fn().mockReturnValue(null),
}));

// Mock createObjectURL function
global.URL.createObjectURL = jest.fn();

// Rendering test
test('renders AdminProfile component', () => {
  const { getByText, getByLabelText } = render(<AdminProfile />);
  
  expect(getByText('Profile Info')).toBeInTheDocument();
});

// Photo upload test
test('uploading photo', () => {
  const { getByLabelText } = render(<AdminProfile />);
  
  const file = new File(['photo'], 'photo.png', { type: 'image/png' });
  const input = getByLabelText('Add Photo');
  
  fireEvent.change(input, { target: { files: [file] } });
  
  expect(input.files[0]).toStrictEqual(file);
});

// Edit profile button test 
test('clicking edit profile button', () => {
  const { getByText } = render(<AdminProfile />);
  
  const editButton = getByText('Edit Profile');
  fireEvent.click(editButton);
});

// User details input test
test('entering user details', () => {
  const { getByLabelText } = render(<AdminProfile />);
  
  const firstNameInput = getByLabelText('First Name:');
  const lastNameInput = getByLabelText('Last Name:');
  const emailInput = getByLabelText('Email/Contact No:');
  
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  
  expect(firstNameInput.value).toBe('John');
  expect(lastNameInput.value).toBe('Doe');
  expect(emailInput.value).toBe('john@example.com');
});
