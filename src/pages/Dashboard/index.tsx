import React from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();

  return (
    <Container>
      <Button onPress={singOut} title="sair" />
    </Container>
  );
};

export default Dashboard;
