import React from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Img } from '../Img'
import { TextField } from '../TextField'

function NavBar(props) {
  return (
    <div className="header">
      < header {...props}>
        <div className="flex w-full items-center justify-center gap-[30px] sm:flex-col">
          <Heading as="h5" className="mb-[9px] self-end " >
            Createnary</Heading>
          <TextField name="search" placeholder={`Search Creators`}  prefix={<Img src="images/img_search.svg" alt="search" className="h-[20px] w-[20px] cursor-pointer"/>
          }
         className="flex h-[50px] flex-grow items-center justify-center gap-2.5 rounded-[25px] bg-gray-50 pl-4 pr-[35px] text-base font-medium text-gray-900 sm:pr-5" />
        </div>
        <ul className="flex w-full items-center gap-[26px] sm:flex-col">
          <li>
            <div 
              className="flex flex-1 justify-between gap-5 sm:self-stretch">
              <div className="flex cursor-pointer items-center gap-2.5">
                <Img src="images/img_frame.svg" alt="image" className="h-[20px] w-[20px]" />
                <Text as="p" className="text-center !text-gray-900">
                  Cart</Text>
              </div>
              <div className="flex cursor-pointer items-center gap-[11px]">
                <Img src="images/img_frame_gray_900.svg" alt="image_one" className="h-[20px] w-[20px] self-end" />
                <Text as="p" className="text-center !text-gray-900">
                  About</Text>
              </div>
              <div className="flex cursor-pointer items-center gap-2.5">
                <Img src="images/img_frame_gray_900_20x20.svg" alt="image_two" className="h-[20px] w-[20px] self-start" />
                <Text as="p" className="text-center !text-gray-900">
                  Contact</Text>
              </div>
             </div>
          </li>
          <li 
          >
            <div className="flex cursor-pointer items-center justify-center rounded-[15px] border border-solid border-gray-900 p-2 sm:w-full">
              <Text as="p" className="self-end text-center !text-gray-900">
                Login</Text>
              <Img src="images/img_frame_20x20.svg" alt="image_three" className="h-[20px] w-[20px]" />
            </div>
            {/* {menuOpen3 ? <MegaMenu1 />
              : null} */}
              </li>
        </ul>
      </header>
    </div >
  )
}

export default NavBar