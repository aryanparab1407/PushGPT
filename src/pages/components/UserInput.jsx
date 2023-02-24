import React from "react";
import MobileDemo from "./MobileDemo";

function UserInput() {
  return (
    <>
    
    {/* <div className="bg-[#D9D9D966] w-2/3 grid gap-4 grid-cols-1">
      {/* p1 */}
      <div className="flex justify-evenly bg-gray-100 w-full">
        {/* <div className="grid grid-cols-2  gap-8"> */}

        <div className="flex flex-col ">
          <label> Target segment </label>
          <input
            type="text"
            placeholder="Enter target segment hweduash"
            className="w-72 h-10 border-2 border-[#A259FF] rounded-md"
          ></input>
        </div>
        {/* pb1 */}
        <div className="flex flex-col">
          <label> Goal of the campaign </label>
          <input
            type="text"
            placeholder="Enter target segment"
            className="w-72 h-10 border-2 border-[#A259FF] rounded-md"
          ></input>
        </div>
      </div>

      {/* pa2 */}
      <div className="flex justify-around p-4 w-full ">
        <div>
          <label> Emotion </label>
          <ul class="flex">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                class="hidden peer"
                required
              />
              <label
                for="hosting-small"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold bg-[ #A0A2A4]">
                    Happy
                  </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="sad"
                name="hosting"
                value="hosting-sad"
                class="hidden peer"
              />
              <label
                for="sad"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-normal bg-[ #A0A2A4]">
                    Sad
                  </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="hosting-normal"
                name="hosting"
                value="hosting-normal"
                class="hidden peer"
                required
              />
              <label
                for="hosting-normal"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-normal bg-[ #A0A2A4]">
                    Angry{" "}
                  </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
              />
              <label
                for="hosting-big"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-normal bg-[ #A0A2A4]">
                    Fear
                  </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
              />
              <label
                for="hosting-big"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-normal bg-[ #A0A2A4]">
                    Surprise
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>

{/* pb2 */}
        <div>
          <label> Emotion </label>
          <ul class="flex">
            <li>
              <input
                type="radio"
                id="hosting-funny"
                name="hosting"
                value="hosting-funny"
                class="hidden peer"
                required
              />
              <label
                for="hosting-funny"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold bg-[ #A0A2A4]">
                    Funny
                  </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="Serious"
                name="hosting"
                value="hosting-sad"
                class="hidden peer"
              />
              <label
                for="Serious"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-normal bg-[ #A0A2A4]">
                    Serious
                  </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="hosting-urgency"
                name="hosting"
                value="hosting-normal"
                class="hidden peer"
                required
              />
              <label
                for="hosting-urgency"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-normal bg-[ #A0A2A4]">
                    Urgency{" "}
                  </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="emotional"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
              />
              <label
                for="emotional"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-r-0 border-t-0 border-l-0 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-normal bg-[ #A0A2A4]">
                    Emotional
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
{/* pa3 */}
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <label
            for="countries"
            class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Industry
          </label>
          <select
            id="countries"
            class="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>E-commerce/D2C</option>
            <option value="US">Finance </option>
            <option value="CA">Energy</option>
            <option value="FR">Food and agriculture</option>
            <option value="DE">Education</option>
            <option value="DS">Logistics</option>
          </select>
        </div>
{/* p-b-3 */}
        <div className="flex flex-col">
          <label
            for="countries"
            class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Industry
          </label>
          <input type="text" />
        </div>
      </div>
      <div className="w-full text-white  flex items-end justify-center mx-6 p-4">
        <p className="bg-[#A259FF] p-4">CREATE</p>
      </div>
    {/* </div> */}
     {/* */} 
      <MobileDemo/>
    </>
  );
}

export default UserInput;
