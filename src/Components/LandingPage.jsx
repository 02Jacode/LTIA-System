import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="header">
                <div className="dilglogo">
                    <img src="/dilglogo.png" alt="DILG Logo" />
                </div>
                <h1>Lupong Tagapamayapa Incentives Award (LTIA)</h1>
            </div>

            <div className="content">
                <div className="menu">
                    <ul>
                        <li><a href="#" className="btn-67">Home</a></li>
                        <li><a href="AssessorLogin.html" className="btn-67">Assessor</a></li>
                        <li><a href="FocalLogin.html" className="btn-67">Focal</a></li>
                    </ul>
                </div>
                <div className="infos">
                    The <b>Lupong Tagapamayapa Incentives Award (LTIA)</b> was conceptualized and implemented in 1982 and has been elevated to a Presidential Award pursuant to Executive Order No. 394 s. 1997 entitled “Establishing the Lupong Tagapamayapa Incentives Award”. <br /><br />
                    Avenue of granting economic and other incentives to the Lupong Tagapamapa (LT) for their outstanding contributions to attain the objectives of the Katarungang Pambarangay (KP).
                </div>
            </div>

            <div className="footer">
                <div className="ltialogo">
                    <img src="/ltialogo.png" alt="LTIA Logo" />
                </div>
                <footer>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L30,224C60,224,120,224,180,208C240,192,300,160,360,149.3C420,139,480,149,540,160C600,171,660,181,720,154.7C780,128,840,64,900,58.7C960,53,1020,107,1080,117.3C1140,128,1200,96,1260,69.3C1320,43,1380,21,1410,10.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                </footer>
            </div>
        </div>
    );
}

export default LandingPage;
