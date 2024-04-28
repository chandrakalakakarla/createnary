import React, { useState, useEffect } from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Img } from "../Img";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

const dataSource = [
    {
        title: " Your audience wants links",
        content: "Make it easy for them by linking products to every post and video",
        url: "images/img_image_8.png"
    },
    {
        title: "Influencer income can be exciting",
        content: "Say yes to their exciting products",
        url: "images/img_image_9.jpg"
    },
    {
        title: "Great income ",
        content: "Yay! Its done",
        url: "images/img_image_10.jpg"
    }
];

const ImageSlider = ({ imagesList, changeClickedValue, sliderTime }) => {
    const navigate = useNavigate();
    const [position, setPosition] = useState(0);
    const [imagesData, setImagesData] = useState(dataSource);

    useEffect(() => {
        const toggle = setInterval(() => {
            setPosition(DataForConditionalCheck());
        }, sliderTime);

        return () => clearInterval(toggle);
    });

    const handlePagenavigation = () => {
        navigate("/pagetwo")
    }

    const DataForConditionalCheck = (condition) => {
        const dataLength = imagesData.length
        switch (condition) {
            case "prev": return position > 0 ? position - 1 : dataLength - 1;

            case "next": return position < dataLength - 1 ? position + 1 : 0;

            default: return position === dataLength - 1 ? 0 : position + 1
        }
    }

    const handleButtonClick = (type) => {

        if (type == "prev") {
            setPosition(DataForConditionalCheck("prev"))
        }
        if (type == "next") {
            setPosition(DataForConditionalCheck("next"))
        }
    }

    return (
        <>
            <Button onClick={() => handleButtonClick("prev")}>
                <Img src="images/img_previous.svg" alt="previous_one" className="h-[48px] w-[48px] md:w-full" />
            </Button>
            <div className="flex flex-1 flex-col items-center gap-[50px] md:self-stretch">
                <div className="flex flex-col items-center gap-12 self-stretch px-[272px] md:px-5">
                    <div className="flex flex-col items-center gap-[17px]">
                        <Heading size="lg" as="h3" className="!text-gray-50">
                            {imagesData[position]?.title}
                        </Heading>
                        <Text as="p">{imagesData[position].content}</Text>
                    </div>
                    <Img
                        src={imagesData[position].url}
                        alt="image"
                        className="h-[405px] w-full rounded-[35px] object-cover md:h-auto"
                    />
                </div>
                <Button className="flex h-[54px] min-w-[139px] items-center justify-center rounded-[18px] bg-gray-50 px-6 text-center text-lg font-semibold text-gray-900 sm:px-5" onClick={handlePagenavigation}>
                    Try for free
                </Button>
            </div>
            <Button onClick={() => handleButtonClick("next")}>
                <Img src="images/img_next.svg" alt="next_one" className="h-[48px] w-[48px] md:w-full" /></Button>
        </>


    );
};


export default ImageSlider;
