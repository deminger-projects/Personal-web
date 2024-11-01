import Osobni_info from "./components/Osobni_info";
import Projekty from "./components/Projekty";
import Kontakt from "./components/Kontakt";
import Navigace from "./components/Navigace";
import Vzdelani_show_case from "./components/Vzdelani_show_case";
import Dovednosti from "./components/Dovednosti";

export default function Main(){

    return(
        <>
            <Osobni_info></Osobni_info>
    
            <Projekty></Projekty>

             <div id="skills">
                <Vzdelani_show_case></Vzdelani_show_case>
                <Dovednosti></Dovednosti>
            </div>
        </>
    )

}