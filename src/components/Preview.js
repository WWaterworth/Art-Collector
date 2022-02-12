import React from 'react';

import { fetchQueryResultsFromURL } from '../api';

const transformRecord = (record) => ({
  dated: record.dated,
  description: record.description,
  primaryImageURL: record.primaryimageurl,
  title: record.title,
  images: record.images,
  culture: record.culture,
  style: record.style,
  technique: record.technique,
  medium: record.medium,
  dimensions: record.dimensions,
  people: record.peole,
  department: record.department,
  divison: record.division,
  contact: record.contact,
  creditline: record.creditline,
})

const Preview = (props) => {
const { searchResults: { info, records }, setSearchResults, setFeaturedResult, setIsLoading } = props;

  async function fetchPage(pageUrl) {
    setIsLoading(true);

    try {
      const results = await fetchQueryResultsFromURL(pageUrl);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return <aside id="preview">
    <header className="pagination">
      <button 
        disabled={!info.prev} 
        className="previous"
        onClick={(event) => {
          event.preventDefault();
          fetchPage(info.prev)
        }}
        >Previous</button>
      <button
        disabled={!info.next}
        className="next"
        onClick={(event)=>{
          event.preventDefault();
          fetchPage(info.next)
        }}
        >Next</button>
    </header>
    <section className="results">
      {records.map((rawRecord, index) => {
        const record = transformRecord(rawRecord);

        return (
          <div  
            key={ index }
            className="object-preview"
            onClick={(event) => {
              event.preventDefault();
              setFeaturedResult(record)
            }}>
            { 
              record.primaryImageURL && <img src={ record.primaryImageURL } alt={ record.description } /> 
            }
            {
              record.title ? <h3>{ record.title }</h3> : <h3>MISSING INFO</h3>
            }
          </div>
        )
      })
      }
    </section>
  </aside>
}

export default Preview;