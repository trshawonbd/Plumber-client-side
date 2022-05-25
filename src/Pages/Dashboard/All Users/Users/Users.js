import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import DeleteModal from '../DeleteModal/DeleteModal';
import SingleUser from '../SingleUser/SingleUser';

const Users = () => {
    const [deleting, setDeleting] = useState(null);
    const { isLoading, refetch, data: users } = useQuery(['users'], () =>
        fetch(`https://stark-bayou-71570.herokuapp.com/user`,
            {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res =>
                res.json()
            )

    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Remove User</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <SingleUser
                                key={index}
                                index={index}
                                user={user}
                                refetch={refetch}
                                setDeleting={setDeleting}
                            ></SingleUser>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deleting && <DeleteModal
                    deleting={deleting}
                    refetch={refetch}
                    setDeleting={setDeleting}
                ></DeleteModal>
            }
        </div>
    );
};

export default Users;