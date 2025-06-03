const Song = ({id, title, artist, time, addToLibrary, isInLibrary}) => {
    const buttonText = isInLibrary ? 'Ya en biblioteca' : 'Agregar a biblioteca';
    return (
        <article className="Song" key={id}>
            <h3 className="Song-title">{title}</h3>
            <p className="Song-art">Artista: {artist}</p>
            <p className="Song-time">Duración: {time} segundos</p>
            <button className="song-button" onClick={() => addToLibrary(id)} disabled={isInLibrary}>{buttonText}</button>
        </article>
    )
}

export default Song;