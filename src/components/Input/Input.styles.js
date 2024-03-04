import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBottomBorder,
    color: colors.inputText,
    fontWeight: 'bold',
  },
});

export default styles;
