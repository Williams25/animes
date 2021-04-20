import { useState } from 'react'
import { ArrowBackCircleOutline, ArrowForwardCircleOutline } from 'react-ionicons'
import styled from 'styled-components'

const Slider = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  position: relative;

  /* div {
    position: absolute;
    bottom: 0;
    z-index: 5;
  }

  div span {
    margin: 1rem;
    width: 15px;
    height: 15px;
    border: 2px solid #fff;
    border-radius: 15px;
    cursor: pointer;
  } */
`

const Img = styled.img`
  width: 100%;
  height: 15rem;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 8px 8px 0 0;
  transition: 5s ease-in-out;
  z-index: 2;
`

const ButtonRight = styled.button`
    position: absolute;
    bottom: 5rem;
    right: 1rem;
    color: blue;
    font-size: 3rem;
    font-weight: bold;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;

    z-index: 5;
    visibility: hidden;
    transition: visibility 0.4s;

    ${Slider}:hover & {
      visibility: unset;
    }
`

const ButtonLeft = styled.button`
    position: absolute;
    bottom: 5rem;
    left: 1rem;
    color: blue;
    font-size: 3rem;
    font-weight: bold;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;

    z-index: 5;
    visibility: hidden;
    transition: visibility 0.4s;

    ${Slider}:hover & {
      visibility: unset; 
    }
`

const SliderItemSelection = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 5;

  span {
    margin: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border: 0.13rem solid #fff;
    border-radius: 1rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  span div {
    margin: 1px;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`
interface imagesInterface {
  images: {
    description: string;
    path: string;
  }[]
}

export const SliderItem = ({ images }: imagesInterface) => {
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
  const selectIndex = (index: number) => setImagesIndex(index)
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

        <SliderItemSelection>
          {
            images.map((image, index) => {
              return (
                <span key={index}
                  onClick={() => selectIndex(index)}
                >
                  <div style={{
                    background: imagesIndex === index ? 'red' : 'transparent'
                  }}>

                  </div>
                </span>
              )
            })
          }
        </SliderItemSelection>
      </Slider>
    </>
  )
}