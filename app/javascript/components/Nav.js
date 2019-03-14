import React from "react"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        backgroundNav: 'transparent'
    }
  }
  render () {
    window.onscroll = () => {
      if (window.scrollY < 500 && this.state.backgroundNav !== 'transparent')
        this.setState({backgroundNav: 'transparent'})
      else if (window.scrollY >= 500 && this.state.backgroundNav === 'transparent')
        this.setState({backgroundNav: 'rgba(0, 0, 0, 0.2)'})
      console.log(window.scrollY)
      }
    return (
      <React.Fragment>
        <div id='Nav_Frame' style={{backgroundColor: this.state.backgroundNav}}>
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
