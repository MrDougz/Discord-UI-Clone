import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelName from '../ChannelName';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import CurrentChannel from '../CurrentChannel';

const Layouts: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelName />
      <ChannelList />
      <UserInfo />
      <CurrentChannel />
      <UserList />
    </Grid>
  );
}

export default Layouts;