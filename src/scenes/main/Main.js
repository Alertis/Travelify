import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Searchbar, Surface, IconButton, Button } from 'react-native-paper';
import Background from '../../components/Background'
import {useSelector, useDispatch} from 'react-redux'
import {categoryList} from '../../middlewares/categories/action'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Main({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();
  const categories = useSelector(state => state.Categories.categories)
  const errMsg = useSelector(state => state.Categories.errMsg)
  const loading = useSelector(state => state.Categories.loading)

  useEffect(() => {
    dispatch(categoryList())
  },[dispatch])

  function surface(color){
    return  {
        minHeight: 100,
        minWidth: 100,
        margin: 8,
        flexWrap: "wrap",
        borderRadius: 6,
        backgroundColor: color,
        justifyContent: "center"
      }
  }
  
  function searchLocation(){
    navigation.navigate('TabNavigation', { screen: 'locations', params:{search: searchQuery} })
  }
  function detailCategory(id){
    navigation.navigate('TabNavigation', { screen: 'locations', params:{categoryId: id} })
  }

  return (
    <Background>
        <Button style={styles.loading} loading={loading}></Button>
        <Searchbar style={styles.searchBar} placeholder="Search" onChangeText={ query => setSearchQuery(query)} value={searchQuery} onIconPress={searchLocation} />
        <ScrollView style={styles.scrlCategory} >
            <View style={styles.categoryBox}>
                {categories.map((category) => {
                    return(
                        <TouchableHighlight onPress={() => detailCategory(category._id)}>
                            <Surface style={surface(category.color)} >
                                <View style={styles.surfaceContent}>
                                    <View style={ styles.categoryIcon} >
                                        <IconButton color="white" size={24} icon={category.icon} />
                                    </View>
                                    <Text style={styles.text}>{category.categoryName}</Text>
                                </View>
                            </Surface>
                        </TouchableHighlight>
                    )
                })}
            </View>
        </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
    searchBar :{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
    },
    scrlCategory:{
        width: '100%',
        top: 54,
    },
    categoryBox:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 750
    },
    categoryIcon:{
        flexDirection: 'column',
        justifyContent: "center",
        color: '#fff'
    },
    surfaceContent: {
        alignItems: 'center',
        width:'100%'
    },
    text:{
        color: '#fff',
        fontSize: 18
    },
    loading:{
        position: "absolute"
    }
});