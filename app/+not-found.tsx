import React from 'react';
import { Box, Typography } from '@/shared/infrastructure/components';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Box style={styles.container}>
        <Typography type="title">This screen does not exist.</Typography>
        <Link href="/" style={styles.link}>
          <Typography type="link">Go to home screen!</Typography>
        </Link>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
