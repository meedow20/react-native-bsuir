import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import {colors} from '../../theme/colors';
import {getNewsData} from './helpers';
import {NewsDataArticleResponse, NewsDataResponse} from './types';
import NewsCard from './components/NewsCard';
import {useFocusEffect} from '@react-navigation/native';

function Network() {
  const [newsData, setNewsData] = useState<NewsDataResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const newsResponse = await getNewsData();

          setNewsData(newsResponse);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    }, []),
  );

  return (
    <SafeAreaView style={styles.component}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          {newsData && newsData.articles && newsData.articles.length > 0 ? (
            <FlatList<NewsDataArticleResponse>
              data={newsData.articles}
              renderItem={({item, index}) => (
                <View key={index} style={styles.newsCardWrapper}>
                  <NewsCard
                    date={new Date(item.publishedAt ?? '').toUTCString()}
                    title={item.title ?? ''}
                    url={item.url ?? ''}
                  />
                </View>
              )}
            />
          ) : (
            <Text>No data</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

export default Network;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    margin: 20,
  },

  newsCardWrapper: {
    marginBottom: 20,
  },
});
