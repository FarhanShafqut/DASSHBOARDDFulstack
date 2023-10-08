'use client'
import React from 'react'
import { addDoc, collection, getDoc } from 'firebase/firestore'
import { useState } from 'react';
import { db } from '../config/firebase';


const StudentForm = () => {
    const [userName, setUserName] = useState("");
    const [email1, setEmail] = useState("")
    const [phone1, setPhone] = useState("")
    const [adress1, setAdress] = useState("")
    const [course1, setCourse] = useState("")
    const [tick, setTick] = useState(false)


    const tik = () => {
        setTick(!tick)
    }
    const onSubmitHanlder = async () => {
        let student = {
            name: userName,
            email: email1,
            course: course1,
            phone1: phone1,
            adress: adress1,

        }
        console.log(student)
        try {
            const studentsData = collection(db, "StudentsData")

            await addDoc(studentsData, student)
            console.log("Document written with ID: ");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
alert('data submited')
    }
    return (
        <>
            <div>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="John Alexa" required onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label for="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Adress</label>
                        <input type="text" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="House not 34..." required onChange={(e) => setAdress(e.target.value)} />
                    </div>
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='my-6 space-x-6' >
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your Course</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e) => setCourse(e.target.value)} >
                    <option value="Graphic"   >Graphic</option>
                        <option value="WebDEV"  >Web Dev</option>
                    </select>
                    {/* <label for="course">Choose a Course:</label>
                    <select id="course" name="cars" onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="Graphic"   >Graphic</option>
                        <option value="WebDEV"  >Web Dev</option>
                    </select>
                    <input type="submit" /> */}
                </div>

                <div className="flex items-start mb-6" onClick={tik}>
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onSubmitHanlder} >Submit</button>

            </div>
            <div>


            </div>
        </>
    )
}

export default StudentForm
