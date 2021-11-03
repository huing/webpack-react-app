import React, { useCallback, useEffect, useLayoutEffect, useMemo } from 'react'

interface PropsDTO {
  [propsName: string]: any
}

const Page: React.FC<PropsDTO> = () => {
  const a = useCallback(() => {
    console.log('useCallback')
  }, [])
  const b = useMemo(() => {
    console.log('useMemo')
  }, [])
  console.log(a, b)
  console.log('before useEffect')

  useEffect(() => {
    console.log('useEffect')
    return () => {
      console.log('useEffect return')
    }
  }, [])

  console.log('after useEffect')

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  return <div>content</div>
}
export default Page
