import { Func } from '@/Types/Types'

const MainMenu = ({ filterHandler, sortHandler }: Func): JSX.Element => {
  return (
    <>
      <div className="flex justify-between py-5 border-b">
        <div>6 Products</div>
        <div className="flex gap-3">
          <span>Order</span>
          <select
            onChange={e => sortHandler(e.target.value)}
            name="price"
            className="border">
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="flex gap-3">
          <span>Filter</span>
          <select
            onChange={e => filterHandler(e.target.value)}
            name="size"
            className="border">
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default MainMenu
