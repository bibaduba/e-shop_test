import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from './components/layout'
import { FoodPage } from './pages/Products/Food'
import { ClothesPage } from './pages/Products/Clothes'
import { ElectronicsPage } from './pages/Products/Electronics'

import { Provider } from 'react-redux'
import store from './redux/store'

import { theme } from './styles/theme'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Navigate to='/food' replace />} />
            <Route element={<Layout />}>
              <Route path='/food' index element={<FoodPage />} />
              <Route path='/clothes' element={<ClothesPage />} />
              <Route path='/electronics' element={<ElectronicsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>

  )
}

export default App
