import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Searchbar, Surface, IconButton,  } from 'react-native-paper';
import Background from '../../components/Background'


export default function Main() {
  const [searchQuery, setSearchQuery] = React.useState('');
  function surface(color){
    let colorArr = ['']
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
  var ls = require('react-native-local-storage');
  ls.get('username').then((data) => {console.log("get: ", data)});
  return (
    <Background>
        <Searchbar style={styles.searchBar} placeholder="Search" onChangeText={ query => setSearchQuery(query)} value={searchQuery} />
        <ScrollView style={styles.scrlCategory} >
            <View style={styles.categoryBox}>
                <Surface style={surface('#af363c')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="star" />
                        </View>
                        <Text style={styles.text}>Fırsat</Text>
                    </View>
                </Surface>
                <Surface style={surface('#383d96')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="trophy" />
                        </View>
                        <Text style={styles.text}>Öneriler</Text>
                    </View>
                </Surface>
                <Surface style={surface('#505ba6')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="airplane" />
                        </View>
                        <Text style={styles.text}>Seyehat</Text>
                    </View>
                </Surface> 
                <Surface style={surface('#735244')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="chess-king" />
                        </View>
                        <Text style={styles.text}>Tarihi</Text>
                    </View>
                </Surface>
                <Surface style={surface('#576c43')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="leaf" />
                        </View>
                        <Text style={styles.text}>Doğa</Text>
                    </View>
                </Surface>
               
                <Surface style={surface('#0885a1')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="chef-hat" />
                        </View>
                        <Text style={styles.text}>Restoran</Text>
                    </View>
                </Surface>
                <Surface style={surface('#bb5695')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="pool" />
                        </View>
                        <Text style={styles.text}>Tatil</Text>
                    </View>
                </Surface>
                <Surface style={surface('#D43D1A')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="cards-playing-outline" />
                        </View>
                        <Text style={styles.text}>Eğlence</Text>
                    </View>
                </Surface>
                <Surface style={surface('#215E21')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="flower-outline" />
                        </View>
                        <Text style={styles.text}>Ormanlık</Text>
                    </View>
                </Surface>  
                <Surface style={surface('#238E68')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="ferry" />
                        </View>
                        <Text style={styles.text}>Deniz</Text>
                    </View>
                </Surface>
                <Surface style={surface('#330000')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="school" />
                        </View>
                        <Text style={styles.text}>Eğitim</Text>
                    </View>
                </Surface>
                <Surface style={surface('#B8860B')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="cart" />
                        </View>
                        <Text style={styles.text}>Alışveriş</Text>
                    </View>
                </Surface>
                <Surface style={surface('#AA5303')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="coffee" />
                        </View>
                        <Text style={styles.text}>Cafe</Text>
                    </View>
                </Surface>
                <Surface style={surface('#B81324')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="handball" />
                        </View>
                        <Text style={styles.text}>Aktivite</Text>
                    </View>
                </Surface>
                <Surface style={surface('#FF8C00')}>
                    <View style={styles.surfaceContent}>
                        <View style={ styles.categoryIcon} >
                            <IconButton color="white" size={24} icon="bed-empty" />
                        </View>
                        <Text style={styles.text}>Otel</Text>
                    </View>
                </Surface>
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
        height: '100%'
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
    }
});