interface Config<T> {
  data: T[]
  itemSizes: { width: number }[]
  viewport: number
}

export interface DataTransform {
  size: number
  end: number
  start: number
  transform: number
  width: number
}

export const convertArrayTransform = <T>(config: Config<T>): DataTransform[] => {
  let tmpEnd = 0
  const { data, itemSizes, viewport } = config

  if (data.length !== itemSizes.length) {
    return []
  }

  const totalSize = itemSizes.reduce((acc, { width }) => acc + width, 0)

  return data.map((value, index) => {
    const endScroll = viewport
    const size = itemSizes[index]?.width || 0
    const end = tmpEnd + size - 1
    tmpEnd = end + 1
    const startPos = tmpEnd - size
    let transform = -startPos

    if (startPos <= 0 || totalSize <= viewport) {
      transform = 0
    } else if (totalSize > viewport && totalSize - startPos <= endScroll) {
      transform = viewport - totalSize
    }

    return {
      size,
      end: tmpEnd,
      start: startPos,
      transform: transform,
      width: viewport,
    }
  })
}
