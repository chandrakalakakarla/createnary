import React from "react";
//import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img} from "../../components/Img";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import {Button} from '../../components/Button'
import NavBar from "../../components/NavBar";
//import MegaMenu1 from "../../components/MegaMenu1";

const  PageTwo =() =>{
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
 

  return (
    <>    
      {/* <Helmet>
        <title>Travel Deals - Share Experiences | GetSetYo</title>
        <meta
          name="description"
          content="Discover curated itineraries and insider deals on hotels & flights. Share memorable holidays and experiences with friends and family. Start your journey with GetSetYo."
        />
      </Helmet> */}

      {/* main content section */}
      <div className="flex w-full flex-col items-center gap-2.5 bg-white-A700_01 pt-2.5">
        {/* header section */}
        <div className="container-xs px-7 md:p-5 sm:px-5">
          {/* <header className="relative rounded-[35px] bg-blue_gray-100_66 p-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[46%] items-center justify-center gap-[30px] md:w-full sm:flex-col">
                <Heading as="h5" className="mb-[9px] self-end">
                  Createnary
                </Heading>
                <TextField
                  name="search"
                  placeholder={`Search Creators`}
                  value={searchBarValue1}
                  onChange={(e) => setSearchBarValue1(e)}
                  prefix={<Img src="images/img_search.svg" alt="search" className="h-[20px] w-[20px] cursor-pointer" />}
                  suffix={
                    searchBarValue1?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue1("")} fillColor="#11151dff" />
                    ) : null
                  }
                  className="flex h-[50px] flex-grow items-center justify-center gap-2.5 rounded-[25px] bg-gray-50 pl-4 pr-[35px] text-base font-medium text-gray-900 sm:pr-5"
                />
              </div>
              <ul className="flex w-[48%] items-center justify-center gap-[26px] md:w-full sm:flex-col">
                <li>
                  <div  className="flex flex-1 justify-between gap-5 sm:self-stretch" >
                    <div className="flex cursor-pointer items-center gap-2.5">
                      <Img src="images/img_frame.svg" alt="image_one" className="h-[20px] w-[20px]" />
                      <Text as="p" className="text-center !text-gray-900">
                        Cart
                      </Text>
                    </div>
                    
                    <div className="flex cursor-pointer items-center gap-[11px]">
                      <Img
                        src="images/img_frame_gray_900.svg"
                        alt="imageone_one"
                        className="h-[20px] w-[20px] self-end"
                      />
                      <Text as="p" className="text-center !text-gray-900">
                        About
                      </Text>
                    </div>

                    <div className="flex cursor-pointer items-center gap-2.5">
                      <Img
                        src="images/img_frame_gray_900_20x20.svg"
                        alt="imagetwo_one"
                        className="h-[20px] w-[20px] self-start"
                      />
                      <Text as="p" className="text-center !text-gray-900">
                        Contact
                      </Text>
                    </div>

                  </div>
                </li>
                <li>
                  <div className="flex w-[29%] cursor-pointer items-center justify-center gap-2.5 rounded-[15px] border border-solid border-gray-900 p-2 sm:w-full">
                    <Text as="p" className="self-end text-center !text-gray-900">
                      Login
                    </Text>
                    <Img src="images/img_frame_20x20.svg" alt="imagethree_one" className="h-[20px] w-[20px]" />
                  </div>
              
                </li>
              </ul>
            </div>
          </header> */}
           <NavBar className="relative ml-7 flex items-center gap-[50px] self-stretch rounded-[35px] bg-blue_gray-100_66 p-5 md:ml-0 md:flex-col" />
        </div>
        <div className="flex flex-col gap-2.5 self-stretch">
          {/* hero section */}
          <div className="flex justify-center bg-gray-50">
            <div className="container-xs flex items-start justify-center md:flex-col md:p-5">
              <div className="w-[42%] bg-gray-50 py-[180px] md:w-full md:py-5">
                <div className="flex flex-col items-start gap-[50px]">
                  <div className="flex flex-col gap-[27px] self-stretch">
                    <Heading size="md" as="h1">
                      GetSetYo handholds you at every step of the way
                    </Heading>
                    <Text as="p" className="!text-gray-800">
                      You focus on helping your friends and family, we take care of everything else.
                    </Text>
                  </div>
                  <Button className="flex h-[54px] min-w-[144px] items-center justify-center rounded-[18px] bg-indigo-600 px-6 text-center text-lg font-semibold text-gray-50 sm:px-5">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch sm:flex-col">
                <div className="relative h-[1948px] w-[10%] sm:w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1946px] w-[2px] bg-blue_gray-100" />
                  <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col gap-[457px] md:gap-[342px] sm:gap-[228px]">
                    <Button className="flex h-[60px] w-full items-center justify-center rounded-lg bg-indigo-600 px-[23px] text-center text-4xl font-bold text-gray-50 sm:px-5">
                      1
                    </Button>
                    <Button className="flex h-[60px] w-full items-center justify-center rounded-lg bg-indigo-600 px-[19px] text-center text-4xl font-bold text-gray-50">
                      2
                    </Button>
                    <Button className="flex h-[60px] w-full items-center justify-center rounded-lg bg-indigo-600 px-5 text-center text-4xl font-bold text-gray-50">
                      3
                    </Button>
                    <Button className="flex h-[60px] w-full items-center justify-center rounded-lg bg-indigo-600 px-[19px] text-center text-4xl font-bold text-gray-50">
                      4
                    </Button>
                  </div>
                </div>
                <div className="flex w-[83%] flex-col gap-[120px] sm:w-full">
                  {[...Array(4)].map((d, index) => (
                    <div key={"pagetwo" + index} className="flex flex-1 flex-col gap-[21px]">
                      <Heading as="h2">Share the holidays, stays and experiences with your friends and family</Heading>
                      <Text size="s" as="p" className="!text-gray-800">
                        <>
                          You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share
                          <br />
                        </>
                      </Text>
                      <Img src="images/img_image_5.png" alt="image" className="h-[264px] rounded-[15px] object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PageTwo;
