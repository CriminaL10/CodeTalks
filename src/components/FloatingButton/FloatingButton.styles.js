import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 20,
    borderRadius: 50,
    right: 20,
    bottom: 20,
  },
  color: {},
});

const styles = {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: colors.main,
    },
    color: {
      ...baseStyle.color,
      color: colors.btnPrimaryText,
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: colors.btnSecondary,
    },
    color: {
      ...baseStyle.color,
      color: colors.btnSecondaryText,
    },
  }),
};
export default styles;
