import { useNavigate, Link } from "react-router-dom";

export default function Projekt(props){

    const navigate = useNavigate();

    return(
        <>
            {props.order === 1 ?
            <>
                <div className="project_item is_left">
                        <div className="video_div">
                     
                            <video muted src={props.video_url} onMouseOver={event => {if(!(event.target.currentTime > 0 && !event.target.paused && event.target.readyState > event.target.HAVE_CURRENT_DATA)){event.target.play()}}} onMouseOut={event => event.target.pause()}></video>
                        </div>
                    
                        <div className="text_div">
                            <div className="test1">
                                <p>{props.name} {props.link ? <>- <Link rel="noreferrer" target="_blank" to={props.link}>Try out</Link></> : <></>}</p>
                                
                                <p>{props.popis}</p>

                                <p>Technology used:</p>

                                <ul>
                                    {props.tech.map((item) => 
                                        <li>{item}</li>
                                    )}
                                </ul>

                                {props.odkaz.map((item, index) => 
                                    <p>Code sample - <a rel="noreferrer" target="_blank" href={item}>{props.url_name[index]}</a></p>
                                )}
                            </div>
                        
                        </div>
            </div>
                    
            </> : <>
            <div className="project_item is_right">

                <div className="text_div">
                        <div className="test1">
                            <p>{props.name} {props.link ? <>- <Link rel="noreferrer" target="_blank" to={props.link}>Try out</Link></> : <></>}</p>
                            
                            <p>{props.popis}</p>

                            <p>Technology used:</p>

                            <ul>
                                {props.tech.map((item) => 
                                    <li>{item}</li>
                                )}
                            </ul>

                            {props.odkaz.map((item, index) => 
                                <p>Code sample - <a rel="noreferrer" target="_blank" href={item}>{props.url_name[index]}</a></p>
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