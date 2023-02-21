import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import {GoTrashcan} from "react-icons/go";

function AlbumsListItem({ album }) {
    const header =
        <div className='m-2 flex flex-row items-center justify-between'>
            <Button>
                <GoTrashcan />
            </Button>
            <div>
                {album.title}
            </div>
        </div>;
    return(
        <ExpandablePanel key={album.id} header={header}>
            List of album photos
        </ExpandablePanel>
    )
}

export default AlbumsListItem;