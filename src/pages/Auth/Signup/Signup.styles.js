import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
  },
  title: {
    margin: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.logo,
    fontSize: 40,
  },
  body: {
    margin: 5,
  },
  footer: {
    marginTop: 20,
  },
});

export default styles;
