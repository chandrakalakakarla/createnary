import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Heading } from "../../components/Heading";
import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { SelectBox } from "../../components/SelectBox";
import { SeekBar } from "../../components/SeekBar";
import ImageSlider from "../../components/ImageSlider";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const FaqList = [
  {
    q: "How much does it cost to set up a store?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"

  },
  {
    q: "What kind of digital products can I sell?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"

  },
  {
    q: "Do I need technical skills to use the platform?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
  },
  {
    q: "Is there a limit to the number of products I can list?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"

  },
  {
    q: "How do I receive payments for my sales?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"

  },
  {
    q: "Can I sell internationally on this marketplace?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"

  },
  {
    q: "What support and resources are available for sellers?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"

  },
  {
    q: "Is there a review process for uploaded products?",
    a: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"

  }
]
// const faqArray = [
//   {
//     q: "How much does it cost to open a store?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },
//   {
//     q: "what kind of digital products can i sell?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },
//   {
//     q: "what kind of digital products can i sell?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },
//   {
//     q: "what kind of digital products can i sell?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },
//   {
//     q: "what kind of digital products can i sell?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },
//   {
//     q: "what kind of digital products can i sell?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },
//   {
//     q: "what kind of digital products can i sell?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },
//   {
//     q: "what kind of digital products can i sell?",
//     a: "  No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&#39;s as simple as a few clicks to get started!"

//   },

