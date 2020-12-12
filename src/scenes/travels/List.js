import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {  IconButton,  } from 'react-native-paper';
import Background from '../../components/Background'


export default function ListTravel() {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  return (
    <Background>
        <IconButton
          icon="arrow-left"
          style={styles.container}
          size={20}
          color="#600EE6"
          onPress={() => console.log('Pressed')}
        />
        <ScrollView style={styles.travels} >
            <View style={styles.listBox}>
                <IconButton icon="star" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> Beyoğlu Cafe </Text>
                    <Text style={styles.description}> %50 ye varan büyük indirim </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
            <View style={styles.listBox}>
                <IconButton icon="airplane" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> Salda Gölü, Yeşilova Burdur  </Text>
                    <Text style={styles.description}> 
                    Gölün suyunda bulunan magnezyum, soda ve kil sağlık sorunlarına da iyi geldiği için sağlık turizmi için de çok sık tercih ediliyor.
                    </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
            <View style={styles.listBox}>
                <IconButton icon="chess-king" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> Efes Antik Kenti</Text>
                    <Text style={styles.description}> 
                    Eski Dünyanın Yedi Harikasından biri olan Artemis Tapınağı da dâhil olmak üzere birçok tarihi yapı ve kalıntılar burada görülebilir.
                    </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
            <View style={styles.listBox}>
                <IconButton icon="leaf" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> İnönü Yaylası </Text>
                    <Text style={styles.description}> 
                    Yaylada da temiz su kaynakları var. Geniş, düz çimenlik alanlarını çevreleyen Göknar ve Çam ağaçları sayesinde kamp için ideal bir ortam sunuyor.
                    </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
            <View style={styles.listBox}>
                <IconButton icon="pool" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> Olimpos </Text>
                    <Text style={styles.description}> 
                    limpos Antalya’nın Kemer kentinde bulunur. Hem muhteşem doğası hem de tarihiyle ön plandadır. 1972 yılında koruma altına alınmıştır. Doğal plajları çok güzeldir.
                    </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
            <View style={styles.listBox}>
                <IconButton icon="cards-playing-outline" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> Tuzak Kadıköy </Text>
                    <Text style={styles.description}> 
                    Gözlerini açıyorsun Hiç bilmediğin bir odada, daha önce görmediğin bir yerde kapana kısılmış durumdasın. Kurtulmak için çevrendeki ipuçlarını kullanıp kilitli kapıları açman gerekiyor.
                    </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
            <View style={styles.listBox}>
                <IconButton icon="school" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> Bostancı Halk Eğitim Merkezi </Text>
                    <Text style={styles.description}> 
                    Bina 1778 yılında Sultan I.Abdulhamid Han tarafından "Vakıf Mektebi" olarak yaptırılmıştır. 1915'de dönemin önemli mimarlarından Mimar Kemalettin Bey tarafından restore edilmiştir. 
                    </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
            <View style={styles.listBox}>
                <IconButton icon="cart" size={24} color="#600EE6" style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.title}> Ataköy Galleria AVM </Text>
                    <Text style={styles.description}> 
                    Türkiye’nin ilk büyük alışveriş merkezi olan Ataköy Galleria AVM, 1988 yılından beri Bakırköy ilçesinde hizmet veriyor.
                    </Text> 
                </View>
                <IconButton icon="map-marker-path" size={24} color="#600EE6" style={styles.icon} onPress={() => console.log('Pressed')}/>
            </View>
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