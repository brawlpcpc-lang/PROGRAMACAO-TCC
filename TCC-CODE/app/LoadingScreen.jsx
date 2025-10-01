import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      if (onFinish) onFinish();
    });
    const interval = setInterval(() => {
      progress.addListener(({ value }) => setPercent(Math.round(value)));
    }, 100);
    return () => {
      clearInterval(interval);
      progress.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando...</Text>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, { width: progress.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }]} />
      </View>
      <Text style={styles.percent}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  barContainer: {
    width: '80%',
    height: 18,
    backgroundColor: '#222',
    borderRadius: 9,
    overflow: 'hidden',
    marginBottom: 12,
  },
  bar: {
    height: '100%',
    backgroundColor: '#ffb300',
    borderRadius: 9,
  },
  percent: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
