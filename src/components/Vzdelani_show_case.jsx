import Vzdelani from "./Vzdelani";

export default function Vzdelani_show_case(){

    return(
        <>
            <div id="vzdelani_cont">
                <h1>Education</h1>

                <Vzdelani obor={"Field of information systems risk management"} fakulta={"Ing. Institute of forensic engineering VUT, Brno"} datum_studia={"Current study"}></Vzdelani>

                <br />

                <Vzdelani obor={"Field of Management Informatics"} fakulta={"Bc. Faculty of business and management VUT , Brno"} datum_studia={"September 2021 — June 2024"}></Vzdelani>

                <br />

                <Vzdelani obor={"Field of information technology"} fakulta={"Secondary vocational school EDUCAnet Brno, o. p. s., Brno"} datum_studia={"September 2017 — June 2021"}></Vzdelani>
            </div>
           
        </>
    )
}