// ]
const Home = () => {
  const [countData, setCountData] = useState({ product: 25, followers: 500 })
  const [income, setIncome] = useState({ monthlyIncome: 0, yearlyIncome: 0 })
  const [faqData, setFaqData] = useState([])


  const handleRangeChange = (val, type) => {
    setCountData({
      ...countData,
      [type]: val?.[0]
    })
  }

  const handleIncomeCalculation = () => {
    const monthlyIncome = ((countData.followers / 10) * countData.product) * 1000;
    const yearlyIncome = monthlyIncome * 12;
    setIncome({
      monthlyIncome: monthlyIncome,
      yearlyIncome: yearlyIncome
    })
  }

  useEffect(() => {
    setFaqData(FaqList);
    handleIncomeCalculation()
  }, [])


  return (
    <div className="w-full bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="relative h-[1534px] self-stretch md:h-auto">
          <div className="w-full">
            <div className="flex h-[924px] items-start justify-center bg-[url(/public/images/img_group_72.png)] bg-cover bg-no-repeat p-[15px] md:h-auto">
              <div className="mb-[317px] flex w-[75%] flex-col items-start gap-[127px] md:w-full md:gap-[95px] sm:gap-[63px]">
                <NavBar className="relative ml-7 flex items-center gap-[50px] self-stretch rounded-[35px] bg-blue_gray-100_66 p-5 md:ml-0 md:flex-col" />
                <div className="flex w-[45%] flex-col items-start gap-[50px] md:w-full">
                  <div className="flex flex-col gap-[25px] self-stretch">
                    <div className="flex flex-col items-start gap-[41px]">
                      <Heading size="lg" as="h1" className="!text-black-900_01">
                        <span className="text-gray-900">Welcome To India’s First&nbsp;</span>
                        <span className="bg-gradient bg-clip-text text-transparent">Creator’s Marketplace</span>
                      </Heading>
                      <Heading as="h2">Create your first E-Store @ Zero Cost</Heading>
                    </div>
                    <Text as="p" className="!text-gray-900">
                      Empower your creativity with Createnary. Showcase, sell, and connect with a global audience
                      effortlessly, turn your products into profits.
                    </Text>
                  </div>
                  <Button className="flex h-[54px] min-w-[144px] items-center justify-center rounded-[18px] bg-indigo-600 px-6 text-center text-lg font-semibold text-gray-50 sm:px-5">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-[-114px] flex items-center justify-center bg-indigo-600 p-[39px] md:flex-col sm:p-5">
              <ImageSlider sliderTime={2000} />

            </div>
          </div>
          <div className="absolute left-0 right-0 top-[8%] m-auto flex w-full items-center justify-between gap-5 md:relative md:flex-col">
            <Img
              src="images/img_navlinks.png"
              alt="navlinks_one"
              className="mb-[209px] h-[140px] w-[2%] self-end object-cover md:w-full"
            />
            <div className="flex w-[41%] flex-col items-end pl-14 pr-[65px] md:w-full md:p-5 md:px-5">
              <Img
                src="images/img_32767469_responsive_device_33.png"
                alt="image_four"
                className="h-[630px] w-[90%] object-cover"
              />
            </div>
          </div>
        </div>
        <Heading size="md" as="h2" className="mt-[92px] text-center">
          ESTIMATE EARNING POTENTIAL
        </Heading>
        <div className="mx-auto mt-[59px] flex w-full max-w-[866px] flex-col items-center gap-[50px] md:p-5">
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[66%] flex-col items-start gap-[26px] md:w-full">
              <Text as="p" className="!text-gray-900">
                What kind of influencer are you?
              </Text>
              <SelectBox
                indicator={<Img src="images/img_chevron.svg" alt="chevron" className="h-[22px] w-[22px]" />}
                name="pages"
                placeholder={`Select influencer type?`}
                options={[]}
                className="flex gap-px self-stretch rounded-lg border border-solid border-gray-300_01 bg-white-A700_01 py-[11px] pl-[13px] pr-[35px] text-base font-medium text-gray-900_66_01 sm:pr-5"
              />
              <Text as="p" className="!text-gray-900">
                How many followers do you have?
              </Text>
              <SeekBar
                inputValue={[countData.followers]}
                min={1}
                max={1000}
                onChange={(val) => handleRangeChange(val, 'followers')}
                trackColors={["#4a508e", "#cccccc"]}
                className="flex h-[40px] w-[92%] rounded-[5px]"
                trackClassName="h-[10px] w-full rounded-[5px]"
                thumbClassName="undefined"
              />
              <Button className="ml-[226px] flex h-[41px] min-w-[72px] items-center justify-center rounded-[15px] border-b-2 border-solid border-indigo-600 bg-gray-50 px-[18px] text-center text-sm font-medium text-gray-900 md:ml-0">
                {countData.followers}K
              </Button>
              <Text as="p" className="!text-gray-900">
                How many products do you list monthly?
              </Text>
              <SeekBar
                inputValue={[countData.product]}
                onChange={(val) => handleRangeChange(val, 'product')}
                min={1}
                max={100}
                trackColors={["#4a508e", "#cccccc"]}
                className="flex h-[40px] w-[92%] rounded-[5px]"
                trackClassName="h-[10px] w-full rounded-[5px]"
                thumbClassName="undefined"
              />
              <Button className="ml-[234px] flex h-[41px] min-w-[56px] items-center justify-center rounded-[15px] border-b-2 border-solid border-indigo-600 bg-gray-50 px-[18px] text-center text-sm font-medium text-gray-900 md:ml-0">
                {countData.product}
              </Button>
            </div>
            <div className="flex flex-col items-center gap-[82px] md:gap-[61px] sm:gap-[41px]">
              <div className="flex flex-col items-center gap-6">
                <Heading as="h2" className="text-center">
                  Monthly Earning
                </Heading>
                <Heading size="lg" as="h3" className="text-center !text-indigo-600">
                  ₹{(income.monthlyIncome || 0)?.toLocaleString()}
                </Heading>
              </div>
              <div className="flex flex-col items-center gap-6">
                <Heading as="h4">Yearly Earning</Heading>
                <Heading size="lg" as="h5" className="!text-indigo-600">
                  ₹{(income.yearlyIncome || 0)?.toLocaleString()}
                </Heading>
              </div>
            </div>
          </div>
          <Button className="flex h-[54px] min-w-[125px] items-center justify-center rounded-[18px] bg-indigo-600 px-6 text-center text-lg font-semibold text-gray-50 sm:px-5" onClick={handleIncomeCalculation}>
            Calculate
          </Button>
        </div>
        <div className="mt-[115px] flex w-[43%] flex-col items-center gap-[15px] md:w-full md:p-5">
          <Heading size="md" as="h2">
            FREQUENTLY ASKED QUESTIONS
          </Heading>
          <Text as="p" className="text-center !text-gray-800">
            <span className="text-gray-800">
              <>
                Quick answers to questions you may have. Can’t find what you&#39;re looking for?
                <br />
              </>
            </span>
            <span className="text-indigo-600">Check out our full documentation</span>
          </Text>
        </div>
        <Accordion  className="mt-[60px] flex w-[51%] flex-col gap-4" allowZeroExpanded>
          {faqData.map((item, i) => (
            <AccordionItem uuid={i} key={`list${i}`}>
              <div className="mt-4 flex flex-1 flex-col gap-[27px] rounded-[16px] bg-blue_gray-100 p-[13px]">
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {(props) => (
                        <>
                          <div className="flex flex-wrap justify-between gap-5 sm:flex-col">
                            <Heading size="xs" as="h2" className="self-end">
                              {item.q}
                            </Heading>
                            {props?.expanded ? (
                              <Img
                                src="images/img_icon_indigo_600.svg"
                                alt="icon_five"
                                className="h-[20px] w-[20px] self-start sm:w-full"
                              />
                            ) : (
                              <Img
                                src="images/img_icon.svg"
                                alt="icon_one"
                                className="mr-[7px] h-[20px] w-[20px] sm:mr-0 sm:w-full"
                              />
                            )}
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div>
                    <Text size="s" as="p" className="!text-gray-800">
                      {item.a}
                    </Text>
                  </div>
                </AccordionItemPanel>
              </div>
              <div className="h-px w-[95%] rotate-[0deg] bg-gray-900_14_01" />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default Home;
