import { ContentPadding, CustomCard } from './styled'

interface cardProps {
    children: any
}

export default function Card(props: cardProps) {
  return (
    <CustomCard>
        <ContentPadding>
            {props.children}
        </ContentPadding>
    </CustomCard>
  )
}
