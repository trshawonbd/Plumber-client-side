import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import ManageDeleteModal from '../ManageDeleteModal/ManageDeleteModal';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const [deleting, setDeleting] = useState(null);

    

    const { isLoading, refetch, data: tools } = useQuery(['tool'], () =>
        fetch(`https://stark-bayou-71570.herokuapp.com/tool`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-12'>Manage All Products: {tools.length}</h2>


            <div class="overflow-x-auto">
                <table class="table table-compact w-full">


                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Availability</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools?.map((tool, index) => <ManageSingleProduct
                                key={index}
                                index={index}
                                tool={tool}
                                refetch={refetch}
                                setDeleting={setDeleting}
                            ></ManageSingleProduct>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deleting && <ManageDeleteModal
                    deleting={deleting}
                    refetch={refetch}
                    setDeleting={setDeleting}
                ></ManageDeleteModal>
            }


        </div>
    );
};

export default ManageProducts;