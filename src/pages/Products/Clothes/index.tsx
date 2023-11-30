import { SubHeader } from '../../../components/SubHeader'
import { useState, useEffect, type ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getClothesData } from '../../../api/index.service'
import { ProductGrid } from '../../../components/ProductGrid'
import { ProductCard } from '../../../components/ProductCard'
import type { ResponseData } from '../../../interfaces/response.interface'

export const ClothesPage = () => {
  const [clothes, setClothes] = useState<ResponseData[]>([])
  const [slicedItems, setSlicedItems] = useState<ResponseData[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || undefined)
  const itemLimit = 10

  const getClothes = async () => {
    try {
      const data = await getClothesData()
      setClothes(data)
      setTotalCount(data.length)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1)
  }

  const onHandleChangeSortBy = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const value = target.value
    setSortBy(value)
    setCurrentPage(0)

    if (value === 'name') {
      setSearchParams({ sortBy: value })
    }
    if (value === 'price') {
      setSearchParams({ sortBy: value })
    }
    if (!value) {
      setSearchParams()
      getClothes()
    }
  }

  useEffect(() => {
    if (sortBy === 'name') {
      const sortedData = clothes.sort((a, b) => (a.title > b.title ? 1 : -1))
      setClothes(sortedData)
    }
    if (sortBy === 'price') {
      const sortedData = clothes.sort((a, b) => (a.price > b.price ? 1 : -1))
      setClothes(sortedData)
    }
  }, [sortBy, clothes])

  useEffect(() => {
    const offset = currentPage * itemLimit
    const getList = (itemLimit: number) => {
      setSlicedItems(clothes.slice(offset, offset + itemLimit))
    }

    getList(itemLimit)
  }, [currentPage, sortBy, clothes])

  useEffect(() => {
    getClothes()
  }, [])

  return (
    <>
      <SubHeader
        title='Одежда'
        sortBy={sortBy}
        onChange={onHandleChangeSortBy}
      />
      <ProductGrid
        changePage={handlePageChange}
        currentPage={currentPage}
        total={totalCount}
      >
        {slicedItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </>
  )
}
