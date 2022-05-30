
import React, { Component } from 'react'
import UlComponent from '../component/li-component'

const sounds = [
    { title: 'Ok Go - this too shall pass', uri: 'http=qybUFnY7Y8w', style: 'metallica', year: '2018', img: 'https://i.discogs.com/Uh6tnFAf6K5Wvv_0qs363cR6wFQhtukywPoAAimLx84/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTEx/ODkxNDkyLTE1NDMy/MzA4MTctNzY4MC5q/cGVn.jpeg' },
    { title: 'Ok Go - this too shall pass', uri: 'http=qybUFnY7Y8w', style: 'country', year: '2018', img: 'https://i.discogs.com/Uh6tnFAf6K5Wvv_0qs363cR6wFQhtukywPoAAimLx84/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTEx/ODkxNDkyLTE1NDMy/MzA4MTctNzY4MC5q/cGVn.jpeg' },
    { title: 'radiohead- no surprises', uri: 'http=u5CVsCnxyXg', style: 'rap', year: '1995', img: 'https://i.discogs.com/7vz9cz_dj-EoWcIYwdwdi90AlYSwDEy5_wGeLSTq2Zo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE0/NjMxNy0xMzk0NjQz/MDYzLTQ4MzIuanBl/Zw.jpeg' },
    { title: 'Dropkick Murphys - shipping up to boston', uri: 'https://www.youtube.com/watch?v=cwPg8gJq_Kw', style: 'country', year: '1990', img: 'https://i.discogs.com/nBlstqv3NQurQGs6f3Am9l9MYReZmNROINjdqh5_LnU/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTMz/Njc2NS0xMzkzOTM4/OTI2LTE3MjAuanBl/Zw.jpeg' },
    { title: 'Metallica - The Unforgiven (Official Music Video)', uri: 'https://www.youtube.com/watch?v=tAGnKpE4NCI', style: 'metallica', year: '2003', img: 'https://i.discogs.com/2IaOnA2gTePANO77poKCtjoLER6t1fHOyu3mhvKUf7A/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTIw/MjA2MS0xNDI4NzQy/Mjk2LTU1MDUuanBl/Zw.jpeg' },
    { title: 'Metallica - Wherever I May Roam (Official Music Video)', uri: 'https://www.youtube.com/watch?v=krpnMA-N3-c', style: 'country', year: '2001', img: 'https://i.discogs.com/ZMXQIOpa8w73tPBGwRAxbaJk9X3cpZKjv2FKOcDCxfI/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTI3/NDQ3NzctMTMwNDE5/OTUzNC5qcGVn.jpeg' }
]

class SearchContainer extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render () {
        return (
            <UlComponent
                options={sounds}
            />
        )
    }
}
export default SearchContainer
