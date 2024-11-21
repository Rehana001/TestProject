import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import FontAwesome1 from 'react-native-vector-icons/FontAwesome';
import FantistoIcon from 'react-native-vector-icons/Fontisto';
import { createUser } from '../api/CreateUserApi';

const data = [
  { label: 'Self managed', value: '1' },
  { label: 'Planned managed', value: '2' },
  { label: 'Agency managed', value: '3' },
];

const CreateProfile = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    planNumber: '',
    address: '',
    suburb: '',
    state: '',
    postCode: '',
    password: ''
  });

  const handleInputChange = (field, value) => {
    console.log(`Field updated: ${field}, Value: ${value}`); 
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting form data:", formData); 
      const response = await createUser(formData);
      console.log("API response:", response);
      Alert.alert('Success', 'User created successfully!');
    } catch (error) {
      console.error("Error response:", error); 
      Alert.alert('Error', error.message || 'Something went wrong!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.CreateProfileHeading}>
          <Text style={styles.title}>Create a Profile</Text>
        </View>
        <View style={styles.DropDownStyle}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Plan Type' : '...'}
            // value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.NameSectionStyle}>
          <View style={styles.NameView}>
            <View style={styles.UserIconView}>
              <Fontawesome name="user" size={25} color="#004540" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.firstName}
              placeholderTextColor="#999"
              onChangeText={(value) => handleInputChange('firstName', value)}
            />
          </View>
          <View style={styles.NameView}>
          <View style={styles.UserIconView}>
              <Fontawesome name="user" size={25} color="#004540" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={formData.lastName}
              placeholderTextColor="#999"
              onChangeText={(value) => handleInputChange('lastName', value)}
            />
          </View>
        </View>
        <View style={styles.PlanInputView}>
          <View style={styles.NotebookIcon}>
            <MaterialIcon name="notebook-edit" size={25} color="#004540"/>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Plan Number"
            value={formData.planNumber}
            placeholderTextColor="#999"
            onChangeText={(value) => handleInputChange('planNumber', value)}
          />
        </View>

        <View style={styles.EmailInputView}>
          <View style={styles.EmailIconStyle}>
            <MaterialIcon name="email" size={25} color="#004540"/>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#999"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
        </View>

        <View style={styles.PhoneInputView}>
          <View style={styles.PhoneIconStyle}>
            <Entypo name="phone" size={25} color="#004540"/>
          </View>
          <TextInput
            style={styles.input}
             keyboardType='numeric'
            placeholder="Phone"
            value={formData.phonenumber}
            placeholderTextColor="#999"
            onChangeText={(value) => handleInputChange('phonenumber', value)}
          />
        </View>

        <View style={styles.StreetInputView}>
          <View style={styles.LocationPinStyle}>
            <Entypo name="location-pin" size={25} color="#004540"/>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            value={formData.address}
            placeholderTextColor="#999"
            onChangeText={(value) => handleInputChange('address', value)}
          />
        </View>

        <View style={styles.SuburbInputView}>
          <View style={styles.LocationdotStyle}>
            <FontAwesome name="map-location-dot" size={23} color="#004540"/>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Suburb"
            value={formData.suburb}
            placeholderTextColor="#999"
            onChangeText={(value) => handleInputChange('suburb', value)}
          />
        </View>

        <View style={styles.NameSectionStyle}>
          <View style={styles.NameView}>
            <View style={styles.StateIconStyle}>
              <FontAwesome1 name="map" size={20} color="#004540"/>
            </View>
            <TextInput
              style={styles.input}
              placeholder="State"
              value={formData.state}
              onChangeText={(value) => handleInputChange('state', value)}
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.NameView}>
            <View style={styles.postalCodeIconStyle}>
              <FontAwesome name="signs-post" size={25} color="#004540"/>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Post code"
              value={formData.postCode}
              keyboardType='numeric'
              onChangeText={(value) => handleInputChange('postCode', value)}
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={styles.PasswordView}>
          <View style={styles.LockedIconStyle}>
            <FantistoIcon name="locked" size={23} color="#004540"/>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            placeholderTextColor="#999"
            onChangeText={(value) => handleInputChange('password', value)}
          />
        </View>

        <View style={styles.RegisterButtonView}>
          <TouchableOpacity style={styles.RegisterButtonStyle} onPress={handleSubmit}>
            <Text style={styles.RegisterTextStyle}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#004540',
    paddingBottom: 15
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    height: 60,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    margin: 8,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  CreateProfileHeading: {
    alignItems: 'center',
    padding: 10,
  },
  NameSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NameView: {
    backgroundColor: 'white',
    padding: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 5,
    flexDirection: 'row'
  },
  input: {
    color: 'black',
    width: '100%',
    height: 40,
    fontSize: 16,
  },
  PlanInputView: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 9,
    paddingTop:6,
    paddingBottom:6,
    flexDirection:'row'
  },
  EmailInputView: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection:'row',
    paddingTop:6,
    paddingBottom:6,
    margin: 9,
  },
  PhoneInputView: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection:'row',
    paddingTop:6,
    paddingBottom:6,
    margin: 9,
  },
  StreetInputView: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection:'row',
    paddingTop:6,
    paddingBottom:6,
    margin: 9,
  },
  SuburbInputView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop:6,
    paddingBottom:6,
    paddingLeft:5,
    paddingRight:6,
    flexDirection:'row',
    margin: 9,
  },
  PasswordView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop:6,
    paddingBottom:6,
    flexDirection:'row',
    margin: 9,
  },
  RegisterButtonView: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#009A8E',
    width: '95%',
    borderRadius: 100,
    margin: 10,
    marginTop: 30
  },
  RegisterButtonStyle: {
    padding: 12,
  },
  RegisterTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  UserIconView: {
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  NotebookIcon:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  EmailIconStyle:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  PhoneIconStyle:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  LocationPinStyle:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  LocationdotStyle:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  StateIconStyle:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  postalCodeIconStyle:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  },
  LockedIconStyle:{
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6
  }

});


