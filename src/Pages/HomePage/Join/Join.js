import React from 'react';
import './Join.css';
import number1 from '../../../assets/number/one.png';
import number2 from '../../../assets/number/two.png';
import number3 from '../../../assets/number/three.png';

const Join = () => {
    return (
        <div className='text-center'>
            <h2 className='text-center text-5xl font-black my-16 '>Join <span className='text-primary'>Plumber</span>  Today</h2>

            <div class="card w-full bg-base-100 shadow-2xl">
                <div class="card-body md : flex-col-reverse  lg:flex-row-reverse items-center">

                    <p className=' text-xl '>Sanitary problems need urgent repair. In this article, you'll find some tips to help you get rid of a siphon leak as quickly and efficiently as possible.
                        It should be borne in mind that the correctness and durability of plumbing fixtures such as washbasins or sinks depends largely on competent installation.</p>
                    <div class="card-actions justify-start">
                        <button class="">
                            <img className='num-img' src={number1} alt="" srcset="" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-2xl">
                <div class="card-body md : flex-col-reverse  lg:flex-row-reverse items-center items-center">

                    <p className=' text-xl '>The breakdown of the tap and faucet is a fairly common problem in the house. Therefore, everyone should think about changing the bathroom faucet at least a few times in their life. Statistics show that assembling and disassembling such a device on its own is not as easy as installing a faucet in the kitchen.</p>
                    <div class="card-actions justify-start">
                        <button class="">
                            <img className='num-img' src={number2} alt="" srcset="" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-2xl">
                <div class="card-body md : flex-col-reverse  lg:flex-row-reverse items-center items-center">

                    <p className=' text-xl '>Clogging is a common problem. This can be remedied independently or by a specialist. In general, the pipes become clogged due to the layer of grease that accumulates on the inside. In this article, we'll find out how to clear a blockage at home, how to do it yourself, and whether you need specialist help.</p>
                    <div class="card-actions justify-start">
                        <button class="">
                            <img className='num-img' src={number3} alt="" srcset="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Join;