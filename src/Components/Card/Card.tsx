import Button from '@/Components/Shared/Button/Button'
import { State } from '@/Types/Types'

const Card = ({ description, price, src }: State) => {
  return (
    <>
      <div className="w-[300px] h-[470px] flex flex-col gap-4 mb-6">
        <img src={src} alt="" />
        <p className="text-center">{description}</p>
        <div className="flex justify-between items-center">
          <p>{`$ ${price}`}</p>
          <Button children="Add To Card" />
        </div>
      </div>
    </>
  )
}

export default Card
