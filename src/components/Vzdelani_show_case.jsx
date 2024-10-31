import Vzdelani from "./Vzdelani";

export default function Vzdelani_show_case(){

    return(
        <>

            <div>
                <h1>Education</h1>
                    <div className="skills_item">

                    <Vzdelani obor={"Ing. in Information systems risk management"} fakulta={"Institute of forensic engineering VUT, Brno"} datum_studia={"Current study"}></Vzdelani>

                    <br />

                    <Vzdelani obor={"Bc. in Management informatics"} fakulta={"Faculty of business and management VUT , Brno"} datum_studia={"September 2021 — June 2024"}></Vzdelani>

                    <br />

                    <Vzdelani obor={"Information technology"} fakulta={"Secondary vocational school EDUCAnet Brno, o. p. s., Brno"} datum_studia={"September 2017 — June 2021"}></Vzdelani>
                </div>
            </div>
            
           
        </>
    )
}