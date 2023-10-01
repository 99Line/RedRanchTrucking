import { CustomCard } from './styled'

interface cardProps {
    children: any
}

export default function Card(props: cardProps) {
  return (
   <CustomCard>{props.children}</CustomCard>
  )
}
