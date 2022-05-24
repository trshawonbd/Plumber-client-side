import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import InfoModal from './InfoModal/InfoModal';

const MyProfile = () => {
    const [updating, setUpdtaing] = useState(null);
    const [user] = useAuthState(auth);
    const { email, displayName } = user;
    const firstLetter = displayName.charAt(0);
    const { isLoading, refetch, data: allUsers } = useQuery(['info'], () =>
        fetch(`http://localhost:5000/user/${email}`,
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

    console.log(allUsers)
    const { name, picture, location, city, linkedIn, phone, education } = allUsers;

    return (
        <div >

            {

            }
            <div class="card bg-purple-100 my-12 w-full  items-center ">
                {
                    picture ? <figure className='mt-6'>
                        <div class="avatar">
                            <div class="w-32 rounded-xl">
                                <img src={picture} alt='' />

                            </div>
                        </div>





                    </figure> :
                        <div class="avatar placeholder mt-6">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-32">
                                <span class="text-8xl">{firstLetter}</span>
                            </div>
                        </div>

                }
                <div class="divider"></div>
                <div class="card-body w-full items-center">
                    <h2 class="card-title">
                        Name: {name}
                    </h2>
                    <div class="divider"></div>
                    <h2 class="card-title">
                        Email: {email}
                    </h2>
                    <div class="divider"></div>
                    <h2 class="card-title">
                        Education: {education}
                    </h2>
                    <div class="divider"></div>
                    <h2 class="card-title">
                        City: {city}
                    </h2>
                    <div class="divider"></div>
                    <h2 class="card-title">
                        Location: {location}
                    </h2>
                    <div class="divider"></div>
                    <h2 class="card-title">
                        Phone: {phone}
                    </h2>
                    <div class="divider"></div>
                    <h2 class="card-title">
                        LinkedIn: <a href={linkedIn}><button className='btn btn-sm'>Click Me</button></a>
                    </h2>
                    <div class="divider"></div>

                    <div class="card-actions justify-center">
                        <label onClick={() => setUpdtaing(allUsers)} for="confirm-modal" class="btn btn-error btn-md">Update Information</label>
                        {/* <button class="btn btn-outline">Products</button> */}
                    </div>
                </div>



            </div>
            {
                updating && <InfoModal
                    updating={updating}
                    refetch={refetch}
                    setUpdtaing={setUpdtaing}
                    allInfo={allUsers}
                ></InfoModal>
            }


        </div>
    );
};

export default MyProfile;