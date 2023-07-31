import { useEffect, useState, useRef, useCallback, RefObject, createRef } from 'react'

export const useMatchHeight = (
  arrayDataLength: number
) => {
  const [height, setHeight] = useState<number | null>(null)
  const refsArray = useRef<RefObject<HTMLDivElement>[]>([])
  const countArray = Array.from(new Array(arrayDataLength), (_) => "")

  countArray.forEach((_, index) => {
    refsArray.current[index] = createRef<HTMLDivElement>()
  })

  const adjustCardHeight = useCallback(() => {
    let maxHeight = 0
    refsArray.current.forEach((ref) => {
      const itemHeight = ref.current?.getBoundingClientRect().height
      if (itemHeight && maxHeight < itemHeight) maxHeight = itemHeight
    })
    if (maxHeight > 0) setHeight(maxHeight)
  }, [])

  useEffect(() => {
    adjustCardHeight()
    window.addEventListener('resize', adjustCardHeight)
    return () => {
      window.removeEventListener('resize', adjustCardHeight)
    }
  }, [adjustCardHeight])

  return {
    height,
    refsArray
  }
}
