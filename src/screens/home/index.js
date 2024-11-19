import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {images} from '../../assets/images';
import {myColors} from '../../utils/myColor';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
    const[todaySelected,setTodaySelected] = useState("Today");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.view3}>
          <Image style={styles.menuStyle} source={images.menu} />
          <Image style={styles.menuStyle} source={images.profile} />
        </View>
      </View>
      <View style={styles.belowHeader}>
        <Text style={styles.budgetText}>My Budget</Text>
        <Text style={styles.priceText}>$ 5200</Text>
      </View>
      <View style={styles.innerCart}>
        <View style={styles.innerCartDesign}>
          <TouchableOpacity style={styles.todayText} onPress={() => setTodaySelected('Today')}>
            <Text>TODAY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.todayText}>
            <Text>MONTH</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailStyle}>
          <Text style={styles.textStyle}>16th Nov 2024</Text>
          <Text style={styles.textStyleRupee}>270</Text>
        </View>
        <View style={styles.lineBottom}></View>
        <View style={styles.scrollUpView}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 30,
                paddingTop: 30,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 100,
                    backgroundColor: '#00192d',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{height: '100%', width: '50%'}}
                    source={images.bulb}
                  />
                </View>
                <Text style={styles.electricityText}>Electricity</Text>
              </View>
              <Text style={styles.electricityText2}>4,000</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.scrollUpView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 30,
              paddingTop: 30,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  backgroundColor: '#00192d',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: '100%', width: '50%', resizeMode: 'contain'}}
                  source={images.taxi}
                />
              </View>
              <Text style={styles.electricityText}>Traveling</Text>
            </View>
            <Text style={styles.electricityText2}>3,000</Text>
          </View>
        </View>
        <View style={styles.scrollUpView}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 30,
                paddingTop: 30,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 100,
                    backgroundColor: '#00192d',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: '100%',
                      width: '50%',
                      resizeMode: 'contain',
                    }}
                    source={images.food}
                  />
                </View>
                <Text style={styles.electricityText}>Food</Text>
              </View>
              <Text style={styles.electricityText2}>3,000</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 30,
                paddingTop: 30,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 100,
                    backgroundColor: '#00192d',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: '100%',
                      width: '50%',
                      resizeMode: 'contain',
                    }}
                    source={images.train}
                  />
                </View>
                <Text style={styles.electricityText}>Traveling</Text>
              </View>
              <Text style={styles.electricityText2}>1,500</Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={{
            height: 70,
            width: 70,
            backgroundColor: '#00192d',
            borderRadius: 100,
            alignSelf: 'center',
          }}
          onPress={() => {
            navigation.navigate('AddExpenses');
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: 10,
            }}
            source={images.add}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D17842',
  },
  innerContainer: {
    paddingTop: 50,
  },
  view3: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  menuStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  belowHeader: {
    padding: 30,
  },
  budgetText: {
    fontSize: 30,
    fontWeight: '600',
    // color:"#fff"
  },
  priceText: {
    fontWeight: '600',
    fontSize: 40,
  },
  innerCart: {
    height: 1000,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerCartDesign: {
    flexDirection: 'row',
    paddingTop: 20,
    padding: 50,
  },
  todayText: {
    paddingVertical: 6,
  },
  detailStyle: {
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textStyleRupee: {
    color: myColors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  lineBottom: {
    borderBottomWidth: 2,
    width: '85%',
    marginLeft: 30,
    marginTop: 20,
    opacity: 0.3,
  },
  //   scrollUpView: {
  //     width: '100%',
  //     height: '30%',
  //   },
  insideScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bulbViewStyle: {
    height: 20,
    width: 20,
    borderRadius: 100,
  },
  electricityText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  electricityText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e76f51',
  },
});
export default HomeScreen;
