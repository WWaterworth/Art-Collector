import React from 'react';

// import { fetchQueryResultsFromTermAndValue } from '../api';

/* const Searchable = (props) => {
  const { searchTerm, searchValue, setIsLoading, setSearchResults} = props

  return(
   <span className="content">
    <a href="#" onClick={async (event) => {
      event.preventDefault();
      setIsLoading(true);

      try {
        const data = await fetchQueryResultsFromTermAndValue(searchTerm, searchValue);
        setSearchResults(data);
      } catch(err) {
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    }}>SOME SEARCH TERM</a>
   </span>
  )
} */


const Feature = (props) => {
  const { title, dated, primaryImageURL, description, culture, style, technique, medium, dimensions, department, division, contact, creditline } = props;
  

return (
   
     <div className="object-feature">
       <header>
         <h3>{title}</h3>
         <h4>{ dated }</h4>
       </header>
       <section className="facts">
         <ul>
           <li>
             { culture ?
             <React.Fragment>
              <span className="title">Culture: </span>
              <span className="content"> { culture }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { medium ?
             <React.Fragment>
              <span className="title">Medium: </span>
              <span className="content"> { medium }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { dimensions ?
             <React.Fragment>
              <span className="title">Dimensions: </span>
              <span className="content"> { dimensions }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { style ?
             <React.Fragment>
              <span className="title">Style: </span>
              <span className="content"> { style }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { technique ?
             <React.Fragment>
              <span className="title">Technique: </span>
              <span className="content"> { technique }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { department ?
             <React.Fragment>
              <span className="title">Department: </span>
              <span className="content"> { department }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { division ?
             <React.Fragment>
              <span className="title">Division: </span>
              <span className="content"> { division }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { contact ?
             <React.Fragment>
              <span className="title">Contact: </span>
              <span className="content"> { contact }</span>
            </React.Fragment>
              :null
             }
          </li>
          <li>
             { creditline ?
             <React.Fragment>
              <span className="title">Credit: </span>
              <span className="content"> { creditline }</span>
            </React.Fragment>
              :null
             }
          </li>
         </ul>
       </section>
       <section className="photos">
         <img src={ primaryImageURL } alt={ description } />
       </section>
     </div>
   
)
}

export default Feature;