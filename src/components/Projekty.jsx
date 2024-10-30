import joynda_image from "../images/joynda_image.png"
import Projekt from "./Projekt"

export default function Projekty(){

    return(
        <>

        <div id="projekty_cont">
            <Projekt name={"Joynda"} img={joynda_image} popis={"Eshop aplikace vytvoření za pomoci Node.js, React a MySQL."} tech={["React", "Node.js (Express.js)", "MySQL", "TypeScript"]} odkaz={"https://github.com/pikosoZBrna/nodejs.git"}></Projekt>

            <Projekt name={"Openlayers mapa"} img={joynda_image} popis={"Mapa z komponenty, které využívají možnosti Openlayers."} tech={["React", "OpenLayers"]} odkaz={"https://github.com/pikosoZBrna/nodejs.git"}></Projekt>

            <Projekt name={"Email generator"} img={joynda_image} popis={"Aplikace generuje a emailové adresy, které testuje a ukládá do databáze."} tech={["Python", "MongoDB"]} odkaz={"https://github.com/pikosoZBrna/nodejs.git"}></Projekt>

            <Projekt name={"Personal web page"} img={joynda_image} popis={"And this :)"} tech={["React"]} odkaz={"https://github.com/pikosoZBrna/nodejs.git"}></Projekt>

        </div>  
        </>
    )

}