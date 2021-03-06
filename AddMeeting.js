import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity } from 'react-native';
  

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class AddNeighbour extends React.Component {

  state = {
    theme: '',
    salle: '',
    adresse:'',
    meeting:''

  }

  _conn = () => {


    fetch('http://192.168.1.27/Projet_React/tonfichier.php', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        "theme": this.state.theme,
        "salle": this.state.salle,
        "adresse": this.state.adresse,
        "meeting": this.state.meeting

        

        })
    }).then(response => {
  return response.json();
})
.then((response) => {
		console.log(response);

  }).catch((error) => {
    console.error(error);
    });

  }


  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://i.pravatar.cc/200',
          }}
          />

        <TextInput
          placeholder='Theme de la reunion'
          value={this.name}
          style={styles.simpleInput}
          onChangeText={ TextInputValue =>
            this.setState({theme: TextInputValue }) }
            underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            secureTextEntry={false}

          />

        <TextInput
          placeholder='Salle de la reunion'
          style={styles.simpleInput}
          onChangeText={ TextInputValue =>
            this.setState({salle: TextInputValue }) }
            underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            secureTextEntry={false}
          />

        <TextInput
          placeholder='Address'
          style={styles.simpleInput}
          onChangeText={ TextInputValue =>
            this.setState({adresse: TextInputValue }) }
            underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            secureTextEntry={false}
          />

        <TextInput
          placeholder='About Meeting'
          multiline = {true}
          numberOfLines = {4}
          style={styles.textAreaInput}
          onChangeText={ TextInputValue =>
            this.setState({meeting: TextInputValue }) }
            underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            secureTextEntry={false}
          />


        <TouchableOpacity onPress={this._conn}
          style={styles.buttonSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#FF80AB', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#FF80AB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#FF80AB',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  }
});
