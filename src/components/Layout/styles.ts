import styled from "styled-components";

/**
 * sl = Server List
 * sn = Server Name
 * cn = Channel Name
 * cl = Channel List
 * cc = Current Channel
 * ul = Users List
 * ui = User Info
 */

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 72px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'sl sn cn cn'
    'sl cl cc ul'
    'sl ui cc ul';

  height: 100vh;
`;