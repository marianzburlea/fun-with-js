import S from './tile.style'

const Tile = ({ pos }) => {
  const [x, y] = pos

  return (
    <S.Tile x={x} y={y}>
      Snake
    </S.Tile>
  )
}

export default Tile
