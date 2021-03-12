import { DefaultTheme, } from 'react-native-paper'

import AppColor from '../primitives/AppColor'

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColor.primary,
  },
  roundness: 2,  
  /*
  fonts: {
    medium: 'OpenSans',
     light: 'Open Sans',
    thin: 'Open Sans',
    regular: 'Open Sans', 
  }, */
}

export default theme
