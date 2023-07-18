import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom'

function Home() {
  //State trzymający pobraną listę nazw ras psów z API
  const [dogsData, setDogsData] = React.useState({})

  const apiUrl = 'https://dog.ceo/api/breeds/list/all'

  //pobranie z API listy ze wszystkimi rasami psów z dostepnej bazy przy załadowaniu komponentu
  React.useEffect(() => {
    fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>setDogsData(data.message))
  }, []);

  const breedList = Object.getOwnPropertyNames(dogsData)

  // lista wszystkich linków z rasami psów, link prowadzi do strony wyszukiwania podając przy tym searchParam
  const breedJSXList = breedList.map(item=>{
    return<Link key={item} to={`/search?searchInput=${item}`}>{item}</Link>
  })
  
  return (
    <div className='list-Page'>
      <div className='list-Page__title'>Lista ras</div>
      <div className='list-Page__breedList'>
        {breedJSXList}
      </div>
    </div>
  );
}

export default Home;
