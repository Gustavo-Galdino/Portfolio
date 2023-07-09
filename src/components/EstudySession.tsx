import { ArrowRight, Github } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface EstudySessionProps {
  image: StaticImageData
  title: string
  subtitle: string
  vercel: string
  github: string
}

export function EstudySession({
  image,
  subtitle,
  title,
  vercel,
  github,
}: EstudySessionProps) {
  return (
    <div className="flex h-full flex-col items-center justify-between">
      <Image
        src={image}
        className="w-full rounded-lg bg-zinc-500 shadow-lg xl:w-2/3"
        alt=""
        width={400}
        height={400}
      />

      <div className="flex w-full flex-col items-center pt-2">
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold">{title}</h4>
          <span className="-mt-1 text-sm text-zinc-700">{subtitle}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Link
            target="_blank"
            href={vercel}
            className="flex items-center gap-1 rounded bg-violet-500 px-2 py-1 font-bold text-zinc-100 shadow-md hover:bg-violet-400 hover:text-zinc-50"
          >
            Ir para Vercel <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            target="_blank"
            href={github}
            className="flex items-center gap-1 rounded bg-zinc-600 px-2 py-1 font-bold text-zinc-100 shadow-md hover:bg-zinc-500 hover:text-zinc-50"
          >
            <Github className="h-4 w-4" />
            Ir para Repositorio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
