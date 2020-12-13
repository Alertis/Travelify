import React from 'react';
import Comments from './components/Comments'
import Gallery from './components/Gallery'

import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {  IconButton,  } from 'react-native-paper';
import Background from '../../components/Background'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

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

export default function TravelDetail() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'comments', title: 'Yorumlar' },
      { key: 'pictures', title: 'Fotoğraflar' },
      { key: 'maps', title: 'Harita' },

    ]);
   
    const renderScene = SceneMap({
      comments: CommentRoute,
      pictures: GalleryRoute,
      maps: GalleryRoute,

    });
    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#600EE6' }}
        />
      );
    const initialLayout = { width: Dimensions.get('window').width };
  return (
    <Background>
        <View style={styles.container} >
            <View style={styles.leftIcons}>
                <IconButton
                    icon="arrow-left"
                    size={20}
                    color="#600EE6"
                    onPress={() => console.log('Pressed')}
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
                <Text style={styles.title}> İstanbul Oyuncak Mağazası </Text>
                <Text style={styles.description}>
                    İstanbul Oyuncak Müzesi, İstanbul'un Kadıköy ilçesinin Göztepe semtinde bulunan ve şair Sunay Akın 
                    tarafından 23 Nisan 2005'te kurulan oyuncak müzesidir. Müze koleksiyonu, Sunay Akın’ın 20 yıl boyunca 40'tan
                    fazla ülkede satın aldığı oyuncaklardan oluşturulmuş, dekoruysa sahne tasarım sanatçısı Ayhan Doğan 
                    tarafından tasarlanmıştır. Müze içerisinde 1700'lü yıllardan itibaren günümüze kadar gelen oyuncaklar 
                    sergilenmektedir. 2012 yılının Kasım ayında dünya çapındaki benzer müzeleri bir araya getirmek için Sunay
                    Akın tarafından kurulmuş olan Oyuncak ve Çocuk Müzeleri Birliği'nin (TOYCO) ilk buluşmasına ev sahipliği 
                    yapmış olan müze, Antalya'da, Ataşehir'de ve Gaziantep'te Sunay Akın'ın danışmanlığı ve küratörlüğüyle yeni 
                    oyuncak müzeleri açılması için örnek teşkil etmiştir. 
                </Text>
                
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