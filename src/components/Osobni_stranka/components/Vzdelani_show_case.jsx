import Vzdelani from "./Vzdelani";

export default function Vzdelani_show_case(){

    return(
        <>
            <div className="skills_test">
                <h1>Education</h1>
                
                    <div className="skills_item">

                    <Vzdelani titul={"Ing."} obor={"Information systems risk management"} fakulta={"Institute of forensic engineering"} skola={"VUT"} lokace={"Brno, Czech republic"} datum_studia={"Current study"}></Vzdelani>

                    <br />

                    <Vzdelani titul={"Bc."} obor={"Management informatics"} fakulta={"Faculty of business and management"} skola={"VUT"} lokace={"Brno, Czech republic"} datum_studia={"September 2021 — June 2024"}></Vzdelani>

                    <br />

                    <Vzdelani titul={"Diploma"} obor={"Information technology"} fakulta={"Secondary vocational school"} skola={"EDUCAnet"} lokace={"Brno, Czech republic"} datum_studia={"September 2017 — June 2021"}></Vzdelani>
                </div>
            </div>
        </>
    )
}