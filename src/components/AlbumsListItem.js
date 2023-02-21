import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";


function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header =
        <>
            <Button className='mr-2' onClick={handleRemoveAlbum} loading={results.isLoading}>
                <GoTrashcan />
            </Button>
            {album.title}
        </>;
    return(
        <ExpandablePanel key={album.id} header={header}>
            List of album photos
        </ExpandablePanel>
    )
}

export default AlbumsListItem;