import React from "react";

function KatrinePhoto () {
  return(
      <div className="block">
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katriene" width={150} height={150}/>
          <p>Katrine</p>
    </div>
  )
}

function MaiSakuragima() {
    return (
        <div className="block">
            <img src="https://i.pinimg.com/originals/74/b3/67/74b367c4599f2bf627e1a10e8081c1dd.jpg" width={150}
                 height={150} alt=" sakuranjima Mai"/>
            <p>Sakuragima Mai</p>
        </div>
    )
}

function KitagavaMarin (){
    return(
        <div className="block">
            <img src="https://w.forfun.com/fetch/d7/d73b45a4ead91fcbf963a147aca92955.jpeg" width={150} height={150} alt="Kitagava Marin"/>
            <p>Kitagava Marin</p>
        </div>
    )
}

function Karuidzava () {
    return(
        <div className="block">
            <img src="https://i.pinimg.com/736x/2a/bc/0a/2abc0a50bea5d28a59a24b6d76613c02.jpg" width={150} height={150} alt="Karuidzava"/>
            <p>Karuidzava</p>
        </div>
    )
}

export default function Gallery() {
    return (
        <section>
            <h2>It's my gallery</h2>
                <KatrinePhoto/>
                <MaiSakuragima/>
                <KitagavaMarin/>
                <Karuidzava/>
            <h2>The End</h2>
      </section>
  )
}
