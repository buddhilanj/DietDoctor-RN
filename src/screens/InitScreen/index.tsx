import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {authenticateAutoToken} from '@app/slices/auth';
import {useAppDispatch} from '@app/hooks';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(authenticateAutoToken());
  }, []);

  return (
    <SafeAreaView>
      <Text>Init</Text>
    </SafeAreaView>
  );
}
