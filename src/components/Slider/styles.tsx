import styled from 'styled-components'

const Slider = styled.div`
  width: 50%;
  height: 350px;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  background-color: red;
  position: relative;

  div {
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
  }
`

const Img = styled.img`
  transition: 5s ease-in-out;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  z-index: 2;
`

const ButtonRight = styled.button`
    position: absolute;
    bottom: 10rem;
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
    transition: 0.4s ease-in;

    ${Slider}:hover & {
      visibility: unset; 
      transition: ease-in-out 0.8s;
    }
`

const ButtonLeft = styled.button`
    position: absolute;
    bottom: 10rem;
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
    transition: 0.4s ease-in;

    ${Slider}:hover & {
      visibility: unset; 
      transition: ease-in-out 0.8s;
    }
`
export {
  Slider,
  Img,
  ButtonRight,
  ButtonLeft
}