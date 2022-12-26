import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import {BsBagCheckFill } from 'react-icons/bs'
const Navbar = () => {
  const togglecart= () =>{
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }
  const ref= useRef()
  return (
    <div className=' flex md:flex-row md:justify-start justify-center item-center flex-col mx-5 shadow-xl mb-1  bg-white '>
      <div className="logo py-2 items-center">
        <Link href={'/'}>
          <a>
            <Image width={160} height={60} src="/logo.png" alt="" className='m-4' />
          </a>
        </Link>

      </div>
      <div className="nav ">
        <ul className='flex items-center space-x-4 font-bold mx-8 md:text-md my-6'>
          <Link href={'/tshirt'}><a><li>T-Shirt</li></a></Link>
          <Link href={'/huddies'}><a><li>Huddies</li></a></Link>
          <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a><li>mugs</li></a></Link>
        </ul>
      </div>
      <div onClick={togglecart} className="cursor-pointer cart absolute right-3 top-7 mx-5 hover:togglecart">
        <AiOutlineShoppingCart className='md:text-3xl text-2xl' />
      </div>



      <div ref={ref} className=" w-72 h-[100vh] sidecart absolute top-0 right-0 bg-red-400 py-10 px-8 transform transition-transform translate-x-full mt-5 shadow-2xl rounded-xl z-10">
        <h2 className='font-bold text-xl text-center'>Shopping Kart</h2>
        <span onClick={togglecart} className=' absolute top-2 right-3 cursor-pointer text-2xl text-red-700 hover:text-white'><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold '>
          <li>
            <div className="item flex my-5">
              <div className='flex items-center justify-center w-2/3 font-semibold'>T-shirt-For Boys</div>
                <div className='flex items-center justify-center w-1/3  font-semibold'><AiOutlineMinusCircle className='cursor-pointer hover:text-white' /><span className='m-3'>1</span><AiOutlinePlusCircle className='cursor-pointer hover:text-white' />
                </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='flex items-center justify-center w-2/3 font-semibold'>T-shirt-For Boys</div>
                <div className='flex items-center justify-center w-1/3  font-semibold'><AiOutlineMinusCircle className='cursor-pointer hover:text-white' /><span className='m-3'>1</span><AiOutlinePlusCircle className='cursor-pointer hover:text-white' />
                </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='flex items-center justify-center w-2/3 font-semibold'>T-shirt-For Boys</div>
                <div className='flex items-center justify-center w-1/3  font-semibold'><AiOutlineMinusCircle className='cursor-pointer hover:text-white' /><span className='m-3'>1</span><AiOutlinePlusCircle className='cursor-pointer hover:text-white' />
                </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='flex items-center justify-center w-2/3 font-semibold'>T-shirt-For Boys</div>
                <div className='flex items-center justify-center w-1/3  font-semibold'><AiOutlineMinusCircle className='cursor-pointer hover:text-white' /><span className='m-3'>1</span><AiOutlinePlusCircle className='cursor-pointer hover:text-white' />
                </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='flex items-center justify-center w-2/3 font-semibold'>T-shirt-For Boys</div>
                <div className='flex items-center justify-center w-1/3  font-semibold'><AiOutlineMinusCircle className='cursor-pointer hover:text-white' /><span className='m-3'>1</span><AiOutlinePlusCircle className='cursor-pointer hover:text-white' />
                </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='flex items-center justify-center w-2/3 font-semibold'>T-shirt-For Boys</div>
                <div className='flex items-center justify-center w-1/3  font-semibold'><AiOutlineMinusCircle className='cursor-pointer hover:text-white' /><span className='m-3'>1</span><AiOutlinePlusCircle className='cursor-pointer hover:text-white' />
                </div>
            </div>
          </li>
        </ol>
        <div className="flex mt-3 item-center justify-center">
          <button className="flex  text-white bg-red-500 border-0 py-2 px-2 mr-2 focus:outline-none hover:bg-red-700 rounded text-sm"><BsBagCheckFill className='m-1' />Checkout</button>
          <button className="flex text-white bg-red-500 border-0 py-2 px-2 mr-2 focus:outline-none hover:bg-red-700 rounded text-sm">Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar