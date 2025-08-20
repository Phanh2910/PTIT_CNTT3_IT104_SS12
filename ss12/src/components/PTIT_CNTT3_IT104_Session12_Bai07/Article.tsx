import React from 'react'

export const Article = () => {
    const style: React.CSSProperties = {
        backgroundColor: 'lightblue',
        textAlign: "center",
        height: "600px",
        lineHeight: "600px",
        width: "25%"
    }
    return (
        <div style={style}>Article</div>
    )
}