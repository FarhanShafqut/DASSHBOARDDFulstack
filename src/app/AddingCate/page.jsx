// 'use client'
// import React from 'react'
// import { addDoc, collection, getDoc } from 'firebase/firestore'
// import { useState } from 'react';
// import { db } from '../config/firebase';


// const AddingCate = () => {
//     const [userName, setUserName] = useState("");



//     const [colour1, setColour] = useState('')

//     const [detail1, setDetail] = useState("")

//     const [tick, setTick] = useState(false)


//     const tik = () => {
//         setTick(!tick)
//     }
//     const onSubmitHanlder = async () => {
//         let student = {
//             name: userName,
//             detail: detail1,
//             colour: colour1,

//         }
//         console.log(student)
//         try {
//             const catedata = collection(db, "categories")

//             await addDoc(catedata, student)
//             console.log("Document written with ID: ");
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
// alert('data submited')
//     }
//     return (
//         <>
//         <h1>ADDING Cateegories DATA</h1>
//             <div>

//                 <div className="grid gap-6 mb-6 md:grid-cols-2">
//                     <div>
//                         <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Cate Name</label>
//                         <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Graphic Design" required onChange={(e) => setUserName(e.target.value)} />
//                     </div>
//                     <div>
//                         <label for="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter detial</label>
//                         <input type="text" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="detail...." required onChange={(e) => setDetail(e.target.value)} />
//                     </div>
//                     <div>
//                         <label for="cate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Color</label>
//                         <input type="text" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="blue...." required onChange={(e) => setColour(e.target.value)} />
//                     </div>


//                 </div>
//                 {/* <div className='my-6 space-x-6' >
//                     <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your Course</label>
//                     <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e) => setCourse(e.target.value)} >
//                     <option value="Graphic"   >Graphic</option>
//                         <option value="WebDEV"  >Web Dev</option>
//                     </select>
//                     <label for="course">Choose a Course:</label>
//                     <select id="course" name="cars" onChange={(e) => setCourse(e.target.value)}
//                     >
//                         <option value="Graphic"   >Graphic</option>
//                         <option value="WebDEV"  >Web Dev</option>
//                     </select>
//                     <input type="submit" />
//                 </div> */}

//                 <div className="flex items-start mb-6" onClick={tik}>
//                     <div className="flex items-center h-5">
//                         <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
//                     </div>
//                     <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
//                 </div>
//                 <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onSubmitHanlder} >Submit</button>

//             </div>

//         </>
//     )
// }

// export default AddingCate

'use client';
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const AddingCate = () => {
  const [userName, setUserName] = useState('');
  const [colour1, setColour] = useState('');
  const [detail1, setDetail] = useState('');
  const [tick, setTick] = useState(false);

  const tik = () => {
    setTick(!tick);
  };

  const onSubmitHandler = async () => {
    const category = {
      name: userName,
      detail: detail1,
      colour: colour1,
    };

    try {
      const categoryData = collection(db, 'categories');
      await addDoc(categoryData, category);
      console.log('Document written with ID: ');
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    alert('Data submitted');
  };

  return (
    <div className="bg-slate-700 dark:bg-slate-400 min-h-screen py-8">
      <div className="max-w-md mx-auto bg-slate-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-medium text-gray-900 mb-4 text-center">Add a New Category</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="cate_name" className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              id="cate_name"
              className="input-style"
              placeholder="Graphic Design"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cate_detail" className="block text-sm font-medium text-gray-700">
              Detail
            </label>
            <input
              type="text"
              id="cate_detail"
              className="input-style"
              placeholder="Detail...."
              required
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cate_colour" className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <input
              type="text"
              id="cate_colour"
              className="input-style"
              placeholder="Blue...."
              required
              onChange={(e) => setColour(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 border rounded focus:ring-2 focus:ring-blue-300"
              required
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.
            </label>
          </div>
          <button
            type="submit"
            className="btn-submit bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={onSubmitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddingCate;
