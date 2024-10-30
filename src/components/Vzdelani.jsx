export default function Vzdelani(props){

    return(
        <>
            <div className="vzdelani">
                <div className="vzdelani_item">
                    <p>{"Field of study: " + props.obor}</p>
                    <p>{"Institute: " + props.fakulta}</p>
                    <p>{"Timeline: " + props.datum_studia}</p>
                </div>
                

             
            </div>
        </>
    )
}