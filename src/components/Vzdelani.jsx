
export default function Vzdelani(props){

    return(
        <>
            <div className="vzdelani">
            
                <p>{props.titul + " in"} <strong>{props.obor}</strong> {", " + props.datum_studia} </p>

                <div className="fakulta">
                    <p>{props.fakulta + ", "} <strong>{props.skola}</strong> {props.lokace}</p>
                </div>

            </div>
        </>
    )
}