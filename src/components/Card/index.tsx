import styled from 'styled-components'
import { SliderItem } from '../Slider'
const Card = styled.div`
  width: 20rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  
  border: 1px solid rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin: 1rem;
  transition: box-shadow 0.4s;

  :hover {
    box-shadow: inset 0 0 0 gold, 0 0 2px rgba(0, 0, 0, 0.9);
  }
`
const DescriptionCard = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;

  div:first-child {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }

  div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
  }
`
interface imagesInterface {
  images: {
    description: string;
    path: string;
  }[]
}

export const CardItem = ({ images }: imagesInterface) => {
  return (
    < Card >
      <SliderItem images={images} />
      <DescriptionCard>
        <div>
          <span>
            One Piece
          </span>
        </div>
        <div>
          <span>
            descrição
          </span>
        </div>
      </DescriptionCard>
    </Card >
  )
}