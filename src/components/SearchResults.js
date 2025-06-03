import Song from './Song';

const SearchResults = ({songs, addToLibrary, library}) => {
    return (
        <>
            <h2>Busquedas</h2>
            <section>
                {songs.map((song) => {
                    <Song key={song.id} {...song} addToLibrary={addToLibrary} isInLibrary={library.includes(song.id)}/>
                    console.log(song);
                })}
            </section>
        </>
    );
};

export default SearchResults;