import React, {Component} from 'react';

class Song extends Component{
    render() {
        return(
            <section className="Song">
                <h3 className="Song-title">{this.props.title}</h3>
                <p className="Song-art">Artista: {this.props.artist}</p>
                <p className="Song-time">Duración: {this.props.time} segundos</p>
            </section>
        )
    }
}

export default Song;