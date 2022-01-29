import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const MangaDetail = ({route}) => {
  return (
    <SafeAreaView>
      <View>
          <Text>{ route.params.manga_description } </Text>
      </View>

    </SafeAreaView>
  );
};

export default MangaDetail;
