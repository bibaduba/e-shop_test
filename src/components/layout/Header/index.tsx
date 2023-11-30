import {
  AspectRatio,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { CartIcon } from '../../icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers'

export const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <>
      <Flex
        as='header'
        bg='gray.200'
        position='fixed'
        zIndex={999}
        px='4'
        py='2'
        justify='space-between'
        top={0}
        w='full'
      >
        <div>
          <Heading as='h1' fontSize='2xl'>
            Тестовое задание
          </Heading>
        </div>
        <IconButton
          aria-label='Корзина'
          variant='ghost'
          colorScheme='teal'
          onClick={onOpen}
          icon={<CartIcon />}
        />
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Корзина</DrawerHeader>
          <DrawerBody display='flex' flexDir='column' gap={2}>
            {cartItems.length ? (
              cartItems.map(({ price, id, title }) => (
                <Flex align='center' justifyContent='space-between' key={id}>
                  <Flex gap={3} align='center'>
                    <Box position='relative'>
                      <AspectRatio w={30} h={30} ratio={4 / 3}>
                        <Image
                          alt={title}
                          draggable='false'
                          fallback={<Skeleton />}
                          borderRadius={{ base: 'md', md: 'xl' }}
                        />
                      </AspectRatio>
                    </Box>
                    <Text>{title}</Text>
                  </Flex>
                  <Flex>{price}₽</Flex>
                </Flex>
              ))
            ) : (
              <Text>Товары отсутствуют</Text>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
