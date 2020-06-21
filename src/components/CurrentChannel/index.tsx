import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const CurrentChannel: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />
        
        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />
        
        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />
        
        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />

        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />
        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />

        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />

        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />
        

        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />

        <ChannelMessage
          author="MrDougz"
          date="16/12/2017"
          content="Today is a sunny day!"
        />
        <ChannelMessage
          author="Simple Bot"
          date="20/06/2020"
          content={
            <>
              <Mention>@MrDougz</Mention> are you ok?
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Send a message in current..."/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default CurrentChannel;