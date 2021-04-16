import { useState } from 'react'
import { ArrowBackCircleOutline, ArrowForwardCircleOutline } from 'react-ionicons'
import { ButtonLeft, ButtonRight, Img, Slider } from './styles'

interface images {
  images: {
    description: string;
    path: string;
  }[]
}

const SliderItem = ({ images }: images) => {
  const [imagesIndex, setImagesIndex] = useState<number>(0)
  const imagesLength: number = images.length - 1

  const buttonLeft = () => {
    if (imagesIndex > 0) {
      setImagesIndex(imagesIndex - 1)
    } else {
      setImagesIndex(imagesLength)
    }
  }

  const buttonRight = () => {
    if (imagesLength <= imagesIndex) {
      setImagesIndex(0)
    } else {
      setImagesIndex(imagesIndex + 1)
    }
  }

  const tester = (index: number) => setImagesIndex(index)

  return (
    <>
      <Slider>
        <Img src={images[imagesIndex].path} alt="" />
        <ButtonLeft onClick={buttonLeft} >
          <ArrowBackCircleOutline
            color="#fff"
            width="40px"
            height="40px"
          />
        </ButtonLeft>

        <ButtonRight onClick={buttonRight} >
          <ArrowForwardCircleOutline
            color="#fff"
            width="40px"
            height="40px" />
        </ButtonRight>

        <div>
          {
            images.map((image, index) => {
              return (
                <span key={index}
                  onClick={() => tester(index)}
                  style={{
                    background: imagesIndex === index ? 'red' : 'transparent'
                  }} />
              )
            })
          }
        </div>
      </Slider>
    </>
  )
}

export default SliderItem