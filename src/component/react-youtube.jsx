import React, { Component } from 'react'
import YouTube from 'react-youtube'

class Playlist extends Component {
    constructor (props) {
        super(props)

        this.state = {
            index: 0,
            options: {
                height: '390',
                width: '640',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            }
        }

        this.handleOnEnd = this.handleOnEnd.bind(this)
        this.handleNextOnClick = this.handleNextOnClick.bind(this)
        this.handlePreviousOnClick = this.handlePreviousOnClick.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
        this.getVideoId = this.getVideoId.bind(this)
    }

    handleOnEnd () {
        if (this.state.index < this.props.tracks.length - 1) {
            this.setState({
                index: this.state.index + 1,
                options: {
                    ...this.state.options,
                    playerVars: {
                        autoplay: 1
                    }
                }
            })
            console.log('video ended', this.props.tracks.length)
        }
    }

    handleNextOnClick () {
        if (this.state.index < this.props.tracks.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    handlePreviousOnClick () {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    getVideoId () {
        let videoId = ''
        if (this.props.tracks.length > 0) {
            const uri = this.props.tracks[this.state.index].uri
            videoId = uri.substring(uri.indexOf('=') + 1)
        }
        console.log(this.state.index)
        return videoId
    }

    onClickHandler (index) {
        this.setState({
            index: index
        })
    }

    render () {
        return (
            <div className='playlist'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <YouTube
                                videoId={this.getVideoId()}
                                opts={this.state.options}
                                onEnd={this.handleOnEnd}
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>{this.props.tracks[this.state.index] && this.props.tracks[this.state.index].title}</h5>
                                <div>
                                    <button onClick={this.handlePreviousOnClick}><i className='fa fa-step-backward' />&#8592;</button>
                                    <button onClick={this.handleNextOnClick}><i className='fa fa-step-forward' />&#8594;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <ul className='list-group'>
                            {this.props.tracks.map((track, index) => <li key={index} onClick={() => this.onClickHandler(index)} className={index === this.state.index ? 'list-group-item list-group-item-dark' : 'list-group-item'}>{track.title}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Playlist
