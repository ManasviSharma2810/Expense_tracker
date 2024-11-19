import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {myColors} from '../../utils/myColor';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/slice';
const AddExpenses = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [expense, setExpense] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={images.cross}
              style={{resizeMode: 'contain', height: 30, width: 25}}
            />
          </TouchableOpacity>
          <Text style={styles.addTransaction}>Add Transactions</Text>
        </View>
        <Text></Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder=" Enter Expense Name Here"
            placeholderTextColor="grey"
            value={name}
            onChangeText={txt => setName(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder=" Enter Expense Amount Here"
            placeholderTextColor="grey"
            value={expense}
            onChangeText={txt => setExpense(txt)}
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(addUser({name, expense}));
          }}>
          <Text style={styles.buttonText}>Add Expense</Text>
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
  innerView: {
    height: 1000,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  addTransaction: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: '20%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
    paddingHorizontal: 18,
    marginVertical: 10,
    marginHorizontal: 15,
    height: 50,
  },
  iconStyle: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: '',
    fontSize: 16,
  },
  button: {
    backgroundColor: myColors.primary,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  buttonText: {
    color: '#00000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default AddExpenses;
