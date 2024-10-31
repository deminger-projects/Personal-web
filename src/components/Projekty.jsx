import joynda_image from "../images/joynda_image.png"
import Projekt from "./Projekt"

import ohen from "../videos/ohen.mp4"
import mapa_video from "../videos/mapa_video.mp4"
import generator_video from "../videos/generator_video.mp4"

export default function Projekty(){

    return(
        <>
            <div id="projekty_cont_big">
                <Projekt order={1} name={"E-shop"} img={joynda_image} popis={"A full-stack application developed for a clothing brand."} tech={["React", "Node.js (Express.js)", "MySQL", "TypeScript"]} odkaz={["https://github.com/deminger-projects/E-shop-frontend.git", "https://github.com/deminger-projects/E-shop-backend.git"]} url_name={["Frontend", "Backend"]} video_url={ohen}></Projekt>

                <Projekt name={"Openlayers map"} img={joynda_image} popis={"A map with custom components enabling measurement functionalities across the map."} tech={["React", "OpenLayers"]} odkaz={["https://github.com/deminger-projects/OpenLayers-Map.git"]} url_name={["Map"]} video_url={mapa_video}></Projekt>

                <Projekt order={1} name={"Email generator"} img={joynda_image} popis={"The application generates emails, verifies both their format and existence, and stores them in the database."} tech={["Python", "MongoDB"]} odkaz={["https://github.com/deminger-projects/Email-generator.git"]} url_name={["Email generator"]} video_url={generator_video}></Projekt>

                <Projekt name={"Personal web page"} img={joynda_image} popis={"A personal website that highlights my past projects and professional experience. "} tech={["React", "HTML", "CSS"]} odkaz={["https://github.com/pikosoZBrna/nodejs.git"]} url_name={["Personal site"]} video_url={ohen}></Projekt>

            </div>  
        </>
    )

}