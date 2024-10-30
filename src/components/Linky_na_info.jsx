import resume_eng from "../resumes/resome_english.pdf"
import resume_cz from "../resumes/resome_cesky.pdf"


export default function Linky_na_info(){

    return(
        <>
            <div id="linky">

                <div className="link_cont">
                    <p><a className="odkaz" href="https://www.linkedin.com/in/deminger" target="_blank">Linkedin: linkedin.com/in/deminger</a></p>

                    <br />
                
                    <p>Email: dominikjan1@gmail.com</p>
                </div>

                <div className="link_cont">
                    <a className="odkaz" href={resume_cz} target="_blank" download><button className="link_button">Resume Czech</button></a>

                    <br />
                    <br />
                    
                    <a className="odkaz" href={resume_eng} download><button className="link_button">Resume English</button></a>

                </div>

                
            </div>
        </>
    )

}