import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  emptyContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderColor: colors.btnPrimaryText,
  },
  emptyText: {
    color: colors.btnPrimaryText,
    fontWeight: 'bold',
  },
});

export default styles;
