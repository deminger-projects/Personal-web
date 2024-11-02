import { useNavigate, Link } from "react-router-dom";

export default function Projekt(props){

    var handle_play = (video) => {
        var playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
              // We can now safely pause video...
              //video.pause();
            })
            .catch(error => {
                console.log(error)
              // Auto-play was prevented
              // Show paused UI.
            });
        }
    }

    return(
        <>
            {props.order === 1 ?
            <>
                <div className="project_item is_left">
                        <div className="video_div">
                            <video muted preload="none" src={props.video_url} onMouseOver={event => handle_play(event.target)} onMouseOut={event => event.target.pause()}></video>
                        </div>
                    
                        <div className="text_div">
                            <div className="test1">
                                <p>{props.name} {props.link ? <>- <Link rel="noreferrer" target="_blank" to={props.link}>Try out</Link></> : <></>}</p>
                                
                                <p>{props.popis}</p>

                                <p>Technology used:</p>
{/* 
                                <ul>
                                    {props.tech.map((item, index) => 
                                        <li key={index.toString()}>{item}</li>
                                    )}
                                </ul>

                                {props.odkaz.map((item, index) => 
                                    <p key={index.toString()}>Code sample - <a rel="noreferrer" target="_blank" href={item}>{props.url_name[index]}</a></p>
                                )} */}
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

                            {/* <ul>
                                {props.tech.map((item) => 
                                    <li key={index.toString()}>{item}</li>
                                )}
                            </ul>

                            {props.odkaz.map((item, index) => 
                                <p key={index.toString()}>Code sample - <a rel="noreferrer" target="_blank" href={item}>{props.url_name[index]}</a></p>
                            )} */}
                        </div>
                       
                    </div>
                       

                    <div className="video_div">
                        <video muted preload="none" src={props.video_url} onMouseOver={event => handle_play(event.target)} onMouseOut={event => event.target.pause()}></video>
                    </div>
            </div>
                        
            </>}            
        </>
    )
}