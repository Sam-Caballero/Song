import Song from './Song';

const Library = ({ library, addToLibrary }) => {
    return (
        <>
            <h2>Biblioteca</h2>
            <section>
                {library.map((songId) => {
                    <Song key={songId} {...{ title: 'Título', artist: 'Artista', id: songId, isInLibrary: true }} addToLibrary={addToLibrary} />
                })}
            </section>
        </>
    );
};

export default Library;