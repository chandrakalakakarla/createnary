import React from "react";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Img } from "../Img";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="mt-5 flex w-full flex-col items-center">
        <div className="container-xs flex items-start md:flex-col md:p-5">
          <Text size="lg" as="p" className="mb-[90px] !font-monoton">
            Createnary
          </Text>
          <div className="ml-[286px] flex flex-col items-start gap-3.5 md:ml-0">
            <Heading size="xs" as="h6" className="!text-gray-50">
              Navigation
            </Heading>
            <ul className="flex flex-col items-start gap-[15px]">
              <li>
                <a href="#">
                  <Text size="s" as="p">
                    About Createnary
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="s" as="p">
                    Contact Us
                  </Text>
                </a>
              </li>
              <li>
                <a href="Refund" target="_blank" rel="noreferrer">
                  <Text size="s" as="p">
                    Refund
                  </Text>
                </a>
              </li>
              <li>
                <a href="Newsletter" target="_blank" rel="noreferrer">
                  <Text size="s" as="p">
                    Newsletter
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="s" as="p">
                    Terms & Conditions
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="s" as="p">
                    Privacy & Policy
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-80 flex flex-col items-start gap-3.5 md:ml-0">
            <Heading size="xs" as="h6" className="!text-gray-50">
              Contacts
            </Heading>
            <a href="#">
              <div className="flex gap-[15px]">
                <Img src="images/img_frame_gray_50.svg" alt="image_four" className="h-[20px] w-[20px]" />
                <Text size="s" as="p">
                  Delhi, India
                </Text>
              </div>
            </a>
            <div className="flex items-center gap-[15px]">
              <Img src="images/img_frame_gray_50_20x20.svg" alt="image_five" className="h-[20px] w-[20px] self-end" />
              <div className="flex flex-col gap-1.5">
                <Text size="s" as="p">
                  +91 98765 43210
                </Text>
                <Text size="s" as="p">
                  +91 99999 99999
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[58px] h-px w-full self-stretch bg-gray-50" />
        <div className="container-xs mt-5 flex flex-col items-center px-[479px] md:p-5 md:px-5">
          <Text size="xs" as="p">
            © Createnary 2024
          </Text>
        </div>
      </div>
    </footer>
  );
}
