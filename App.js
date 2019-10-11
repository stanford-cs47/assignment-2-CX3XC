import React from 'react';
import { StyleSheet, Text, View, Image, Button, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import { Images, Profiles , } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <SafeAreaView style={styles.navContainer}>
          <View style={styles.navContentContainer}>
            <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
              <Image style={{width: 30, height: 30, tintColor: 'grey', marginBottom: 5}} source={require('./assets/settings_icon.png')}/>
            </TouchableOpacity>
            <Image style={{width: 110, height: 60}} source={Images.logo} resizeMode='contain' />
            <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>  
              <Image style={{tintColor: 'grey', width: 30, height: 30, marginBottom: 5}} source={Images.chat} resizeMode='contain'/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={styles.profileContainer}>
          <View style={styles.profileContentContainer}>
            <Image style={styles.profileImage} source={Images.harold} resizeMode='cover'/>
            
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.profileName}>{Profiles.harold.name}</Text>
              <Text style={styles.profileAge}>, {Profiles.harold.age}</Text>
            </View>
            
            <Text style={styles.profileOccupation}>{Profiles.harold.occupation}</Text>
          </View>
        </View>

        <SafeAreaView style={styles.actionContainer}>
          <View style={styles.actionButton}>
            <Image style={{width: 30, height: 30, marginBottom: '11%',}} source={Images.rewind} resizeMode='contain'/>
          </View>
          <View style={styles.actionButton}>
            <Image style={{width: 33, height: 33, marginBottom: '11%',}} source={Images.nope} resizeMode='contain'/>
          </View>
          <View style={styles.actionButton}>
            <Image style={{width: 30, height: 30, marginBottom: '11%',}} source={Images.boost} resizeMode='contain'/>
          </View>
          <View style={styles.actionButton}>
            <Image style={{width: 40, height: 40, marginBottom: '11%',}} source={Images.like} resizeMode='contain'/>
          </View>
          <View style={styles.actionButton}>
            <Image style={{width: 30, height: 30, marginBottom: '11%',}} source={Images.superLike} resizeMode='contain'/>
          </View>
        </SafeAreaView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
  },

  navContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  navContentContainer: {
    width: '100%',
    height: Platform.OS === 'ios' ? 44 : 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: '3%',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileContainer: {
    flex: 11,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileContentContainer: {
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
  },

  profileImage: {
    width: '100%',
  },

  profileName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: 'Arial',
    marginTop: 10,
    marginLeft: 8,
    fontWeight: 'bold',
  },

  profileAge: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: 'Arial',
    marginTop: 10,
  },

profileOccupation: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontSize: 16,
  marginBottom: 16,
  marginLeft: 10,
  fontFamily: 'Georgia',
  color: 'grey',
},

  actionContainer: {
    flex: 3,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  actionButton: {
    height: 55,
    width: 55,
    marginBottom: '5%',
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

});