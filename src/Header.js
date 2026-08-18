import logoC from './assets/logoC.png'

const logoStyle = {
  width: '50px',
  height: 'auto'
}

const Header = () => {
  return (
    <div className='header'>
        <img className='moving' src={logoC} alt='logo' style={logoStyle} />
        <h1 className='brandName'>Grasstone</h1>
      </div>
  )
}

export default Header;