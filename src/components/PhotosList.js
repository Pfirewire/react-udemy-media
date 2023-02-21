import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";

function PhotosList({ album }) {
    const { data, error, isFetching} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    return(
        <div className='m-2 flex flex-row items-center justify-between'>
            <h3 className='text-lg font-bold'>
                Photos in {album.title}
            </h3>
            <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                + Add Photo
            </Button>
        </div>
    );
}

export default PhotosList;