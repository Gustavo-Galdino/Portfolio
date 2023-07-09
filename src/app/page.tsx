import { EstudySession } from '@/components/EstudySession'
import { Email } from '@/components/Email'
import { Hero } from '@/components/Hero'
import { Links } from '@/components/Links'
import { Linkedin, Github, FileText } from 'lucide-react'
import Link from 'next/link'

import arrow from '@/assets/arrow.png'
import coffe from '@/assets/coffee-delivery.png'
import blog from '@/assets/github-blog.png'
import shop from '@/assets/ignite-shop.png'

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="mt-2 flex flex-col gap-2 px-5 py-1 md:flex-row md:justify-end">
        <div className="flex items-center justify-between md:gap-2">
          <Links text="Linkedin">
            <Link
              href="https://www.linkedin.com/in/gustavo-galdinom/"
              target="_blank"
              className="rounded-md bg-blue-500 p-1.5 text-zinc-100"
            >
              <Linkedin />
            </Link>
          </Links>

          <Links text="Github">
            <Link
              href="https://github.com/Gustavo-Galdino"
              target="_blank"
              className="rounded-md bg-gray-600 p-1.5 text-zinc-100"
            >
              <Github />
            </Link>
          </Links>

          <Links text="Curriculo">
            <Link
              href="https://drive.google.com/file/d/1jWq6hvGiLW0oTSri2t393QipgLSVkFtg/view?usp=sharing"
              className="rounded-md bg-orange-300 p-1.5"
            >
              <FileText />
            </Link>
          </Links>
        </div>

        <Email />
      </div>

      <section className="mb-40">
        <div className="my-16 flex flex-col items-center">
          <h2 className="text-center text-4xl font-bold uppercase">
            Projetos de estudos
            <div className="m-auto w-2/4 border border-zinc-500" />
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
          <EstudySession
            image={arrow}
            title="Arrow - Estudo Fullstack"
            subtitle="Next13 - TypeScript - Prisma - Banco de Dados"
            vercel="https://arrow-two.vercel.app/"
            github="https://github.com/Gustavo-Galdino/Arrow"
          />

          <EstudySession
            image={shop}
            title="E-Commerce com Stripe"
            subtitle="React|Next - TypeScript - Stripe - API"
            vercel="https://desafio04-ignite-shop.vercel.app/"
            github="https://github.com/Gustavo-Galdino/desafio04-IgniteShop"
          />
          <EstudySession
            image={blog}
            title="Github Blog - Integração com API do Github"
            subtitle=" React | Vite - TypeScript - Zod - Styled Components - Axios"
            vercel="https://desafio03-github-blog.vercel.app/"
            github="https://github.com/Gustavo-Galdino/desafio03-Github-Blog"
          />
          <EstudySession
            image={coffe}
            title="Coffe Delivery - Estudos de Estados React"
            subtitle="React | Vite - TypeScript - Styled Components - React Hook Form"
            vercel="https://desafio02-coffee-deliverry.vercel.app/"
            github="https://github.com/Gustavo-Galdino/Desafio02-CoffeeDeliverry"
          />
        </div>
      </section>

      {/* <div className="mt-20 flex flex-col items-center space-y-4 bg-zinc-200 py-5 shadow-md">
        <h2 className="text-2xl font-bold uppercase">Projetos Profissionais</h2>

        <div className="flex items-center justify-between gap-4">
          <div className="h-96 w-96 rounded-lg bg-zinc-500 shadow-lg"></div>
          <div className="h-96 w-96 rounded-lg bg-zinc-500 shadow-lg"></div>
        </div>
      </div> */}

      {/* <footer className="mt-14 flex flex-col items-center justify-center bg-zinc-200 p-10 shadow-md">
        <h2 className="mb-10 text-2xl font-bold uppercase">Sobre mim</h2>

        <div className="flex items-center gap-4">
          <div className="h-56 w-56 rounded-lg bg-zinc-100 shadow-lg"></div>
          <p className="w-96 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            provident repellendus voluptates blanditiis? Voluptas praesentium
            ipsum aliquam sint repudiandae ipsa, debitis laudantium, quo porro
            deserunt asperiores accusantium illo, consequatur maxime!
          </p>
        </div>
      </footer> */}
    </main>
  )
}
