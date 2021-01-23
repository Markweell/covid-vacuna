export function CustomXTick ({ x, y, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={20}
        textAnchor='end'
        fontSize='14'
        fontWeight='700'
        fill='var(--text-subtitle-color)'
        transform='rotate(-35)'
      >
        {payload.value}
      </text>
    </g>
  )
}

export function CustomYTick ({ x, y, payload }) {
  const exponentFormatValue = payload.value.toExponential(0)
  const omitZero = payload.value === 0 ? '' : exponentFormatValue

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-6}
        y={0}
        dy={0}
        fontSize='14'
        fontWeight='700'
        textAnchor='end'
        fill='var(--text-subtitle-color)'
      >
        {omitZero}
      </text>
    </g>
  )
}
