function MenuList({NamaMenu, Harga, Stok = true}){
  return(
    <div className="flex flex-col bg-amber-200 w-40">
      <div>
        <h2>
          {NamaMenu}
        </h2>
      </div>
      <div className="flex flex-row gap-3">
        <h3>
          {Harga}
        </h3>
        <p>
          {(Stok) ? <StokHabis Text='Tersedia'/> : <StokHabis Text='Stok Habis'/>}
        </p>
      </div>
    </div>
  )
}

function StokHabis({Text}){
  return <p className="font-bold">{Text}</p>
}

export default MenuList