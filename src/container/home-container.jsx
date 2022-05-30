import React, { Component } from 'react'
import Playlist from 'component/react-youtube.jsx'
import NavComponent from 'component/nav-component.jsx'
import DetailComponent from 'component/detail-component.jsx'
import MusicData from 'component/music-data'
import UlComponent from '../component/ul-component'

const tracksss = [
    { title: 'Ok Go - this too shall pass', uri: 'http=qybUFnY7Y8w', videoId: '1' },
    { title: 'radiohead- no surprises', uri: 'http=u5CVsCnxyXg', videoId: '2' },
    { title: 'Dropkick Murphys - shipping up to boston', uri: 'http=x-64CaD8GXw', videoId: '3' }
]

class HomeContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchResult: '',
            master: [],
            videoList: [],
            inSearch: false,
            selectedMasterId: '',
            inDetail: false,
            masterIndex: '',
            tracks: {
                default: [{ title: 'Ok Go - this too shall pass', uri: 'http=qybUFnY7Y8w' },
                    { title: 'radiohead- no surprises', uri: 'http=u5CVsCnxyXg' },
                    { title: 'Dropkick Murphys - shipping up to boston', uri: 'http=x-64CaD8GXw' }],
                acoustique: [],
                classique: [],
                country: [],
                metal: [],
                pop: [],
                rock: []
            },
            selectedStyle: 'default'
        }
        this.musicData = new MusicData('TCjTYPLbkOMKiprCsbongRyfxZBGzNyvsGUBjtFr')
        this.handleClickSearch = this.handleClickSearch.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleClickMaster = this.handleClickMaster.bind(this)
        this.handleClickMusic = this.handleClickMusic.bind(this)
        this.handleClickHome = this.handleClickHome.bind(this)
        this.handleChangeStyle = this.handleChangeStyle.bind(this)
    }

    handleClickMusic (event) {
        const thisTitle = { title: event.target.getAttribute('name'), uri: event.target.getAttribute('id') }
        const newTrackList = this.state.tracks
        newTrackList[this.state.selectedStyle].push(thisTitle)
        this.setState({
            tracks: newTrackList
        })
        console.log(this.state.tracks)
    }

    handleChangeStyle (event) {
        this.setState({
            selectedStyle: event.target.value
        })
        console.log(this.state.selectedStyle)
    }

    handleClickSearch (event) {
        event.preventDefault()
        console.log('button clicked')
        this.setState({
            inSearch: true
        })
        this.musicData.search({ query: this.state.searchResult }, (result) => {
            this.setState({ master: result.results })
        })
    }

    handleClickMaster (event) {
        console.log(event.target.getAttribute('name'))
        this.setState({
            selectedMasterId: event.target.name
        })
        this.setState({
            masterIndex: event.target.id
        })

        this.musicData.getMaster(event.target.name, (result) => {
            this.setState({ videoList: result.videos })
        })
    }

    handleSearchChange (event) {
        this.setState({
            searchResult: event.target.value
        })
    }

    handleClickHome (event) {
        this.setState({
            selectedMasterId: '',
            inSearch: false,
            searchResult: ''
        })
    }

    render () {
        console.log('masterId', this.state.selectedMasterId)
        console.log('this masterIndex', this.state.masterIndex)
        console.log('videoList', this.state.videoList)
        console.log('inDetail', this.state.inDetail)
        return (

            <div>
                <NavComponent onClick={this.handleClickSearch} onChange={this.handleSearchChange} onClickHome={this.handleClickHome} onChangeSelect={this.handleChangeStyle} />
                {this.state.selectedMasterId !== '' && this.state.inSearch === true ? <DetailComponent master={this.state.master[this.state.masterIndex]} trackList={this.state.videoList} onClick={this.handleClickMusic} /> : this.state.selectedMasterId === '' && this.state.inSearch === true ? <UlComponent options={this.state.master} onClick={this.handleClickMaster} /> : <Playlist tracks={this.state.tracks[this.state.selectedStyle]} />}
            </div>
        )
    }
}
export default HomeContainer
