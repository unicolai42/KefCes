import React from "react"


class Home extends React.Component {
  state = {
    instaAliceBackground: 'none',
    youtubeBackground: 'none',
    instaUgoBackground: 'none'
  }

  displayBackgroundInstaAlice = () => {
    console.log('ok')
    this.setState({instaAliceBackground: 'flex'})
  }

  displayBackgroundYoutube = () => {
    console.log('ok')
    this.setState({youtubeBackground: 'flex'})
  }

  displayBackgroundInstaUgo = () => {
    console.log('ok')
    this.setState({instaUgoBackground: 'flex'})
  }

  hideBackgroundInstaAlice = () => {
    console.log('ok')
    this.setState({instaAliceBackground: 'none'})
  }

  hideBackgroundYoutube = () => {
    console.log('ok')
    this.setState({youtubeBackground: 'none'})
  }

  hideBackgroundInstaUgo = () => {
    console.log('ok')
    this.setState({instaUgoBackground: 'none'})
  }

  render () {
    return (
      <React.Fragment>
        <div id='Home_Background'>
          <div id='Home_Filter'></div>
          <img className='Home_KefCes' id='Home_Ugo' src="/ugo.png" alt="growth profile"/>
          <img className='Home_KefCes' id='Home_Alice' src="/alice_home.gif" alt="storytelling profile"/>
          <div id='Home_Frame'>
              <div id='Home_Baseline'>SCALE YOUR PROJECT</div>
              <div id='Home_Description'>StoryTelling, Editing, Video, Photo, Design, Growth Hacking, Website, Automation.</div>
              <div id='Home_CTAFrame'>
                <div onClick={() => {$crisp.push(['do', 'chat:open'])}} id='Home_CTA'>WORK WITH US</div>
              </div>
          </div>
        </div>
        <div id='Portofolio_Background'>
          <div id='Portofolio_FrameUgo'></div>
          <div id='Portofolio_FrameAlice'></div>
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
          <div id='Social_InstaAFrame' onMouseEnter={this.displayBackgroundInstaAlice}>
            <a href='https://www.instagram.com/alicehrmtte/' className='Social_FrameBackground' id='Social_FrameBackgroundLeft' style={{display: this.state.instaAliceBackground}} onMouseLeave={this.hideBackgroundInstaAlice} onClick={(e) => {}}>
              <div id='Social_SubscribeFrame'>
                <img className='Social_SubscribePictureInsta' src="/kefcesInstaa.jpg" alt=""/>
                <div className='Social_SubscribeInfoInsta'>
                  <div className='Social_SubscribeName'>alicehrmtte</div>
                  <div className='Social_SubscribeButtonInsta'>Follow</div>
                </div>
                <div className='Social_SubscribeInfoInsta'>
                  <div className='Social_SubscribeInfoFollow'>12 posts</div>
                  <div className='Social_SubscribeInfoFollow'>179 followers</div>
                  <div className='Social_SubscribeInfoFollow'>131 following</div>
                </div>
              </div>
            </a>
            <div className='Social_NameFrame'>            
              <img className='Social_NameLogo' src="/instagram_logo.png" alt="Instagram Logo"/>
              <div className='Social_NameTxt'>alicehrmtte</div>
            </div>
            <div className='Social_PicturesFrame'>
              <div className='Social_PicturesBlock'>
                <img className='Social_Pictures' src="/instaa1.jpg" alt="picture instagram"/>
                <img className='Social_Pictures Social_PicturesRight' src="/instaa2.jpg" alt="picture instagram"/>
              </div>
              <div className='Social_PicturesBlock Social_PicturesBlockBottom'>
                <img className='Social_Pictures' src="/instaa3.jpg" alt="picture instagram"/>
                <img className='Social_Pictures Social_PicturesRight' src="/instaa4.jpg" alt="picture instagram"/>
              </div>
            </div>
          </div>
          <div id='Social_YoutubeFrame' onMouseEnter={this.displayBackgroundYoutube}>
            <a href='https://www.youtube.com/channel/UCkbf7YsXr5GVT-aKWDEv-Gw' className='Social_FrameBackground' style={{display: this.state.youtubeBackground}} onMouseLeave={this.hideBackgroundYoutube} onClick={(e) => {}}>
              <div id='Social_SubscribeFrame'>
                <div id='Social_SubscribeInfoYoutube'>
                  <img id='Social_SubscribePictureYoutube' src="/kefcesYoutube.png" alt=""/>
                  <div id='Social_SubscribeTxt'>
                    <div id='Social_SubscribeTitle'>KefCes</div>
                    <div id='Social_SubscribeSubscribersNumber'>81 subscribers</div>
                  </div>
                </div>
                <div id='Social_SubscribeButtonYoutube'>SUBSCRIBE</div>
              </div>
            </a>            
            <div className='Social_NameFrame'>      
              <img className='Social_NameLogo' src="/youtube_logo.png" alt="Youtube Logo"/>
              <div className='Social_NameTxt'>KefCes</div>
            </div>
            <img id='Social_YoutubePicture' src="/youtubeminiature.png" alt=""/>
            <img id='Social_YoutubePlayButton' src="/playButton.png" alt=""/>
          </div>
          <div id='Social_InstaUFrame' onMouseEnter={this.displayBackgroundInstaUgo}>
            <a href='https://www.instagram.com/ugo.nicolai/' className='Social_FrameBackground' id='Social_FrameBackgroundRight' style={{display: this.state.instaUgoBackground}} onMouseLeave={this.hideBackgroundInstaUgo} onClick={(e) => {}}>
              <div id='Social_SubscribeFrame'>
                <img className='Social_SubscribePictureInsta' src="/kefcesInstau.jpg" alt=""/>
                <div className='Social_SubscribeInfoInsta'>
                  <div className='Social_SubscribeName'>ugo.nicolai</div>
                  <div className='Social_SubscribeButtonInsta'>Follow</div>
                </div>
                <div className='Social_SubscribeInfoInsta'>
                  <div className='Social_SubscribeInfoFollow'>37 posts</div>
                  <div className='Social_SubscribeInfoFollow'>236 followers</div>
                  <div className='Social_SubscribeInfoFollow'>68 following</div>
                </div>
              </div>
            </a>
            <div className='Social_NameFrame'>       
              <img className='Social_NameLogo' src="/instagram_logo.png" alt="Instagram Logo"/>
              <div className='Social_NameTxt'>ugo.nicolai</div>
            </div>
            <div className='Social_PicturesFrame'>
              <div className='Social_PicturesBlock'>
                <img className='Social_Pictures' src="/instau1.jpg" alt="picture instagram"/>
                <img className='Social_Pictures Social_PicturesRight' src="/instau2.jpg" alt="picture instagram"/>
              </div>
              <div className='Social_PicturesBlock Social_PicturesBlockBottom'>
                <img className='Social_Pictures' src="/instau3.png" alt="picture instagram"/>
                <img className='Social_Pictures Social_PicturesRight' src="/instau4.png" alt="picture instagram"/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mindsetTxt = 'Avec le réchauffement climatique la fonte du permafrost s’accélère.\n60% des animaux sauvages sur Terre ont disparu en moins de 50 ans.\nUn tier de la nourriture que l’on produit chaque année part à la poubelle.\n1% de la population détient 50% de la richesse mondiale.\n\nBref on a conscience que c’est la merde et on veut aider des entreprises qui se bougent à changer les choses plus rapidement.'
const descriptionAlice = 'Le monde n’a jamais changé aussi vite qu’aujourd’hui. Internet permet à qui le veut d’apprendre ce qu’il veut, quand il veut, où il veut.\n\nLe monde n’a jamais changé aussi vite qu’aujourd’hui. Internet permet à qui le veut d’apprendre ce qu’il veut, quand il veut, où il veut.'
const descriptionUgo = 'Le monde n’a jamais changé aussi vite qu’aujourd’hui. Internet permet à qui le veut d’apprendre ce qu’il veut, quand il veut, où il veut.\n\nLe monde n’a jamais changé aussi vite qu’aujourd’hui. Internet permet à qui le veut d’apprendre ce qu’il veut, quand il veut, où il veut.'

export default Home
