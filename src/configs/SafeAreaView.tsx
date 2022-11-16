import React from 'react';
import {
  SafeAreaView,
  Edge,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

import { Colors } from '.';

export default function ({
  style,
  ...others
}: SafeAreaViewProps & { edges?: readonly Edge[] }) {
  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: Colors.background }, style]}
      {...others}
    />
  );
}
