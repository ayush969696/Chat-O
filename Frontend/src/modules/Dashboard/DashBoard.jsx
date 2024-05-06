import React from "react";
import avtar from "../../assets/panda.png";
import "../../App.css";

const contacts = [
  {
    name: "John",
    status: "Available",
    img: avtar,
  },
  {
    name: "Cena",
    status: "Unavailable",
    img: avtar,
  },
  {
    name: "Rock",
    status: "Available",
    img: avtar,
  },
  {
    name: "Mox",
    status: "Available",
    img: avtar,
  },
  {
    name: "Dean",
    status: "Available",
    img: avtar,
  },
  {
    name: "Roman",
    status: "Available",
    img: avtar,
  },
];

function DashBoard() {
  return (
    <div className="w-screen flex">
      <div className="w-[22%]  h-scree">
        <div className="flex mx-8 items-center my-4">
          <div className="border-2 p-[2px] border-blue-500 rounded-full">
            <img src={avtar} width={60} />
          </div>
          <div className="ml-6">
            <h3 className="text-2xl">Chat-O</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr className="border-gray-400" />
        <div className="mx-8 mt-8">
          <div className="text-2xl font-semibold text-blue-500 mx-2">
            Messages
          </div>
          <div>
            {contacts.map(({ name, status, img }, index) => {
              return (
                <div key={index} className="py-4 border-b border-gray-500">
                  <div className="cursor-pointer flex items-center">
                    <img src={img} width={55} />
                    <div className="ml-6">
                      <h3 className="text-lg">{name}</h3>
                      <p className="text-sm font-light text-blue-500">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-gray-100 h-[75px] mt-6 rounded-full flex items-center gap-4 shadow-lg">
          <div className="ml-6 cursor-pointer">
            <img src={avtar} width={60} />
          </div>
          <div className="mr-auto">
            <h1 className="text-xl font-semibold">Rock</h1>
            <p className="text-sm text-blue-500 font-semibold">Online</p>
          </div>
          <div className="mr-6 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>
        <div className="w-full h-[75%] overflow-y-scroll scrollbar-hidden my-4">
          <div className="h-[1000px] p-14">
            <div className="p-4 max-w-[40%] flex flex-wrap bg-gray-100 rounded-b-xl rounded-tr-xl mb-2">
              Hey how are you
            </div>
            <div className="p-4 max-w-[40%] flex flex-wrap bg-orange-500 rounded-b-xl rounded-tl-xl ml-auto text-white">
              hello i am fine what about you
            </div>
            <div className="p-4 max-w-[40%] flex flex-wrap bg-gray-100 rounded-b-xl rounded-tr-xl mb-2">
              i'm doing great !
            </div>
            <div className="p-4 max-w-[40%] flex flex-wrap bg-orange-500 rounded-b-xl rounded-tl-xl ml-auto text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, vel!
            </div>
            <div className="p-4 max-w-[40%] flex flex-wrap bg-gray-100 rounded-b-xl rounded-tr-xl mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, vel!
            </div>
            <div className="p-4 max-w-[40%] flex flex-wrap bg-orange-500 rounded-b-xl rounded-tl-xl ml-auto text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, vel!
            </div>
            <div className="p-4 max-w-[40%] flex flex-wrap bg-gray-100 rounded-b-xl rounded-tr-xl mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, vel!
            </div>
            <div className="p-4 max-w-[40%] flex flex-wrap bg-orange-500 rounded-b-xl rounded-tl-xl ml-auto text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, vel!
            </div>
          </div>
        </div>
        <div className="px-12 pb-8 w-full flex items-center">
          <input
            type="text"
            name="message"
            placeholder="Enter a message.."
            className="w-full px-4 outline-none py-4 border-2 border-gray-600 hover:border-orange-500 rounded-full"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-send-2 cursor-pointer hover:text-orange-500"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
            <path d="M6.5 12h14.5" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-send-2 cursor-pointer hover:text-orange-500"

          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
          </svg>
        </div>
      </div>

      <div className="w-[28%] h-screen bg-gray-200"></div>
    </div>
  );
}

export default DashBoard;
