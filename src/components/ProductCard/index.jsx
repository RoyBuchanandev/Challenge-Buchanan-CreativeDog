import React, { useState } from "react";
import clsx from "clsx";
export default function ProductCard({ title, photo, price, category }) {
  const [liked, setLiked] = useState(false);

  const handleToggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative flex-none flex-grow-0 order-1 bg-white rounded-md cursor-pointer">  
      <a className="relative inline-block" href="#">
        <img src={photo} alt={`Foto de ${title}`} className="object-cover aspect-[337/460]" />
        <div className="absolute bottom-0 z-10 px-2 py-1 text-black uppercase bg-white left-2 font-barlow">
          {price}
        </div>
      </a>
      <a href="#" className="inline-block pl-4">
        <h3 className="inline-block w-full text-black">{ title }</h3>
        <p className="text-zinc-500">{ category }</p>
      </a>
      <button
        className={clsx(
          'absolute flex items-center justify-center bg-white rounded-full right-4 top-4 p-4',
          liked ? 'text-red-500' : 'text-zinc-500'
        )}
        onClick={handleToggleLike}
      >
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.0624 2.21432C17.6082 1.76588 17.0689 1.41014 16.4753 1.16743C15.8818 0.924727 15.2455 0.799805 14.603 0.799805C13.9605 0.799805 13.3243 0.924727 12.7307 1.16743C12.1371 1.41014 11.5978 1.76588 11.1436 2.21432L10.2009 3.14456L9.25827 2.21432C8.34077 1.30892 7.09638 0.800274 5.79885 0.800274C4.50132 0.800274 3.25693 1.30892 2.33943 2.21432C1.42194 3.11972 0.906494 4.3477 0.906494 5.62813C0.906494 6.90856 1.42194 8.13654 2.33943 9.04194L3.2821 9.97218L10.2009 16.7998L17.1198 9.97218L18.0624 9.04194C18.5169 8.59371 18.8774 8.06152 19.1233 7.47576C19.3693 6.89001 19.4958 6.26218 19.4958 5.62813C19.4958 4.99409 19.3693 4.36625 19.1233 3.7805C18.8774 3.19475 18.5169 2.66255 18.0624 2.21432V2.21432Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}
