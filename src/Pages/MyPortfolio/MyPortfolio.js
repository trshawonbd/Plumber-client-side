import React from 'react';
import profile from '../../assets/MyPortfolio/profile.jpg';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen min-w-screen">
            <div class="hero-content flex-col lg:flex-row">
                <div class="avatar">
                    <div class="lg:min-w-screen rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 md:min-w-md">
                        <img src={profile} />
                    </div>
                </div>
                <div class="card w-full h-full bg-primary text-primary-content">
                    <div class="card-body">
                        <h2 class="card-title text-4xl">Md Taibur Rahman</h2>
                        <h3 class="card-title text-xl">Email: trshawonbd@gmail.com</h3>
                        <h2 class="card-title text-xl">Education: MSc in Computer and Systems Engineering</h2>
                        <p className='mt-3'><span className='font-bold text-xl'>Goal:</span> I want to be a Full stack web with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a MSC willing to be an asset for an organization. Here are a Few Highlights i want to learn:
                            <div className='mt-3 flex flex-col justify-start items-start'>
                                <li>Full Stack web development</li>
                                <li>Interactive Front End as per the design</li>
                                <li>React and React Native</li>
                                <li>Redux for State Management</li>
                                <li>Building REST API</li>
                                <li>Managing database</li>
                                <li>Managing Firebase authentication</li>
                            </div>

                            <div className='my-3'>
                                <span className='font-bold'>Technologies:</span> <br />
                                <div className='mt-3'>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">Node</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">MongoDB</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">Express</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">cors</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">json webtoken</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">Middleware</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">env</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">Atlas</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React router</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React query</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React hook form</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React Bootstrap</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React Awesome</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">Axios</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React Toastify</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">React Awesome</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">Bootstrap</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">tailwind</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">daisy UI</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">flowbite</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">Heroku</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">firbase</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">firbase hooks</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">netlify</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">API</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">es6</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">JS</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">CSS</div>
                                    <div class="badge badge-lg badge-secondary uppercase mr-2">HTML</div>
                                    
                                </div>

                            </div>
                            <div>
                            <span className='font-bold'>Projects:</span> <br />
                            <div className='mt-3'>
                            <a role="button" href='https://plumber-26cab.web.app/' class="btn md:my-2 mr-2">Plumber</a>
                            <a role="button" href='https://i-house-7d97b.web.app/' class="btn md:my-2 mr-2">i-house</a>
                            <a role="button" href='https://your-photographer.web.app/' class="btn md:my-2 mr-2">Your PhotoGrapher</a>
                            </div>

                            </div>


                        </p>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;