import React from 'react';
import { useSearchParams, useNavigation } from 'react-router-dom';
import Dog from './Dog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear} from '@fortawesome/free-solid-svg-icons'


export default function SearchPage(){

    // useRef aby po wyszukaniu ustawić znów focus dla inputa
    const inputRef = React.useRef(null)

    // useSearchParams aby pobrać nazwę rasy, którą użytkownik wybrał z listy wszystkich ras
    const [searchParams, setSearchParams] = useSearchParams()

    // data czyli pobrane dane dotyczące wyszukanej przez użytkownika rasy
    const[data, setData] = React.useState([])

    // boolean, true gdy przy pobieraniu danych wystąpi błąd. Działa przy błędnej rasie psa oraz złym adresie API
    const [isError, setIsError] = React.useState(false)

    // nazwa aktualnie wyszukanej rasy psa
    const[breedName, setBreedName] = React.useState('')

    // pobranie nazwy rasy psa w momencie wybrania psa z listy ze strony głównej
    const breedParams = searchParams.get('searchInput')

    
    // uzywana do pobrania danych w momencie przejscia ze strony głównej poprzez klkniecie na rase
    React.useEffect(()=>{
        if(breedParams.length > 0){
            searchByBreed()
        }
    },[])

    // funkcja pobierająca z API wpisaną przez uzytkownika rase, wywołuje ją przycisk
    function searchByBreed(){

        // jeśli uzytkownik nie wpisze nic, funkcja sięnie wywoła
        if(breedParams.length > 0){

            const textWithNoSpaces = breedParams.trim().split(' ').join('')
            const url = `https://dog.ceo/api/breed/${textWithNoSpaces}/images/random`

            fetch(url)
            .then(res=>{
                if(!res.ok){
                    setIsError(true)
                }
                return res.json()})
            .then(data=>setData(data))

            if(data.status ==='error'){
                setIsError(true)
            }else{
                setIsError(false)
            }
            setBreedName(breedParams)
            setSearchParams({searchInput: ''})
            inputRef.current.focus()
        }
    }

    //funkcja zbierająca input uzytkownika i przypisująca go do searchParams
    function handleTextChange(event){
       setSearchParams({searchInput: event.target.value})
    }

    //Komponent Error, wyswietlany gdy wystąpi błąd wyszukanie lub pobrania z API
    function Error(){
        return(
        <div className='error-component'>
            <FontAwesomeIcon icon={faFaceSadTear} />
            <div className='error'>Error: {data.message}</div>
        </div>
        )
    }
    
    return(
        <div className='search-component'>

            <p>Szukaj a znajdziesz ;)</p>

            <div className='search-component__box'>

                <div className='form'>
                    <div className='form__label'>Wpisz rasę, której szukasz</div>
                        <input
                            name='searchInput' 
                            ref={inputRef} 
                            value={breedParams}
                            placeholder='np. Buldog angielski' 
                            onChange={handleTextChange} 
                            />
                </div>

                {/* przycisk wyłączony jesli uzytkownik nie wpisał nic w pole wyszukiwania */}
                <button
                    disabled={breedParams.length == 0} 
                    onClick={searchByBreed}
                >Szukaj</button>
            </div>

            {data.status === "success" ? <Dog name={breedName} src={data.message}/> : isError&&<Error/>}
        </div>
    )
}