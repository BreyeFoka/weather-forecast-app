
import React from 'react'
import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [location, setLocation] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(location)
    }
  return (
        <form  onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
  )
}

export default SearchBar