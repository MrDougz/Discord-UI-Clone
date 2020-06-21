import React from 'react';

import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channels</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='general-chat'/>
      <ChannelButton channelName='music-chat'/>
      <ChannelButton channelName="games-chat"/>
      <ChannelButton channelName="sugestions"/>
      <ChannelButton channelName="bot-commands" />
    </Container>
  );
}

export default ChannelList;