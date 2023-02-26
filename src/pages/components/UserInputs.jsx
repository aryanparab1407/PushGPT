import React from 'react'
import Head from 'next/head'
import { Form, Button, Spinner } from 'react-bootstrap'
import { FormEvent, useState } from 'react'
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
//import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import Android from "public/Android1.png";
import Apple from "public/iphone1.png";
import favicon from "public/favicon.png";
import { CopyToClipboard } from 'react-copy-to-clipboard';



function UserInputs() {
  //require("dotenv").config();
  
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  
  
  const openai = new OpenAIApi(configuration);
  

  const [platform, setPlatform] = React.useState("Android");
  const [darkmode, setDarkmode] = React.useState("Darkmode");

  const[quote, setQuote] = useState("");
  const[quoteLoading, setQuoteLoading] = useState(false);
  const[quoteLoadingError, setQuoteLoadingError] = useState(false);
  const[copied, setCopied] = useState(false)

  const [TargetAudience, setTargetAudience] = React.useState("20 year old");
  const [Emotion, setEmotion] = React.useState("happy");
  const [goal, setGoal] = React.useState("");
  const [communicate, setCommunicate] = React.useState("");
  const [tone, setTone] = React.useState("");
  const [response, setResponse] = React.useState([
    "We have been lost without you!",
    "Come back to us and recieve 40% off,our shining star  ",
    "Claim your discount now!  ",
  ]);

  

  async function handleSubmit(){
    // e.preventDefault();
    // const formData = new FormData(e.target);
    //const promptt = formData.get("prompt")?.toString().trim();
    const prompt =  `I want a creative solution,use quotes or dialoges from movies or anything, My target audience is ${TargetAudience}. I want the emotion of the message to be ${Emotion}. The goal of the message should be to communicate ${goal}. I am offering ${communicate}. The tone of the message should be ${tone}. Please create a message with three parts: a message title, a message subtitle, and a call to action. Please present the this as an array , with each part in a separate element. we dont need the labels and use double quotes for the text with emojis `
    const array ={}
    console.log(prompt)
    if (prompt) {
      try {
        setQuote("");
        setQuoteLoadingError(false);
        setQuoteLoading(true);
      
      const response = await openai.createCompletion({
              model: "text-davinci-003",
              // prompt:"tell me a joke",
              prompt: prompt,
              max_tokens: 1000,
              temperature: 0.85,
              frequency_penalty : 2,
              presence_penalty: 2,
              top_p: 1
            });
      //const response= prompt
     
        //const body = await response.json();

        //setQuote(body.quote);
        const newstr = response.data?.choices[0].text.replace(/'/g, `\'`);
        
//     console.log(newstr);
       const array = JSON.parse(newstr);

       setResponse(array);

      } catch (error) {
        console.error(error);
        setQuoteLoadingError(true);
      } finally {
        setQuoteLoading(false);
      }
    }
  }

    
  
  return (
    <>
    <Head>
        <title>PushGPT</title>
        <meta name="description" content="By SpringWood Labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-2/3 m-6 rounded-lg">
        <div className="bg-[#D9D9D966] flex w-full rounded-lg justify-around p-4 ">
        <div className="flex flex-col items-start">
        <div className="flex flex-col p-4 w-full w-full">
        
          <label className="text-[#011429]  my-2 font-normal text-lg">
            {" "}
            Target segment{" "}
          </label>
          <input
            type="text"
            value={TargetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="Enter target segment"
            className="w-full h-10  p-2 focus:outline-[#1ACE66] rounded-md"
          ></input>
        </div>

        <div className="flex justify-around p-4  w-full ">
          <div>
            <label className="text-[#011429]  my-2 font-normal text-lg">
              {" "}
              Emotion{" "}
            </label>
            <ul class="flex" value = {Emotion}
            onChange={(e) => setEmotion(e.target.value)}>
              <li>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="happy"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-small"
                  class="inline-flex items-center justify-between w-full py-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">Happy</div>
                  </div>
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="sad"
                  name="hosting"
                  value="sad"
                  class="hidden peer"

                />
                <label
                  for="sad"
                  class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">Sad</div>
                  </div>
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="hosting-normal"
                  name="hosting"
                  value="Angry"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-normal"
                  class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">Angry </div>
                  </div>
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="hosting-big"
                  name="hosting"
                  value="Fear"
                  class="hidden peer"
                />
                <label
                  for="hosting-big"
                  class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">Fear</div>
                  </div>
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="surprise"
                  name="hosting"
                  value="Surprise"
                  class="hidden peer"
                />
                <label
                  for="surprise"
                  class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">
                      Surprise
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-evenly p-4">
          <div className="flex flex-col">
            <label
              for="countries"
              class=" mb-2 text-lg font-normal text-gray-900 dark:text-white"
            >
              Industry
            </label>
            <select
            value = {communicate}
            onChange={(e) => setCommunicate(e.target.value)}
              id="countries"
              class="bg-gray-50 border-b-2 border-b-[#1ACE66] w-72 focus:outline-[#1ACE66]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="E-commerce/D2C">E-commerce/D2C</option>
              <option value="Finance">Finance </option>
              <option value="Energy">Energy</option>
              <option value="Food and Agriculture">Food and agriculture</option>
              <option value="Education">Education</option>
              <option value="Logistics">Logistics</option>
            </select>
          </div>
          {/* p-b-3 */}
        </div>
      </div>

      <div>
        <div className="flex flex-col p-4 w-full">
          <label className="my-2 font-Normal text-lg">
            {" "}
            Goal of the campaign{" "}
          </label>
          <input
          value= {goal}
          onChange={(e) => setGoal(e.target.value)}
            type="text"
            placeholder="Get users to open the app"
            className=" h-10 p-2 focus:outline-[#1ACE66] rounded-md"
          ></input>
        </div>

        <div className="p-4">
          <label className="text-[#011429]  my-2 font-normal text-lg">
            {" "}
            Tonality{" "}
          </label>
          <ul class="flex" value = {tone}
            onChange={(e) => setTone(e.target.value)}>
            <li>
              <input
                type="radio"
                id="hosting-funny"
                name="hosting"
                value="funny"
                class="hidden peer"
                required
              />
              <label
                for="hosting-funny"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">Funny</div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="Serious"
                name="hosting"
                value="serious"
                class="hidden peer"
              />
              <label
                for="Serious"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">Serious</div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="hosting-urgency"
                name="hosting"
                value="urgency"
                class="hidden peer"
                required
              />
              <label
                for="hosting-urgency"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">Urgency </div>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="emotional"
                name="hosting"
                value="emotional"
                class="hidden peer"
              />
              <label
                for="emotional"
                class="inline-flex items-center justify-between w-full p-2 text-gray-500 peer-checked:border-b-2  border-r-0 border-t-0 border-l-0  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#1ACE66] peer-checked:text-black  hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg  bg-[ #A0A2A4] pr-3">
                    Emotional
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div className="flex flex-col p-4">
          <label
            for="countries"
            class=" mb-2 text-lg font-normal text-gray-900 dark:text-white"
          >
            Message
          </label>
          <input type="text" className="p-2 focus:outline-[#1ACE66] " />
        </div>
     
        <div className=" text-white p-4">
          <p className="bg-[#1ACE66] w-fit p-3 text-center cursor-pointer"  onClick={()=>{
            handleSubmit()
          }} >CREATE</p>
        </div>
        {quoteLoading && <Spinner animation='border' />}
          {quoteLoadingError && "Something went wrong. Please try again."}
          
      
      </div>
        </div>

        <div className="bg-[#D9D9D966] mt-2 p-4">
          <div className="flex items-center justify-around pt-2 mt-2 ">
            <p className=" border-2 border-r-0 border-l-0 font-bold p-1 text-center border-t-0 border-[#1ACE66] ">
              Message Title
            </p>
            <p className="bg-white w-2/5 rounded p-2"> {response[0]}</p>
            <CopyToClipboard text={response[0]} onCopy={() => setCopied(true)}>
            <button>
            <p className="bg-[#1ACE66] text-white p-1 px-3 rounded" >Copy</p>
            </button>
            </CopyToClipboard>
            

          </div>
          <div className="flex items-center justify-around pt-2 mt-2 ">
            <p className="border border-r-0 border-l-0 font-bold p-1 text-center border-t-0 border-[#1ACE66] ">
              Messgae Text
            </p>
            <p className="bg-white w-2/5 rounded p-2">{response[1]}</p>
            <CopyToClipboard text={response[1]} onCopy={() => setCopied(true)}>
            <button>
            <p className="bg-[#1ACE66] text-white p-1 px-3 rounded" >Copy</p>
            </button>
            </CopyToClipboard>
           
          </div>

          <div className="flex items-center justify-around pt-2 mt-2 ">
            <p className="border border-r-0 border-l-0 font-bold p-1 text-center border-t-0 border-[#1ACE66] ">
              Message CTA
            </p>
            <p className="bg-white w-2/5 rounded p-2">{response[2]}</p>
            <CopyToClipboard text={response[2]} onCopy={() => setCopied(true)}>
            <button>
            <p className="bg-[#1ACE66] text-white p-1 px-3 rounded" >Copy</p>
            </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>

      <div className="w-1/3 m-6">
      <div>
      <div
        className={` flex lg:flex flex-col items-center justify-center relative w-full `}
      >
        <div
          className="  absolute top-56 lg:top-2/5 w-56"   
       
        >
          <div className="flex bg-[#FFFFFF] justify-center items-center p-1 rounded">
            <Image src={favicon} className="w-12 object-contain" />

            <div>
              <p className=" font  text-xs ">{response[0]}</p>
              <p className=" text-xs font-[500]">{response[1]}</p>
            </div>
          </div>
          <p className="bg-[#ffffff] text-center rounded text-sm w-4/5 m-auto text-black mt-2 font-semibold p-2">
          {response[2]}
          </p>
        </div>
        {platform === "Android" ? (
          <Image
            src={Android}
            className="w-72  my-4  transition-all duration-75 ease-in"
            alt="demo andrioid"
          />
        ) : (
          <Image src={Apple} className="w-72 my-4 mt-16" alt="demo phone" />
        )}
        <div className="flex justify-center">
          <button
            type="button"
            className="text-black bg-white hover:bg-[#1ACE66] hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 rounded-l-full mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => setPlatform("Android")}
          >
            Android
          </button>
          <button
            type="button"
            onClick={() => setPlatform("Apple")}
            className=" bg-[#1ACE66] text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-r-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            IOS
          </button>

          <button
            type="button"
            onClick={() => setDarkmode("Darkmode")}
            className="text-black bg-white hover:bg-[#1ACE66] hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 rounded-l-full mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Dark
          </button>
          <button
            type="button"
            className=" bg-[#1ACE66] text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-r-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => setDarkmode("Lightmode")}
          >
            Light
          </button>
        </div>

        <div className={`${true && "hidden"}`}>
          <div
            className=" lg:flex lg:flex-row   cursor-pointer "
            onClick={() => {
              navigator.clipboard.writeText(response[0]);
              // toast("Message Title Copied");
            }}
          >
            <p className="bg-white p-2 rounded-md lg:w-1/2 mx-6 mt-2 lg:mt-0">
              hi
            </p>
          </div>

          <div className="flex lg:flex-row flex-col mt-3">
            <p className="bg-white p-2 rounded-md lg:w-1/2 mx-6 mt-2 lg:mt-0">
              test{" "}
            </p>
          </div>

          <div className="flex lg:flex-row flex-col mt-3">
            <p className="bg-white p-2 rounded-md lg:w-1/2 mx-6 mt-2 lg:mt-0">
              test{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>


      
    </>
  );
}

export default UserInputs;


