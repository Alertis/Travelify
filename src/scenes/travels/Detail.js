import React, { useEffect } from 'react';
import Comments from './components/Comments'
import Gallery from './components/Gallery'
import Maps from './components/Maps'
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {  IconButton,  } from 'react-native-paper';
import Background from '../../components/Background'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {useSelector, useDispatch} from 'react-redux'
import {locationDetail} from '../../middlewares/locations/action'

let pictures = [
    {
        uri: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        thumbnail: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
    {
        uri: 'https://ucarecdn.com/23e075df-b24e-4ecb-9ae6-11175b85976c/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        thumbnail: 'https://ucarecdn.com/23e075df-b24e-4ecb-9ae6-11175b85976c/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
    {
        uri: 'https://ucarecdn.com/70618db3-e134-4b43-83d6-5602e76df1e3/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        thumbnail: 'https://ucarecdn.com/70618db3-e134-4b43-83d6-5602e76df1e3/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
    {
        uri: 'https://www.gezilesiyer.com/wp-content/uploads/2018/09/istanbul-gezilecekyerler-oyuncak-muzesi-06.jpg',
        thumbnail: 'https://www.gezilesiyer.com/wp-content/uploads/2018/09/istanbul-gezilecekyerler-oyuncak-muzesi-06.jpg',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
    {
        uri: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        thumbnail: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
    {
        uri: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        thumbnail: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
    {
        uri: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        thumbnail: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
    {
        uri: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        thumbnail: 'https://ucarecdn.com/b5975e77-fbfa-4fbe-a228-bff4e11d8918/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        id: 1,
        title: 'İstanbul Oyuncak Müzesi',
        description: 'İstanbul Oyuncak Müzesi'
    },
]
const CommentRoute = () => (
   <Comments />
  );
   
const GalleryRoute = () => (
    <Gallery images={pictures}/>
);

const MapRoute = () => (
    <Maps />
);

export default function TravelDetail({route, navigation}) {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.Locations.detail)
    const errMsg = useSelector(state => state.Locations.errMsg)
    const loading = useSelector(state => state.Locations.loading)
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'comments', title: 'Yorumlar' },
      { key: 'pictures', title: 'Fotoğraflar' },
      { key: 'maps', title: 'Harita' },

    ]);
   
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
        console.log(route.params)
        dispatch(locationDetail(route.params.locationId))

    },[route])
  return (
    <Background>
        {console.log('detail:',detail)}
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
    }
});