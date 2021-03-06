import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleting, refetch, setDeleting}) => {
    console.log('deleting', deleting)
    const {  email } = deleting;
    console.log("deleting", deleting)

    const handleDelete = () => {
        fetch(`https://stark-bayou-71570.herokuapp.com/user/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("DeletedData", data);
                if (data.deletedCount) {
                    toast.success(`${email} is deleted`);
                    setDeleting(null);
                    refetch();


                }
            })

    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-700">Are you sure to delete {email}</h3>
                    <p class="py-4">If you delete, this will be removed permanently. There will be no other way to get back the data.</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-error btn-xs">Remove</button>
                        <label for="confirm-modal" class="btn btn-xs">close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;