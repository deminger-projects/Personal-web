import edu_logo from "./../images/edu_logo.png"

export default function Vzdelani(props){

    return(
        <>
            <div className="vzdelani">

                <p>{props.obor + ", " + props.datum_studia}</p>

                <div className="fakulta">
                    <p>{props.fakulta}</p>
                </div>

            </div>
        </>
    )
}