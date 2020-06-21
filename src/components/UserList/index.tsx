import React from 'react';

import { Container, User, Avatar, Role } from './styles';

interface UserProps{
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      { isBot && <span className="bot">BOT</span> }
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Available - 1</Role>
      <UserRow nickname="MrDougz" />
      <Role>Offline - 12</Role>
      <UserRow nickname="Other Person" />
      <UserRow nickname="Other Bot" isBot />
      <UserRow nickname="Other Person" />
      <UserRow nickname="A Person with a Long Name" />
      <UserRow nickname="Other Person" />
      <UserRow nickname="Other Person" />
      <UserRow nickname="Other Bot" isBot />
      <UserRow nickname="Other Person" />
      <UserRow nickname="Other Person" />
      <UserRow nickname="Other Person" />
      <UserRow nickname="A Person with a Long Name" />
      <UserRow nickname="Other Person" />
    </Container>
  );
}

export default UserList;