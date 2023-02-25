// import React from "react";
// import Android from "public/Android.png";
// import favicon from "public/favicon.png";

// import Image from "next/image";

// function MobileDemo() {
//   const [platform, setPlatform] = React.useState("Android");
//   return (
//     <div>
//       <div
//         className={` flex lg:flex flex-col items-center justify-center relative w-full `}
//       >
//         <div
//           className="  absolute top-56 lg:top-2/5 w-56"   
       
//         >
//           <div className="flex bg-[#FFFFFF] justify-center items-center p-1 rounded">
//             <Image src={favicon} className="w-12 object-contain" />

//             <div>
//               <p className=" font  text-xs ">And we are ssssss</p>
//               <p className=" text-xs font-[500]">aaaaaaaaaaaaaaaaaaaaaaaa</p>
//             </div>
//           </div>
//           <p className="bg-[#ffffff] text-center rounded text-sm w-4/5 m-auto text-black mt-2 font-semibold p-2">
//             "response[2]"
//           </p>
//         </div>
//         {platform === "Android" ? (
//           <Image
//             src={Android}
//             className="w-72  my-4  transition-all duration-75 ease-in"
//             alt="demo andrioid"
//           />
//         ) : (
//           <Image src={Apple} className="w-72 my-4 mt-16" alt="demo phone" />
//         )}
//         <div className="flex justify-center">
//           <button
//             type="button"
//             className="text-black bg-white hover:bg-[#A259FF] hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 rounded-l-full mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//             onClick={() => setPlatform("Android")}
//           >
//             Android
//           </button>
//           <button
//             type="button"
//             onClick={() => setPlatform("Apple")}
//             className=" bg-[#A259FF] text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-r-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//           >
//             IOS
//           </button>

//           <button
//             type="button"
//             onClick={() => setDarkmode("Darkmode")}
//             className="text-black bg-white hover:bg-[#A259FF] hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 rounded-l-full mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//           >
//             Dark
//           </button>
//           <button
//             type="button"
//             className=" bg-[#A259FF] text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-r-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//             onClick={() => setDarkmode("Lightmode")}
//           >
//             Light
//           </button>
//         </div>

//         <div className={`${true && "hidden"}`}>
//           <div
//             className=" lg:flex lg:flex-row   cursor-pointer "
//             onClick={() => {
//               navigator.clipboard.writeText(response[0]);
//               // toast("Message Title Copied");
//             }}
//           >
//             <p className="bg-white p-2 rounded-md lg:w-1/2 mx-6 mt-2 lg:mt-0">
//               hi
//             </p>
//           </div>

//           <div className="flex lg:flex-row flex-col mt-3">
//             <p className="bg-white p-2 rounded-md lg:w-1/2 mx-6 mt-2 lg:mt-0">
//               test{" "}
//             </p>
//           </div>

//           <div className="flex lg:flex-row flex-col mt-3">
//             <p className="bg-white p-2 rounded-md lg:w-1/2 mx-6 mt-2 lg:mt-0">
//               test{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MobileDemo;
