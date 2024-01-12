import React from 'react';
import styled from 'styled-components/native';
import { RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface ScreenProps {
  children: JSX.Element | JSX.Element[] | null | undefined;
  refresh?: boolean;
  refetch?: () => void;
}

const StyledScrollView = styled(ScrollView)`
  flex: 1;
  background-color: #121415;
  padding-top: 15px;
`;

const Screen: React.FC<ScreenProps> = ({ children, refresh, refetch }) => (
  <StyledScrollView
    refreshControl={
      <RefreshControl refreshing={refresh || false} tintColor={"white"} onRefresh={refetch} />
    }
  >
    {children}
  </StyledScrollView>
);

export default Screen;