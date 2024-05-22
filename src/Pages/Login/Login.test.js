import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from '../UserPart/UserProfile/UserProfile';

describe('UserProfile component', () => {
  test('renders user profile form', () => {
    render(<UserProfile />);

    expect(screen.getByText('User Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email/Mobile:')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('clicking save button calls handleSave function', () => {
    const { getByText } = render(<UserProfile />);
    const saveButton = getByText('Save');
    const consoleSpy = jest.spyOn(console, 'log');

    fireEvent.click(saveButton);
    expect(consoleSpy).toHaveBeenCalledWith('Changes saved');

    consoleSpy.mockRestore();
  });
});
