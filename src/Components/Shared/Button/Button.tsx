import { Bprops } from '@/Types/Types'

const Button = ({ style, children }: Bprops) => {
  return (
    <>
      <button className={`bg-[#F0C041] py-2 px-4 ${style}`}>{children}</button>
    </>
  )
}

export default Button
