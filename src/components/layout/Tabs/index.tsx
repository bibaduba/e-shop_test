import { Tab, TabList, Tabs } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const MainTabs = () => {
  const tabs = [
    { title: 'Еда', to: '/food' },
    { title: 'Одежда', to: '/clothes' },
    { title: 'Электроника', to: '/electronics' },
  ]

  const getDefaultIndex = () => {
    switch (window.location.pathname) {
      case '/food':
        return 0
      case '/clothes':
        return 1
      case '/electronics':
        return 2
      default:
        return 0
    }
  }

  return (
    <Tabs align='center' variant='unstyled' mt='2' defaultIndex={getDefaultIndex()}>
      <TabList>
        {tabs.map(({ title, to }, index) => (
          <Tab
            _selected={{ color: 'gray.1400' }}
            color='gray.800'
            key={index}
            as={Link}
            to={to}
          >
            {title}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}
