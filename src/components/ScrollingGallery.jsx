import { useEffect } from 'react'

const images = [
  '/gallery/barista-1.jpg',
  '/gallery/barista-2.jpg',
  '/gallery/barista-3.jpg',
  '/gallery/barista-4.jpg',
  // Duplicate images for seamless loop
  '/gallery/barista-1.jpg',
  '/gallery/barista-2.jpg'
]

function ScrollingGallery() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900 z-10" />
      <div className="animate-scroll flex flex-col gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-48 w-full rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
          >
            <img
              src={image}
              alt={`Barista training ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingGallery
