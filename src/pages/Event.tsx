import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <div className="flex flex-col">
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div>
              <h1 className="text-blue-500 text-[2.5rem] leading-tight flex flex-col items-center mt-12 p-5">
                Escolha ao lado a aula em que você parou.
              </h1>
              <img
                src="/src/assets/code-mackup.png"
                className="max-w-[1000px] bg-no-repeat flex flex-col items-center mx-8 "
                alt=""
              />
            </div>
          )}
        </div>
        <div>
          <main className="flex flex-1">
            <Sidebar />
          </main>
        </div>
      </div>
    </div>
  )
}
