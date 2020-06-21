import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelName: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat - general</Title>

      <Separator></Separator>

      <Description>Read the rules and have fun :)</Description>
    </Container>
  );
}

export default ChannelName;