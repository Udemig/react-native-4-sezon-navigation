import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToDetailPage = () => {
    navigation.navigate('Detail', {
      title: 'React Native Eğitimi',
      name: 'Furkan Türkyılmaz',
      linkedin: 'fturkyilmaz',
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>HomeScreen</Text>
      <Button title="Go to detail" onPress={goToDetailPage} />
      <Button title="Go to Home" onPress={() => navigation.push('Home')} />
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </SafeAreaView>
  );
}
