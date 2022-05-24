import React from 'react';

const ManageSingleProduct = ({ tool, setDeleting, refetch, index }) => {

    const { _id, name, availableQuantity, minimumQuantity, price, picture, description } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-24 mask mask-squircle">
                    <img src={picture} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>


            <td>  <label onClick={() => setDeleting(tool)} for="confirm-modal" class="btn btn-error btn-xs">Delete</label></td>

        </tr>
    );
};

export default ManageSingleProduct;