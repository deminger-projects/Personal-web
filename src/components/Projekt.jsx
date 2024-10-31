
export default function Projekt(props){

    return(
        <>
            {props.order == 1 ?
            <>
                <div className="project_item is_left">
                        <div className="video_div">
                     
                            <video muted src={props.video_url} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}></video>
                        </div>
                    
                        <div className="text_div">
                            <div className="test1">
                                <p>{props.name}</p>
                                
                                <p>{props.popis}</p>

                                <p>Used technology:</p>

                                <ul>
                                    {props.tech.map((item) => 
                                        <li>{item}</li>
                                    )}
                                </ul>

                                {props.odkaz.map((item, index) => 
                                    <p>Code sample - <a target="_blank" href={item}>{props.url_name[index]}</a></p>
                                )}
                            </div>
                        
                        </div>
            </div>
                    
            </> : <>
            <div className="project_item is_right">

                <div className="text_div">
                        <div className="test1">
                            <p>{props.name}</p>
                            
                            <p>{props.popis}</p>

                            <p>Used technology:</p>

                            <ul>
                                {props.tech.map((item) => 
                                    <li>{item}</li>
                                )}
                            </ul>

                            {props.odkaz.map((item, index) => 
                                <p>Code sample - <a target="_blank" href={item}>{props.url_name[index]}</a></p>
                            )}
                        </div>
                       
                    </div>
                       

                    <div className="video_div">
                        <video muted src={props.video_url} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}></video>
                    </div>
            </div>
                        
            </>}            
        </>
    )
}