import Song from './Song';

const Library = ({ songs, library, addToLibrary }) => {
    return (
        <>
            <h2>Biblioteca</h2>
            <section>
                {library.map((songId) => {
                    return (
                        <Song key={songId} {...{ id: songId == songs.id, title: songs.title, artist: songs.artist, time: songs.time, isInLibrary: true }} addToLibrary={addToLibrary} />
                    )
                })}
            </section>
        </>
    );
};

export default Library;