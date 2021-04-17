import styled from 'styled-components'
import { CardItems } from '../src/components/CardItems'

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export default function Home() {
  return (
    <Container>
      <CardItems />
    </Container>
  )
}