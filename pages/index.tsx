import styled from 'styled-components'
import { images } from '../images.json'
import SliderItem from '../src/components/Slider'

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  div {
    width: 100%;
    margin: 1rem;
    display: flex;
    justify-content: center;
  }
`

export default function Home() {

  return (
    <Container>
      <div>
        <SliderItem images={images} />

        <SliderItem images={images} />
      </div>
    </Container>
  )
}
