import React from 'react'
import parse from 'html-react-parser'
import htmData from '../utils/error'

const NotFoundPage = () => {
    return (
        <div> {parse(htmData)}</div>
    )
}

export default NotFoundPage