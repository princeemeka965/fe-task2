import { useState } from "react";
import Menu from "../components/Menu";
import {
  CaretDownIcon,
  CircleWarning,
  DocumentIcon,
  EmailIcon,
  SearchIcon,
  TagIcon,
  UserAddIcon,
  UserCheck,
  UserVoice,
} from "../icons/icons";

const AppBody: React.FC = (): any => {
  const [selectedCategory, setSelected] = useState<string>(
    "Opportunity Browsing"
  );
  const [searchInput, setSearchInput] = useState<string>("");

  interface Categories {
    id: number;
    data: string;
    amount: number;
  }

  interface Candidates {
    id: number;
    name: string;
    location: string;
    degree: string;
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
    {
      id: 4,
      data: "Opportunity Browsing",
      amount: 243,
    },
    {
      id: 5,
      data: "Video Interview I",
      amount: 25,
    },
    {
      id: 6,
      data: "Video Interview II",
      amount: 25,
    },
    {
      id: 7,
      data: "Video Interview III",
      amount: 25,
    },
    {
      id: 8,
      data: "Offer",
      amount: 25,
    },
    {
      id: 9,
      data: "Withdrawn",
      amount: 25,
    },
  ];

  const categoryHover = (event: any, state: boolean, data: string): void => {
    // Check if hovered content is not the selected content
    // If it's not, apply hover styles
    if (data !== selectedCategory)
      if (state) {
        // a category div is hovered on
        // change background color of the span element containing our `amount` data
        event.target
          .querySelector("[aria-modal]")
          .classList.add("bg-faintBlue");
        event.target
          .querySelector("[aria-modal]")
          .classList.remove("bg-gray-100");
      } else {
        // on mouse leave
        // revert background color of the span element containing our `amount` data
        event.target
          .querySelector("[aria-modal]")
          .classList.remove("bg-faintBlue");
        event.target.querySelector("[aria-modal]").classList.add("bg-gray-100");
      }
  };

  const handleSearch = (value: string): void => {
    setSearchInput(value);
  };

  // Array listing of candidates
  let candidatesList: Candidates[];
  candidatesList = [
    {
      id: 20,
      name: "Aaliyah Sanderson",
      location: "Riyadh, Saudi Arabia",
      degree: "Bachelor - Cambridge University (2023 - 2023)",
    },
    {
      id: 21,
      name: "John Doe",
      location: "Bostom, USA",
      degree: "Bachelor - MIT (2023 - 2023)",
    },
    {
      id: 22,
      name: "Thomas Matt",
      location: "Edinburgh, UK",
      degree: "Bachelor - Harvard University (2023 - 2023)",
    },
    {
      id: 23,
      name: "Kamilia Smith",
      location: "London, UK",
      degree: "Bachelor - Boston University (2023 - 2023)",
    },
    {
      id: 24,
      name: "Roy Jade",
      location: "Cambridge, UK",
      degree: "Bachelor - Yale (2023 - 2023)",
    },
    {
      id: 25,
      name: "Ahmed Salman",
      location: "New York, USA",
      degree: "Bachelor - Cambridge University (2023 - 2023)",
    },
  ];

  return (
    <>
      <div className="flex justify-end w-full">
        <div
          className="flex flex-col bg-lightManiac p-5"
          style={{ minHeight: "100vh", width: "96%" }}
        >
          {/** HEADER */}
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
                        className={`flex w-full py-3 px-4 justify-between cursor-pointer items-center ${
                          selectedCategory !== categories.data
                            ? "text-darkSkin hover:text-darkBlue hover:bg-opaqueBlue"
                            : "text-darkBlue bg-opaqueBlue"
                        } shadow-sm`}
                        key={categories.id}
                        onMouseEnter={(e) =>
                          categoryHover(e, true, categories.data)
                        }
                        onMouseLeave={(e) =>
                          categoryHover(e, false, categories.data)
                        }
                        onClick={() => setSelected(categories.data)}
                      >
                        <span className="text-base">{categories.data}</span>
                        <span
                          className={`py-1 px-3 rounded-full flex justify-center ${
                            selectedCategory !== categories.data
                              ? "bg-gray-100"
                              : "bg-faintBlue"
                          }`}
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
                <div className="flex ml-1 py-2 px-2 gap-2 items-center rounded-md bg-maniacBlue">
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

          {/** SECTION */}
          <div className="w-full flex my-4 px-3">
            <div className="w-1/3 flex flex-col mr-4">
              <div className="w-full flex bg-white p-3 justify-between items-center self-stretch shadow-sm rounded-md">
                <SearchIcon />
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Search by name, edu, exp or #tag"
                  className="w-full ml-4 h-full"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <CircleWarning />
              </div>

              <div className="w-full flex flex-col bg-white my-6 items-start self-stretch shadow-sm rounded-md">
                <div className="flex w-full p-4 justify-between items-center self-stretch shadow-sm">
                  <span className="text-sm">Filters</span>
                  <span className="text-xs">0 selected</span>
                </div>
                <div className="flex w-full p-4 justify-between items-center self-stretch shadow-sm">
                  <span className="flex">
                    <DocumentIcon />
                    <span className="text-sm flex flex-col justify-center mx-1">
                      Personal Information
                    </span>
                  </span>
                  <CaretDownIcon />
                </div>
                <div className="flex w-full p-4 justify-between items-center self-stretch shadow-sm">
                  <span className="flex">
                    <DocumentIcon />
                    <span className="text-sm flex flex-col justify-center mx-1">
                      Education
                    </span>
                  </span>
                  <CaretDownIcon />
                </div>
                <div className="flex w-full p-4 justify-between items-center self-stretch shadow-sm">
                  <span className="flex">
                    <DocumentIcon />
                    <span className="text-sm flex flex-col justify-center mx-1">
                      Work Experience
                    </span>
                  </span>
                  <CaretDownIcon />
                </div>
                <div className="flex w-full p-4 justify-between items-center self-stretch shadow-sm">
                  <span className="flex">
                    <DocumentIcon />
                    <span className="text-sm flex flex-col justify-center mx-1">
                      Activity Filter
                    </span>
                  </span>
                  <CaretDownIcon />
                </div>
                <div className="flex w-full p-4 justify-between items-center self-stretch shadow-sm">
                  <span className="flex">
                    <DocumentIcon />
                    <span className="text-sm flex flex-col justify-center mx-1">
                      Advanced Filter
                    </span>
                  </span>
                  <CaretDownIcon />
                </div>
              </div>
            </div>

            {/** CANDIDATES LIST BLOCK */}
            <div className="w-2/3 flex ml-1 flex-col bg-white rounded-2xl p-4 gap-1">
              <div className="w-full flex justify-between self-stretch items-center border-b">
                <div className="flex items-center gap-8">
                  <input type="checkbox" className="gap-1" />
                  <span className="flex flex-col justify-center">
                    <span className="text-sm text-darkBlue font-semibold">
                      247 Candidates
                    </span>
                  </span>
                </div>
                <div className="flex items-center self-stretch p-4">
                  <div className="flex items-start gap-2 border-r mx-4">
                    <span className="text-sm text-darkBlue mx-4">
                      Qualified
                    </span>
                  </div>
                  <div className="flex items-start gap-2 border-r mx-4">
                    <span className="text-sm text-darkSkin">Task</span>
                    <span className="py-1 px-2 rounded-full flex justify-center bg-gray-100 mx-2">
                      <span className="text-xxs">25</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2 border-r">
                    <span className="text-sm text-darkSkin">Disqualified</span>
                    <span className="py-1 px-2 rounded-full flex justify-center bg-gray-100 mx-2">
                      <span className="text-xxs">78</span>
                    </span>
                  </div>
                </div>
              </div>

              {candidatesList.map((candidate) => (
                <div
                  className="w-full flex justify-between self-stretch items-center border-b"
                  key={candidate.id}
                >
                  <div className="flex items-center gap-8 py-3">
                    <div className="flex flex-col justify-center">
                      <input type="checkbox" className="gap-2" />
                    </div>
                    <div className="w-14 h-14 flex flex-col justify-center p-4 bg-opaqueBlue rounded-full">
                      <span className="font-semibold text-xl text-greyBlue">
                        AS
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-sm font-semibold">
                        {candidate.name}
                      </span>
                      <span className="text-xxs my-2">
                        {candidate.location}
                      </span>
                      <span className="text-xxs">{candidate.degree}</span>
                      <div className="flex my-2">
                        <span className="text-darkBlue text-xxs">
                          #top_candidate
                        </span>
                        <span className="text-darkBlue text-xxs mx-3">
                          #top_candidate
                        </span>
                      </div>
                      <div className="flex my-1">
                        <span
                          className="flex py-1 px-3 rounded-full"
                          style={{ backgroundColor: "#F3FAFC" }}
                        >
                          <span
                            className="text-xxs font-semibold"
                            style={{ color: "#037092" }}
                          >
                            New York
                          </span>
                        </span>
                        <span
                          className="flex py-1 px-3 mx-2 rounded-full"
                          style={{ backgroundColor: "#F3FAFC" }}
                        >
                          <span
                            className="text-xxs font-semibold"
                            style={{ color: "#037092" }}
                          >
                            Marketing
                          </span>
                        </span>
                        <span
                          className="flex py-1 px-3 rounded-full"
                          style={{ backgroundColor: "#F3FAFC" }}
                        >
                          <span
                            className="text-xxs font-semibold"
                            style={{ color: "#037092" }}
                          >
                            London
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBody;
