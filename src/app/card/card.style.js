import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    borderColor: '#95a5a6',
    borderWidth: 1,
  },
  body: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 7,
  },
  text: {
    fontSize: 14,
    color: 'black',
    padding: 7,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  button_text:{
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    color:'white'
  }
});

export default styles;
