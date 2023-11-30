import {
  CloseButton,
  Flex,
  useToast as useNotifications,
  type UseToastOptions,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'

interface RenderProps extends UseToastOptions {
  onClose(): void
}

export const useNotification = () => {
  const position: UseToastOptions['position'] = 'top-right'
  const render = ({ title, onClose }: RenderProps) => {
    return (
      <Flex
        p={3}
        bg='#181818'
        borderRadius={8}
        align='center'
        color='gray.500'
        gap={3}
        justifyContent='space-between'
        boxShadow='0px 1.5px 4px -1px rgba(10, 9, 11, 0.07)'
      >
        <Flex align='center' gap={2}>
          {title}
        </Flex>
        <Box>
          <CloseButton onClick={onClose} />
        </Box>
      </Flex>
    )
  }

  const toast = useNotifications({ position, render })

  const showInfoMessage = (title: string) => {
    toast({
      title,
      status: 'info',
      isClosable: true,
    })
  }

  const showSuccessMessage = (title: string) => {
    toast({
      title,
      status: 'success',
      isClosable: true,
    })
  }

  return { showSuccessMessage, showInfoMessage }
}
