import React, { Component } from 'React';

export default class VideoListItem extends Component {
    render() {
        const video = this.props.video;

        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={video.snippet.thumbnails.default.url}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
}