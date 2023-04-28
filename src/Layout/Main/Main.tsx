import Card from '@/Components/Card/Card'
import Cart from '@/Components/Cart/Cart'
import MainMenu from '@/Components/Menu/Menu'
import Products from '@/Products-Data/Data'
import { useState } from 'react'
const Main = (): JSX.Element => {
  const [Product, SetProduct] = useState(Products)
  const filterHandler = (value: string) => {
    const filteredProduct = Products.filter(item => item.size.includes(value))
    SetProduct([...filteredProduct])
  }
  //   ..........................................
  const sortHandler = (value: string) => {
    let sortArray
    if (value.toLowerCase() === 'lowest') {
      sortArray = Product.sort((a, b) => +a.price - +b.price)
    } else {
      sortArray = Product.sort((a, b) => +b.price - +a.price)
    }
    SetProduct([...sortArray])
  }
  //   ...........................................
  return (
    <>
      <div className="flex gap-6 justify-between px-10 w-full">
        <div className="left w-3/4">
          <MainMenu filterHandler={filterHandler} sortHandler={sortHandler} />
          <div className="flex flex-wrap justify-center gap-6 mt-10 pb-10">
            {Product.map(item => {
              return (
                <Card
                  description={item.description}
                  price={item.price}
                  key={item.id}
                  src={item.url}
                />
              )
            })}
          </div>
        </div>
        <div className="right w-1/4">
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Main
