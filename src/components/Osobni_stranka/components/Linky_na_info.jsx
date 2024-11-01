import resume_eng from "../../../resumes/resume_english.pdf"
//import resume_cz from "../../resumes/resome_cesky.pdf"

import linked_in_logo from "../../../images/LinkedIn_logo_initials.png"
import github_logo from "../../../images/github_logo.png"
import resume_logo from "../../../images/resume_logo.png"

export default function Linky_na_info(){

    return(
        <>
            <div id="linky">

                <div className="link_cont">
                    <div>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/deminger" target="_blank" className="link_logo"><img src={linked_in_logo} alt="LinkedIn" height={"50px"} width={"50px"} /></a>
                        
                        <a rel="noreferrer" href="https://github.com/deminger-projects" target="_blank" className="link_logo"><img src={github_logo} alt="GitHub" height={"50px"} width={"50px"} /></a>

                        <a rel="noreferrer" href={resume_eng} target="_blank" className="link_logo"><img src={resume_logo} alt="Resume" height={"50px"} width={"50px"} /></a>
                    </div>
                    
                    <div>
                        <p>dominikjan1@gmail.com</p>

                    </div>                
                </div>
                
            </div>
        </>
    )

}