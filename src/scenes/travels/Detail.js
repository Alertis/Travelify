import React, { useEffect } from 'react';
import Comments from './components/Comments'
import Gallery from './components/Gallery'
import Maps from './components/Maps'
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {  IconButton, Button } from 'react-native-paper';
import Background from '../../components/Background'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {useSelector, useDispatch} from 'react-redux'
import {locationDetail, locationPics} from '../../middlewares/locations/action'

var ls = require('react-native-local-storage');



export default function TravelDetail({route, navigation}) {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.Locations.detail)
    const photos = useSelector(state => state.Locations.photos)
    const errMsg = useSelector(state => state.Locations.errMsg)
    const loading = useSelector(state => state.Locations.loading)
    
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'comments', title: 'Yorumlar' },
      { key: 'pictures', title: 'Fotoğraf' },
      { key: 'maps', title: 'Harita' },

    ]);

    const CommentRoute = () => (
        <Comments comment={detail.length > 0 ? detail[0].comments : []} />
       );
        
     const GalleryRoute = () => (
         <Gallery images={photos} title={detail.length > 0 ? detail[0].name : ""} description={detail.length > 0 ? detail[0].description : ""} />
     );
     
     const MapRoute = () => (
         <Maps lat={detail.length > 0 ? parseFloat(detail[0].lat) : 0} long={ detail.length > 0 ? parseFloat(detail[0].long) : 0} />
     );
   
    const renderScene = SceneMap({
      comments: CommentRoute,
      pictures: GalleryRoute,
      maps: MapRoute,

    });
    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#600EE6' }}
        />
      );
    const initialLayout = { width: Dimensions.get('window').width };

    useEffect(() => {
        dispatch(locationDetail(route.params.locationId))
        dispatch(locationPics(route.params.locationId))

    },[route])
  return (
    <Background>
        <Button style={styles.loading} loading={loading}></Button>
        <View style={styles.container} >
            <View style={styles.leftIcons}>
                <IconButton
                    icon="arrow-left"
                    size={20}
                    color="#600EE6"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.rightIcons}>
            
                <IconButton
                    icon="layers-plus"
                    size={20}
                    color="#600EE6"
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="circle-edit-outline"
                    size={20}
                    color="#600EE6"
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="trash-can-outline"
                    size={20}
                    color="#600EE6"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
       
        <View style={styles.travels} >
            <ScrollView style={styles.detail}>
                <Text style={styles.title}> {detail.length > 0 && detail[0].name} </Text>
                <Text style={styles.description}>{detail.length > 0 && detail[0].description}</Text>
                
            </ScrollView>
            <View style={styles.tabs}>
                <TabView 
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                />
            </View>
           
        
        </View>
    </Background>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        left: 0,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftIcons: {
        flex:1,
        justifyContent: 'flex-start'

    },
    rightIcons: {
        flexDirection:'row',
        justifyContent: 'flex-end',

    },
    travels: {
        width:'100%',
        top: 60,
        marginBottom: 60,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description:{
        fontSize: 14,
        padding:10,
        flex:1
    },
    scene:{
        flex: 1,
    },
    detail:{
        height:'30%'
    },
    tabs:{
        height:'70%'
    },
    loading:{
        position: "absolute"
    }
});