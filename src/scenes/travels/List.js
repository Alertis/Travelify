import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {  IconButton,  } from 'react-native-paper';
import Background from '../../components/Background'
import {useSelector, useDispatch} from 'react-redux'
import {locationList} from '../../middlewares/locations/action'
import { TouchableHighlight } from 'react-native-gesture-handler';



export default function ListTravel( { route, navigation }) {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.Locations.locations)
  const errMsg = useSelector(state => state.Locations.errMsg)
  const loading = useSelector(state => state.Locations.loading)

  

  useEffect(() => {
      let params = {}
      if(route.params.search)
        params.search = props.route.params.search
      else 
        params.category = route.params.categoryId

        dispatch(locationList(params))
    console.log(route.params)
  },[route])
  
  function locationDetail(id){
    //navigation.navigate('TabNavigation', { screen: 'travelDetail', params:{locationId: id} })
    navigation.navigate('travelDetail', { locationId: id})

  }
  return (
    <Background>
        <Text> {loading ? "yükleniyor": "yüklendi"} </Text>
        <IconButton
          icon="arrow-left"
          style={styles.container}
          size={20}
          color="#600EE6"
          onPress={() => navigation.goBack()}
        />
        <ScrollView style={styles.travels} >
            {console.log(locations)}
        {locations.map((location) => {
            return(
                <TouchableHighlight onPress={() => locationDetail(location._id)}>
                     <View style={styles.listBox}>
                        <IconButton icon="star" size={24} color="#600EE6" style={styles.icon} />
                        <View style={styles.info}>
                            <Text style={styles.title}> {location.name} </Text>
                            <Text style={styles.description}>{location.description} </Text> 
                        </View>
                        <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
                    </View>
                </TouchableHighlight>
            )
        })}
            
            
        </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        left: 0
    },
    travels: {
        width: '100%',
        top: 50,
        marginBottom: 60,
    },
    listBox: {
        borderBottomWidth: 1,
        borderColor: '#600EE6',
        padding:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 11,
    },
    info:{
        flex: 8,
    },
    icon:{
        flex: 1,
    }
});