import React from "react"

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='Home_Background'>
            <div id='Home_Frame'>
                <div id='Home_Baseline'>SCALE YOUR PROJECT</div>
                <div id='Home_Description'>StoryTelling, Editing, Video, Photo, Design, Growth Hacking, Website, Automation. </div>
                <div id='Home_CTAFrame'>
                  <div onClick={() => {$crisp.push(['do', 'chat:open'])}} id='Home_CTA'>WORK WITH US</div>
                </div>
            </div>
        </div>
        <div id='Skill_Background'>
          <div id='Skill_Frame'>
          </div>
        </div>
        <div id='Social_Frame'>
          <div id='Social_InstaAFrame'>
          </div>
          <div id='Social_YoutubeFrame'>
          </div>
          <div id='Social_InstaUFrame'>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
