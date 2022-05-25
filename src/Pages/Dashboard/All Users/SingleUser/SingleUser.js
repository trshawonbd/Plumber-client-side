import React from 'react';
import { toast } from 'react-toastify';

const SingleUser = ({user, index, refetch, setDeleting}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`https://stark-bayou-71570.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
             headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            } 
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
   }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{user.email}</td>
         <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> 
         
        <td>  <label onClick={() => setDeleting(user)} for="confirm-modal" class="btn btn-error btn-xs">Delete</label></td>

    </tr>
    );
};

export default SingleUser;