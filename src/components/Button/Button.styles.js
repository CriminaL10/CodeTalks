import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  touch: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    padding: 5,
    margin: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

const styles = {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: colors.btnPrimary,
    },
    title: {
      ...baseStyle.title,
      color: colors.btnPrimaryText,
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: colors.btnSecondary,
    },
    title: {
      ...baseStyle.title,
      color: colors.btnSecondaryText,
    },
  }),
};

export default styles;
