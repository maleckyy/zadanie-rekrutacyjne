

import React from "react";

export default function Dog({src,name}){
    const dogDesc = 'Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z ogrodem. Wysokość w kłębie 30-35 cm, masa ciała 22-25 kg. Sierść krótka, delikatna, lśniąca, umaszczenie płowe, pręgowane lub łaciate. Charakter czujny, śmiały, oddany, odważny, łagodny, czasem uparty. W zależności od dnia pokazuje różne oblicza swojej natury.'

    return(
        <div className="dog-component">

            <div className="dog-component__dog-container">
                <div className="image-container">
                    <img src={src} alt='dog photo'/>
                </div>
                <div className="dog-name">
                    {name.charAt(0).toUpperCase()+name.slice(1)}
                </div>
                <div className="desc">
                    {dogDesc}
                </div>
            </div>
        </div>

    )
    
}
