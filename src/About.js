import chairc from './assets/chairc.jpg'

const About = () => {
  return (
    <div>
      <h2 className='about-me'>About</h2>
      <div className='pAndImg'>
        <div>
          <p className='p1'>Lorem ipsum sit elit amet, consectetur  dolor adipiscing , sed  eiusmod  ut tempor incididunt labore et dolore do magna aliqua.</p>
          <p className='p2'>Lorem ipsum dolor sit, consectetur adipiscing elit, do eiusmod magna tempor incididunt  aliqua ut  et dolore sed labore.</p>
          <p className='p3'>Lorem ipsum et et magna aliqua dolore magna et dolore aliquadolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <img className='aboutImage' src={chairc} alt='chair drawing' />
      </div>
    </div>
  )
}

export default About;