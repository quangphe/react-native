import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Dầu gội đầu' },
        { id: 2, name: 'Dầu xả' },
        { id: 3, name: 'Sữa tắm' },
      ]
    };
  }

  render() {
    const { categories } = this.state;
    return (
        <FlatList 
          data={categories} 
          renderItem={({ item} ) => <CategoryListItem category={item}/>} 
          keyExtractor={item => `${item.id}`} 
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }} 
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
