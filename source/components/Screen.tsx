import React, { useState } from 'react';
import { View, Text, StyleSheet, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface ScreenProps {
    children: JSX.Element | JSX.Element[] | null | undefined;
    refresh?: boolean;
    refetch?: () => void;
    }
const Screen = ({children, refresh, refetch} : ScreenProps) => {

  // const [refresh, setRefresh] = useState(false);

  // const pullToRefresh = () => {
  //   setRefresh(true);
  //   setTimeout(() => {
  //     setRefresh(false);
  //   }, 5000);
  // };

  console.log(refresh);
  

  return (
    <ScrollView style={styles.container} refreshControl={
      <RefreshControl refreshing={refresh || false} tintColor={"white"} onRefresh={refetch}/>
    }>
  {children}
</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121415',
    paddingTop: 15,
  },
});

export default Screen;
