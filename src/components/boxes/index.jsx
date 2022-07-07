import React from 'react'
import { Box, BoxesWrapper } from './style'
import boxes from "../../assets/img/boxes.webp"

function Boxes() {
  return (
    <BoxesWrapper>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
    </BoxesWrapper>
  )
}

export default Boxes