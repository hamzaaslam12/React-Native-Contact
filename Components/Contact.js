import React, {useState, useEffect} from 'react';
import { FlatList, Platform, StyleSheet, Text, View, TouchableOpacity, Animated,} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import {} from 'react-native'

function ContactList(){

          const [numbers, setNumbers] = useState(null)

useEffect(() => {

  if(Platform.os === 'android'){

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      // {
        //   'title': 'Contacts',
        //   'message': 'This app would like to view your contacts.',
        //   'buttonPositive': 'Please accept bare mortal'
        // }
        {
          'title': 'Contacts',
          'message': 'Press OK to use app.',
          'buttonPositive': 'Please accept bare mortal'
        }
        )
        .then(() => Contacts.getAll())
      }
        
      GetContacts()
      }, [])
      
      
const GetContacts = () => {
// console.log('run')
Contacts.getAll().then(contact => {
          // contacts returned
          // console.log(contact)
          setNumbers(contact)
})
}


const PrintContact = ({ item }) => {
    return(      

  <View key = {Math.floor(Math.random())}>
    <Text style={styles.name}>{item.displayName}</Text>
 { item.phoneNumbers.map(item => (
   <Text>{item.number}</Text>
 ))}
 
  </View>

) 
}

const createContact = () => {
  // Contacts.openContactForm().then(contact => {
  //   console.log(contact)
  // })

  Contacts.openContactForm().then(contact => {
    // contact has been saved
    console.log(contact)
    .catch(err => console.log(err))
  })
}

// console.log(numbers)
return (
          <View style = {styles.container}>
          <Text>HELLO WORLD</Text>
          
          <TouchableOpacity
          onPress={createContact}>
            <Text>ADD</Text>
          </TouchableOpacity>

          <FlatList
          data={numbers}
          renderItem={ (item) => PrintContact(item) }
          keyExtractor={index => index}
          />
          
          </View>


          );
};

const styles = StyleSheet.create({
container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
},
name: {
  fontSize: 17,
  color: 'red',
  marginTop: 5,
  marginLeft: 'auto',
  marginRight: 'auto'
}
});

export default ContactList; 