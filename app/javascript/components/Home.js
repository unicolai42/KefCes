import React from "react"


class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='Home_Background'>
            <img className='Home_KefCes' id='Home_Ugo' src="/ugo.png" alt="growth profile"/>
            <img className='Home_KefCes' id='Home_Alice' src="/alice.png" alt="storytelling profile"/>
            <div id='Home_Frame'>
                <div id='Home_Baseline'>SCALE YOUR PROJECT</div>
                <div id='Home_Description'>StoryTelling, Editing, Video, Photo, Design, Growth Hacking, Website, Automation. </div>
                <div id='Home_CTAFrame'>
                  <div onClick={() => {$crisp.push(['do', 'chat:open'])}} id='Home_CTA'>WORK WITH US</div>
                </div>
            </div>
        </div>
        <div id='About_Background'>
        {/* <video width="1000" height="1000" autoPlay muted loop onEnded={() => { console.log('Ended Video') }}>
          <source src="/code.mov" type="video/mp4"/>
        </video> */}
          <div id='About_Frame'>
            <div id='About_Title'>MINDSET</div>
            <div id='About_Txt'>{mindsetTxt}</div>
            <div id='About_Line'></div>
            <div id='About_DescriptionFrame'>
              <div className='About_DescriptionBlock'>
                <div className='About_DescriptionTitle'>ALICE, 23</div>
                <div className='About_DescriptionTxt'>{descriptionAlice}</div>
              </div>
              <div className='About_DescriptionBlock'>
                <div className='About_DescriptionTitle'>UGO, 25</div>
                <div className='About_DescriptionTxt'>{descriptionUgo}</div>
              </div>
            </div>
          </div>
        </div>
        <div id='Social_Frame'>
          <div id='Social_NameBackground'>
            <div className='Social_InstaName'></div>
            <div className='Social_InstaName'></div>
            <div className='Social_InstaName'></div>
          </div>
          <div id='Social_InstaAFrame'>
            <div className='Social_NameFrame'>            
              <img className='Social_NameLogo' src="/instagram_logo.png" alt="Instagram Logo"/>
              <div className='Social_NameTxt'>alicehrmtte</div>
            </div>
            <div className='Social_PicturesFrame'>
              <img className='Social_Pictures' src="/instaa1.jpg" alt="picture instagram"/>
              <img className='Social_Pictures' src="/instaa2.jpg" alt="picture instagram"/>
              <img className='Social_Pictures' src="/instaa3.jpg" alt="picture instagram"/>
            </div>
          </div>
          <div id='Social_YoutubeFrame'>
            <div className='Social_NameFrame'>      
              <img className='Social_NameLogo' src="/youtube_logo.png" alt="Youtube Logo"/>
              <div className='Social_NameTxt'>KefCes</div>
            </div>
          </div>
          <div id='Social_InstaUFrame'>
            <div className='Social_NameFrame'>       
              <img className='Social_NameLogo' src="/instagram_logo.png" alt="Instagram Logo"/>
              <div className='Social_NameTxt'>ugo.nicolai</div>
            </div>
            <div className='Social_PicturesFrame'>
              <img className='Social_Pictures' src="/instau1.jpg" alt="picture instagram"/>
              <img className='Social_Pictures' src="/instau2.jpg" alt="picture instagram"/>
              <img className='Social_Pictures' src="/instau3.png" alt="picture instagram"/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mindsetTxt = 'Le monde n’a jamais changé aussi vite qu’aujourd’hui. Internet permet à qui le veut d’apprendre ce qu’il veut, quand il veut, où il veut.\n\nFace à ce constat, on a décidé de partir découvrir le monde et inspirer aà travers notre chaine youtube d\'autres personnes qui voudraient aà leur tour voyager et travailler en même temps.'
const descriptionAlice = 'Le monde n’a jamais changé aussi vite qu’aujourd’hui. Internet permet à qui le veut d’apprendre ce qu’il veut, quand il veut, où il veut.'
const descriptionUgo = 'Le monde n’a jamais changé aussi vite qu’aujourd’hui. Internet permet à qui le veut d’apprendre ce qu’il veut, quand il veut, où il veut.'

export default Home
