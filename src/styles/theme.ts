import { extendTheme } from '@chakra-ui/react'
import { pagination } from './pagination'

import '@fontsource/inter'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

export const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  styles: {
    global: {
      body: {
        bg: 'main_white',
        color: 'main_black',
        fontSize: 14,
        h: '100%',
      },
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#4A4949',
        borderRadius: 8,
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#4A4949',
      },
      html: {
        overflow: 'hidden',
        h: '100%',
      },
      '#root': {
        w: '100%',
        h: '100%',
      },
      button: {
        _hover: {
          filter: 'grayscale(41%) saturate(71%)',
          _disabled: { filter: 'saturate(0%)' },
        },
      },
    },
  },
  colors: {
    main_black: '#000000',
    success: {
      500: '#52A86E',
    },
    gray: {
      100: '#FAFBFC',
      200: '#F8F8F8',
      300: '#F1F1F1',
      400: '#ECECED',
      500: '#E6E6E6',
      600: '#DCDCDE',
      700: '#7F8493',
      800: '#ADACB0',
      900: '#7F7D83',
      1000: '#4F4D55',
      1100: '#2D2B32',
      1300: '#0A090B',
      1400: '#232323',
      1500: '#3D3D3D',
    },
    yellow: {
      100: '#F3A124',
      200: '#FF9500',
      300: '#FFF3E0',
      400: '#503000',
      500: '#312E29',
    },
    main_white: '#FFFFFF',
  },
  components: {
    Container: {
      variants: {
        pagination
      }
    }
  },
})
