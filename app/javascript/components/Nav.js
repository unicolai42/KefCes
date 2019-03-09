import React from "react"

class Nav extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='Nav_Frame'>
            <div id='Nav_Logo'>
              <div className='Nav_TxtLogo'>KEF</div>
              <img id='Nav_ImgLogo' src="/kefces_logo.png" alt=""/>
              <div className='Nav_TxtLogo'>CES</div>
            </div>
            <div id='Nav_CategoryFrame'>
                <div className='Nav_Categories'>
                    About
                </div>
                <div className='Nav_Categories'>
                    Portofolio
                </div>
                <div onClick={() => {$crisp.push(['do', 'chat:open'])}} className='Nav_Categories' id='Nav_CTA'>
                    WORK WITH US
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav
