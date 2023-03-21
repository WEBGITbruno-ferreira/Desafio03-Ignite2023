import { HeaderContainter, HeaderContent } from './styles'
import cover from '../../assets/Cover.png'

export function Header() {
  return (
    <HeaderContainter>
      <HeaderContent>
        <img src={cover} alt="" />

      </HeaderContent>
    </HeaderContainter>
  )
}
