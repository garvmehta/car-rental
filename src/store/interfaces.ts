import { RootStackParamList } from '../navigations/MainNavigation/models';
export type intialRouteTypeEnum = keyof RootStackParamList

export interface Root {
  data: HomeType
  message: Message
  hints: Hints
  options: Options
  errors: any[]
  success: boolean
}

export interface HomeType {
  cities: CityType[]
  banners: BannerType[]
  cars_sections: CarsSectionType[]
}

export interface CityType {
  longitude: string
  id: number
  title: string
  image: string
  latitude: string
}

export interface BannerType {
  action: ActionType
  background: BackgroundType
  subheader: SubheaderType
  header: HeaderType
}

export interface ActionType {
  ref: string
  position: string
  value: string
  background_color: string
  text_color: string
  type: string
}

export interface BackgroundType {
  color: string
  image: string
}

export interface SubheaderType {
  color: string
  value: string
}

export interface HeaderType {
  color: string
  value: string
}

export interface CarsSectionType {
  filter: any
  title: string
  cars: CarType[]
}

export interface CarType {
  monthly_price: string
  savings_tag: string
  promoted: boolean
  rating: number
  price: string
  price_suffix: string
  favorite: boolean
  images: string[]
  id: number
  name: string
  host_tag?: HostTagType
  latitude: number
  longitude: number
  delivery_tag: DeliveryTagTye
  priority: number
  weekly_price: string
}

export interface HostTagType {
  text_color: string
  background_color: string
  value: string
}

export interface DeliveryTagTye {
  icon: string
  label: string
  identifier: string
}

export interface Message {}

export interface Hints {}

export interface Options {}
