import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Box, Flex } from '@chakra-ui/react'
import { MainTabs } from './Tabs'

export const Layout = () => {
  return (
    <Flex justifyContent='space-between' w='full' h='full' overflow='hidden'>
      <Header />
      <Flex mt='14' w='full' px='4'>
        <Box w='full' overflow='auto'>
          <MainTabs />
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  )
}
