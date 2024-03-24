import Wrapper from "../assets/wrappers/LandingPage"
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom"
import { Logo } from "../components"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Poutine cupping cliche, mukbang palo santo kale chips blackbird
            spyplane tumblr roof party taiyaki kogi ascot VHS. Kogi tumblr
            sustainable fixie, direct trade paleo tbh woke flannel keytar migas
            yr 8-bit mustache. Pabst skateboard farm-to-table, affogato raw
            denim intelligentsia fingerstache biodiesel blue bottle. Art party
            literally humblebrag copper mug semiotics, ugh 90's mukbang
            mumblecore la croix williamsburg big mood retro. Succulents
            single-origin coffee farm-to-table actually. Pickled celiac neutra
            woke gatekeep, pour-over messenger bag shoreditch beard williamsburg
            bruh heirloom. Authentic raw denim banh mi artisan ascot.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
