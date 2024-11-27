import Image from 'next/image'
import React from 'react'

const CategoryCard = ({
  title,
  photo,
  description,
  link
}) => {
  return (
    <a className="relative overflow-hidden bg-black rounded-lg aspect-[337/460] w-full flex items-end cursor-pointer group" href={link}>
      <img src={photo} alt={`Foto de la categoría ${title}`} className="absolute top-0 left-0 object-cover w-full h-full transition-transform group-hover:scale-105" />
      <div className="relative z-10 w-full p-4 text-white bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-bold">{ title }</h3>
        { description && (
          <div dangerouslySetInnerHTML={{
            __html: description
          }}></div>
        )}
      </div>
    </a>
  )
}

export default CategoryCard