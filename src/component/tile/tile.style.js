import styled from 'styled-components'

const Tile = styled.div`
  border: 1px solid red;
  position: fixed;
  left: 100px;
  top: ${({ y }) => y}px;
`

const style = {
  Tile,
}

export default style
