import React, { useEffect, useRef, useState } from 'react'

interface PropsDTO {
  [propsName: string]: any
}

export function getBase64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as any)
    reader.onerror = (error) => reject(error)
  })
}

const UploadInput: React.FC<PropsDTO> = () => {
  const [fileList, setFileList] = useState<any[]>([])
  const ref = useRef<HTMLInputElement>(null)

  console.log(fileList)

  const handleChange = (e: any) => {
    // const photos: any = document.querySelector("input[type='file'][multiple]")
    // console.log(photos?.files)
    // console.log(e)
    // console.log(e.target.files)
    setFileList(e.target.files)
  }

  useEffect(() => {
    // const formData = new FormData()
    ref.current?.addEventListener('change', handleChange)
    return () => {
      ref.current?.removeEventListener('change', handleChange)
    }
  }, [ref.current])

  // const getImg = async () => {
  //   return fileList?.map(async (file) => {
  //     const src = await getBase64(file)
  //     const image = new Image()
  //     // image.onload = () => {
  //     //   resolve(image)
  //     // }
  //     // image.onerror = (err) => {
  //     //   reject(err)
  //     // }
  //     image.src = src
  //     return image
  //     // return await new Promise((resolve, reject) => {
  //     //   const image = new Image()
  //     //   image.onload = () => {
  //     //     resolve(image)
  //     //   }
  //     //   image.onerror = (err) => {
  //     //     reject(err)
  //     //   }
  //     //   image.src = src
  //     // })
  //   })
  // }

  return (
    <div>
      <input
        ref={ref}
        type={'file'}
        multiple
        name={'name'}
        onClick={(e) => e.stopPropagation()}
        onChange={handleChange}
      />
      {/* 数据怎么渲染 */}
      {/* {getImg()} */}
    </div>
  )
}
export default UploadInput

// forEach 没有返回值，直接修改当前数组
// map 有返回值，返回新数组
// myMap.forEach(function(value, key) {
//   console.log(key + " = " + value);
// })
