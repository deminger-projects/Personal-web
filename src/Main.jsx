import Osobni_info from "./components/Osobni_stranka/components/Osobni_info";
import Projekty from "./components/Osobni_stranka/components/Projekty";
//import Kontakt from "./components/Osobni_stranka/Kontakt";
//import Navigace from "./components/Osobni_stranka/Navigace";
import Vzdelani_show_case from "./components/Osobni_stranka/components/Vzdelani_show_case";
import Dovednosti from "./components/Osobni_stranka/components/Dovednosti";

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