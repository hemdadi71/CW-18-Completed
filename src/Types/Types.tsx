export interface Bprops {
  children: string
  style?: string
}
export interface State {
  id?: number
  description: string
  price: string
  url?: string
  size?: string[]
  src?: string
}
export interface Func {
  filterHandler: (value: string) => void
  sortHandler: (value: string) => void
}
