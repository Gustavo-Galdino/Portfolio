'use client'

import { MouseEvent, useState } from 'react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    setMousePosition({
      x: event.movementX,
      y: event.movementY,
    })
  }
  return (
    <div onMouseMove={handleMouseMove}>
      <header className="relative overflow-hidden bg-purple-700 py-6 text-zinc-100 shadow-md">
        <div>
          <div
            className="absolute h-56 w-56 rounded-full bg-blue-600/50 blur-3xl"
            style={{
              transform: `translate3d(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px, 0)`,
            }}
          />
          <div
            className="absolute left-1/3 top-2/3 h-40 w-40 rounded-full bg-zinc-100 blur-3xl"
            style={{
              transform: `translate3d(${mousePosition.x * 0.3}px, ${
                mousePosition.y * 0.3
              }px, 0)`,
            }}
          />
          <div
            className="absolute left-2/3 h-40 w-40 rounded-full bg-orange-300 blur-3xl"
            style={{
              transform: `translate3d(${mousePosition.x * 0.1}px, ${
                mousePosition.y * 0.1
              }px, 0)`,
            }}
          />
          <div
            className="absolute right-10 top-60 h-60 w-40 rounded-full bg-green-300/50 blur-3xl"
            style={{
              transform: `translate3d(${mousePosition.x * 1}px, ${
                mousePosition.y * 1
              }px, 0)`,
            }}
          />
        </div>
        <div className="container m-auto flex flex-col items-center justify-center px-5">
          <span className="self-start font-bold">OLÁ,👋 EU SOU O GUSTAVO!</span>
          <div className="flex flex-col text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            <strong>FRONT-END</strong>
            <strong className="ml-16 ">DEVELOPER</strong>
          </div>
          <span className="md:w-[432px] md:self-end">
            Me reinventei através de uma transição de carreira e estou aplicando
            todas as minhas experiências anteriores na minha nova trajetória
            como desenvolvedor. Atualmente, estou trabalho como freelancer.
            Pronto para decolar nesta nova jornada! 🚀
          </span>
        </div>
      </header>
    </div>
  )
}
