import { useState } from "react";
import Menu from "../components/Menu";
import {
  CaretDownIcon,
  EmailIcon,
  TagIcon,
  UserAddIcon,
  UserCheck,
  UserVoice,
} from "../icons/icons";

const AppBody: React.FC = (): any => {
  const [selectedCategory, setSelected] = useState<string>(
    "Opportunity Browsing"
  );

  interface Categories {
    id: number;
    data: string;
    amount: number;
  }

  let browsingCategories: Categories[];

  browsingCategories = [
    {
      id: 1,
      data: "Applied",
      amount: 1745,
    },
    {
      id: 2,
      data: "Shortlisted",
      amount: 453,
    },
    {
      id: 3,
      data: "Technical Interview",
      amount: 123,
    },
  ];

  const categoryHover = (event: any, state: boolean): void => {
    if (state) {
      // a category div is hovered on
      // change background color of the span element containing our `amount` data
      event.target.querySelector("[aria-modal]").classList.add("bg-faintBlue");
    } else {
      // on mouse leave
      // revert background color of the span element containing our `amount` data
      event.target
        .querySelector("[aria-modal]")
        .classList.remove("bg-faintBlue");
    }
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <div
          className="flex flex-col fixed bg-lightManiac p-5"
          style={{ height: "100vh", width: "96%" }}
        >
          <div className="w-full flex flex-row px-3 my-2">
            <div className="w-1/3 flex flex-col">
              <span className="text-lg font-semibold text-darkBlue">
                London Internship Program
              </span>
              <span className="text-xs text-darkSkin my-1">London</span>
            </div>
            <div className="w-1/3 flex p-1">
              <Menu>
                <Menu.Title>
                  <div
                    className="flex w-80 py-2 px-4 bg-white shadow-md justify-between items-center"
                    style={{ borderRadius: "16px 16px 0px 6px" }}
                  >
                    <span className="text-base text-darkBlue">
                      {selectedCategory}
                    </span>
                    <span>
                      <CaretDownIcon />
                    </span>
                  </div>
                </Menu.Title>
                <Menu.Section>
                  <div
                    className="flex w-full flex-col bg-white items-start"
                    style={{ borderRadius: "0px 0px 16px 16px" }}
                  >
                    {browsingCategories.map((categories) => (
                      <div
                        className="flex w-full py-3 px-4 justify-between cursor-pointer items-center text-darkSkin hover:text-darkBlue hover:bg-opaqueBlue shadow-sm"
                        key={categories.id}
                        onMouseEnter={(e) => categoryHover(e, true)}
                        onMouseLeave={(e) => categoryHover(e, false)}
                        onClick={() => setSelected(categories.data)}
                      >
                        <span className="text-base">{categories.data}</span>
                        <span
                          className="py-1 px-3 rounded-full flex justify-center bg-gray-100"
                          aria-modal
                        >
                          <span className="text-sm">{categories.amount}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </Menu.Section>
              </Menu>
            </div>
            <div className="w-1/3 flex flex-col justify-center p-1">
              <div className="w-full flex justify-end h-10">
                <div className="flex p-2 bg-white justify-center items-center mx-1 gap-2 border border-gray-200 rounded-md shadow-sm">
                  <span>
                    <TagIcon />
                  </span>
                </div>
                <div className="flex p-2 bg-white justify-center items-center mx-1 gap-2 border border-gray-200 rounded-md shadow-sm">
                  <span>
                    <UserAddIcon />
                  </span>
                </div>
                <div className="flex p-2 bg-white justify-center items-center mx-1 gap-2 border border-gray-200 rounded-md shadow-sm">
                  <span>
                    <UserCheck />
                  </span>
                </div>
                <div className="flex p-2 bg-white justify-center items-center mx-1 gap-2 border border-gray-200 rounded-md shadow-sm">
                  <span>
                    <UserVoice />
                  </span>
                </div>
                <div className="flex p-2 bg-white justify-center items-center mx-1 gap-2 border border-gray-200 rounded-md shadow-sm">
                  <span>
                    <EmailIcon />
                  </span>
                </div>
                <div className="flex ml-1 py-2 px-3 gap-2 items-center rounded-md bg-maniacBlue">
                  <div className="flex self-stretch items-center">
                    <span className="text-xs text-white">
                      Move To Video Interview I
                    </span>
                  </div>
                  <div className="items-center flex self-stretch p-1 border-l border-gray-100">
                    <img src="./expand_more.png" alt="expand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBody;
