import { CardItem } from '../Card'
import { images } from '../../../images.json'
import { motion } from 'framer-motion'

export const CardItems = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const cards = [
    <CardItem images={images} />,
    <CardItem images={images} />,
    <CardItem images={images} />,
    <CardItem images={images} />,
    <CardItem images={images} />
  ]
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {
        cards.map((card, index) => {
          return (
            <motion.div key={index}
              variants={item}>
              {card}
            </motion.div>
          )
        })
      }
    </motion.div>
  )
}