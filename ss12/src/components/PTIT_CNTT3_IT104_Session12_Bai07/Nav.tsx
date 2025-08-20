import React from 'react'

export const Nav = () => {
    const navStyle: React.CSSProperties = {
        backgroundColor : "gray",
        height:"50px",
        lineHeight:"50px",
        textAlign:"center"
    }
  return (
    <nav style={navStyle}>
        Navigation
    </nav>
  )
}