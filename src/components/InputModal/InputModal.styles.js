import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  body: {
    padding: 10,
    justifyContent: 'space-evenly',
    backgroundColor: colors.inputText,
    height: Dimensions.get('window').height / 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    flex: 1,
    fontWeight: 'bold',
  },
});
export default styles;
