import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <nav className="space-y-6 mt-10">
            <a href="" className="flex  items-center gap-3 text-xs font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex  items-center gap-3 text-xs font-semibold text-zinc-200">
              <Search />
              buscar
            </a>
            <a href="" className="flex  items-center gap-3 text-xs font-semibold text-zinc-200">
              <Library />
              Navegar
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 justify-start flex flex-col gap-3  ">
            <button className="w-fit text-zinc-300 hover:text-zinc-100">playlist 1</button>
            <button className="w-fit text-zinc-300 hover:text-zinc-100">playlist 2</button>
            <button className="w-fit text-zinc-300 hover:text-zinc-100">playlist 3</button> 
            <button className="w-fit text-zinc-300 hover:text-zinc-100">playlist 4</button>
            <button className="w-fit text-zinc-300 hover:text-zinc-100">playlist 5</button>
            <button className="w-fit text-zinc-300 hover:text-zinc-100">playlist 6</button>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/20">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/20">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10 mb-5">Good Night</h1>
          <div className="grid grid-cols-3 gap-4">
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong>From Barbie Movie</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong>From Barbie Movie</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong>From Barbie Movie</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong>From Barbie Movie</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong>From Barbie Movie</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong>From Barbie Movie</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            
          </div>

          <h2 className="font-semibold text-2xl mt-10 mb-5">Made by Regis</h2>
          
          <div className="grid grid-cols-5 mt-4 gap-4">
            <div className="flex flex-col gap-2 bg-white/5 p-2 rounded hover:bg-white/10">
              <Image className="w-full" width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Dualipa, Miley Cirus and more</span>
            </div>
            <div className="flex flex-col gap-2 bg-white/5 p-2 rounded hover:bg-white/10">
              <Image className="w-full" width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Dualipa, Miley Cirus and more</span>
            </div>
            <div className="flex flex-col gap-2 bg-white/5 p-2 rounded hover:bg-white/10">
              <Image className="w-full" width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Dualipa, Miley Cirus and more</span>
            </div>
            <div className="flex flex-col gap-2 bg-white/5 p-2 rounded hover:bg-white/10">
              <Image className="w-full" width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Dualipa, Miley Cirus and more</span>
            </div>
            <div className="flex flex-col gap-2 bg-white/5 p-2 rounded hover:bg-white/10">
              <Image className="w-full" width={100} height={100} src="/album.jpg" alt="capa album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Dualipa, Miley Cirus and more</span>
            </div>
          </div>

        </main>
      </div>
      <footer className="flex items-center justify-between bg-zinc-900 border-t border-zinc-700 p-6 fixed bottom-0 w-full">
        <div className="flex items-center gap-2">
          <Image width={48} height={48} src="/album.jpg" alt="capa album" />
          <div className="flex flex-col">
            <strong className="font-normal">Dance The Night</strong>
            <span>Dualipa</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-200 pl-0.5 text-black ml-auto mr-2">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-80 bg-zinc-600">
              <div className="h-1 w-1/6 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:56</span>
            
          </div>
        </div>
        <div></div>
      </footer>

    </div>
  )
}
