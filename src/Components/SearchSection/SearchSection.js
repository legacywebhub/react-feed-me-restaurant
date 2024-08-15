import React from 'react'
import './SearchSection.css'

const SearchSection = () => {
  return (
    <div className='search__section'>
        <h2>It's the food and groceries you love, delivered</h2>
        <form>
          <input type='text' placeholder='Search meal' name='search' />
          <button>Go</button>
        </form>
    </div>
  )
}

export default SearchSection