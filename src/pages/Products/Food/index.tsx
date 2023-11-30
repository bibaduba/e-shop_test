import { SubHeader } from '../../../components/SubHeader'
import { useState, useEffect, type ChangeEvent } from 'react'
import { getFoodData } from '../../../api/index.service'
import { ProductGrid } from '../../../components/ProductGrid'
import { ProductCard } from '../../../components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import type { ResponseData } from '../../../interfaces/response.interface'

export const FoodPage = () => {
  const [food, setFood] = useState<ResponseData[]>([])
  const [slicedItems, setSlicedItems] = useState<ResponseData[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || undefined)

  const itemLimit = 10

  const getFood = async () => {
    try {
      const data = await getFoodData()

      setFood(data)
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
      getFood()
    }
  }

  useEffect(() => {
    if (sortBy === 'name') {
      const sortedData = food.sort((a, b) => (a.title > b.title ? 1 : -1))
      setFood(sortedData)
    }
    if (sortBy === 'price') {
      const sortedData = food.sort((a, b) => (a.price > b.price ? 1 : -1))
      setFood(sortedData)
    }
  }, [sortBy, food])

  useEffect(() => {
    const offset = currentPage * itemLimit
    const getList = (itemLimit: number) => {
      setSlicedItems(food.slice(offset, offset + itemLimit))
    }

    getList(itemLimit)
  }, [currentPage, sortBy, food])

  useEffect(() => {
    getFood()
  }, [])

  return (
    <>
      <SubHeader title='Еда' sortBy={sortBy}  onChange={onHandleChangeSortBy} />
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
