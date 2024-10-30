import Linky_na_info from "./Linky_na_info";

export default function Osobni_info(){

    return(
        <>
            <div id="osobni_info_cont">
                <div className="info_item">
                    {/* <div id="info">
                        <p>Bc. Dominik Jan Deminger</p>

                        <p>Web developer</p>
                    </div> */}
                    
                    <br />

                    <div id="info_about">
                        <p>Bc. Dominik Jan Deminger</p>

                        <p>Web developer</p>

                        <br />

                        <p>I have been passionate about IT my entire life and have been actively pursuing this path for over seven years.</p>
                        <p>Along the way, I've explored various fields, including networking, hardware, programming, databases, SEO, and data analytics.</p>
                        <p>Currently, I am most interested in web development and am working to further improve my skills in this area.</p>
                        <p>I have designed and developed full-stack applications, as well as some smaller projects, which you can see showcased below.</p>
                        <p>My other passions are art, nature, fashion, and minimalism.</p>
                    </div>
                </div>
               
                <div className="info_item">
                    <Linky_na_info></Linky_na_info>
                </div>

            </div>
        </>
    )

}