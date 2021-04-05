import React from 'react';

import { render } from '@testing-library/react-native';
import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('Sign in Page', () => {
  it('should contains email/passwords inputs', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
  });
});
