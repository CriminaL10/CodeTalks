import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.logo,
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {},
  date: {
    fontStyle: 'italic',
  },
  message: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default styles;
