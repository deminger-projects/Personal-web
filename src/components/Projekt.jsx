import ohen from "../videos/ohen.mp4"

export default function Projekt(props){


    return(
        <>
            <div className="projekty_item">
                <p>{props.name}</p>

                <video src={ohen} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}></video>
                
                {//<img className="projekt_img" width={"300px"} height={"200px"} src={props.img} alt="projekt"/>
                }

                <div className="tech_body">
                    <p>{props.popis}</p>

                    <p>Used technology:</p>

                    <ul>
                        {props.tech.map((item) => 
                            <li>{item}</li>
                        )}
                    </ul>

                    <p>GitHub repository: <a href={props.odkaz}>{props.odkaz}</a></p>

                </div>

            </div>
        </>
    )
}