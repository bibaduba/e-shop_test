import { Flex, Heading, Select, Text } from '@chakra-ui/react'
import type { FC, ChangeEvent } from 'react'

type Props = {
  title: string
  sortBy: string | undefined
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const SubHeader: FC<Props> = ({ title, onChange, sortBy }) => {
  return (
    <Flex align='center' wrap='wrap' justifyContent='space-between'>
      <Heading fontSize='xl'>{title}</Heading>
      <Flex align='center' gap='2'>
        <Text w='max-content'>Сортировать по: </Text>
        <Select
          w='max-content'
          onChange={onChange}
          placeholder='Выберите сортировку'
          fontSize={12}
          value={sortBy as string}
          h='6'
        >
          <option value='name'>Наименованию</option>
          <option value='price'>Цене</option>
        </Select>
      </Flex>
    </Flex>
  )
}
