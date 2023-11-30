import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions'
import { useNotification } from '../../hooks/useNotifications'
import type { ResponseData } from '../../interfaces/response.interface'

interface Props {
  product: ResponseData
  rootProps?: StackProps
}

export const ProductCard = (props: Props) => {
  const dispatch = useDispatch()
  const { showSuccessMessage } = useNotification()

  const { product, rootProps } = props
  const { title, price } = product

  const handleAddToCart = () => {
    dispatch(addToCart(props.product))
    showSuccessMessage(`Товар "${title}" успешно добавлен в корзину`)
  }

  return (
    <Stack spacing={{ base: '4', md: '5' }} {...rootProps}>
      <Box position='relative'>
        <AspectRatio ratio={4 / 3}>
          <Image
            alt={title}
            draggable='false'
            fallback={<Skeleton />}
            borderRadius={{ base: 'md', md: 'xl' }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing='1'>
          <Text fontWeight='medium' color='gray.700'>
            {title}
          </Text>
          <Text fontWeight='medium'>{price}₽</Text>
        </Stack>
      </Stack>
      <Stack align='center'>
        <Button colorScheme='blue' width='full' onClick={handleAddToCart}>
          В корзину
        </Button>
      </Stack>
    </Stack>
  )
}
