import { RiAsterisk } from "@remixicon/react"

export default function InputOrderNote(){
  return(
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 pt-4">
        <label className="flex flex-row text-sm text-stone-600">
          Nama Anda
          <RiAsterisk className="w-3 h-3"/>
        </label>
        <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-2xl px-5 py-3 shadow-sm">
          <input
            type="text"
            placeholder="Adul..."
            className="flex-1 text-base bg-transparent outline-none text-stone-800 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <label className="text-sm text-stone-600">
          Tambahkan Catatan
        </label>
        <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-2xl px-5 py-3 shadow-sm">
          <textarea
            type="text"
            placeholder="Takoyaki Spesial sausnya cabainya sedikit..."
            className="h-24 flex-1 text-base bg-transparent outline-none text-stone-800 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  )
}