import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: dim.width / 2 - 20,
    height: dim.height / 4 - 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  titleContainer: {},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.main,
  },
});

export default styles;
