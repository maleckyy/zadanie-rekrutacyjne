import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom' 


export default function Footer(){

    // useLocation aby sprawdzić na jakies stronie znajduje się uzytkownik aby dodać styl
    const loc = useLocation()
    
    //styl gdy jestesmy na aktywnej stronie
    const style={
        color:'rgb(60, 143, 201)',
        transform: 'scale(1.78)',
    }
    return(
        <footer>
            <Link to='/' className='dogPaw-icon' style={loc.pathname ==="/" ? style : {}}>
                    <FontAwesomeIcon icon={faPaw} />
            </Link>
            <Link to='/search?searchInput='  className='glass-icon' style={loc.pathname ==="/search" ? style : {}}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
        </footer>

    )
}