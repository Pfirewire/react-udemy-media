import { useFetchPhotosQuery } from "../store";
import PhotosListItem from "./PhotosListItem";

function PhotosList({ album }) {
    const { data, error, isFetching} = useFetchPhotosQuery(album);

    return(
        <div>
            PhotosList
        </div>
    );
}

export default PhotosList;