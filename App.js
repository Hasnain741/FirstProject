import React from 'react';
import { StyleSheet, TextInput, Button, ActivityIndicator, View } from 'react-native';

export default class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			showActivityIndicator:false,
		}
	}
	
  render() {
	const {showActivityIndicator} = this.state
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}/>
		<Button title="Press me" onPress={()=>this.setState({showActivityIndicator:true})} style={styles.btn}/>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
	  width:320,
	  height:40,
	  fontSize:20,
  },
  btn: {
	  width:320,
	  height:40,
	  fontSize:20,
  }
  
});
