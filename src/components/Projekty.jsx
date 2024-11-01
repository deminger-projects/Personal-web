import { Suspense, lazy } from 'react';

import mapa_video from "../videos/mapa_video.mp4"
import generator_video from "../videos/generator_video.mp4"
import ehop_video from "../videos/eshop_video.mp4"
import persinal_video from "../videos/personal_video.mp4"

const Projekt = lazy(() => (import("./Projekt")));

export default function Projekty(){

    return(
        <>
            <div id="projekty_cont_big">

                <Suspense fallback={<><p>Loading project</p></>}>
                    
                    <Projekt order={1} name={"Openlayers map"} popis={"A map with custom components enabling measurement functionalities across the map."} tech={["React", "OpenLayers"]} odkaz={["https://github.com/deminger-projects/OpenLayers-Map.git"]} url_name={["Map"]} video_url={mapa_video}></Projekt>

                    <Projekt name={"Email generator"} popis={"The application generates emails, verifies both their format and existence, and stores them in the database."} tech={["Python", "MongoDB"]} odkaz={["https://github.com/deminger-projects/Email-generator.git"]} url_name={["Email generator"]} video_url={generator_video}></Projekt>

                    <Projekt order={1} name={"E-shop"} popis={"A personal website that highlights my past projects and professional experience."} tech={["React", "Node.js (Express.js)", "MySQL", "TypeScript"]} odkaz={["https://github.com/deminger-projects/E-shop-frontend.git", "https://github.com/deminger-projects/E-shop-backend.git"]} url_name={["Frontend", "Backend"]} video_url={ehop_video}></Projekt>

                    <Projekt name={"Personal web page"} popis={"A personal website that highlights my past projects and professional experience."} tech={["React", "HTML", "CSS"]} odkaz={["https://github.com/deminger-projects/Personal-web.git"]} url_name={["Personal site"]} video_url={persinal_video}></Projekt>

                </Suspense>

            </div>  
        </>
    )

}