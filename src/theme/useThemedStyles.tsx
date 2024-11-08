import { ThemeSetting } from './theme.provider'
import { useTheme } from './useTheme'

export const useThemedStyles = <T,>(styles: (arg0: ThemeSetting) => T): T => {
  const theme: ThemeSetting = useTheme();
  return styles(theme);
};
