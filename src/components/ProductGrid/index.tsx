import {
  Container,
  Flex,
  SimpleGrid,
  type SimpleGridProps,
} from '@chakra-ui/react'
import Pagination from 'rc-pagination'
import { type FC, Children, isValidElement, useMemo } from 'react'

interface Props extends SimpleGridProps {
  currentPage: number
  changePage: (page: number) => void
  total: number
}

export const ProductGrid: FC<Props> = (props) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(isValidElement).length
    return [
      1,
      Math.min(2, count),
      Math.min(3, count),
      Math.min(4, count),
      Math.min(5, count),
    ]
  }, [props.children])

  return (
    <Flex flexDir='column' w='full'>
      <SimpleGrid
        columns={columns}
        columnGap={{ base: '4', md: '6' }}
        rowGap={{ base: '8', md: '10' }}
        pt='10'
        children={props.children}
      />
      <Container
        variant='pagination'
        mb={8}
        data-test-id='container_pagination'
      >
        <Pagination
          showTitle={false}
          onChange={props.changePage}
          current={props.currentPage + 1}
          total={props.total}
        />
      </Container>
    </Flex>
  )
}
