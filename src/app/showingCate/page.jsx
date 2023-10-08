// "use client"
// import { useState, useEffect } from "react"
// import { getDocs, collection, query, where, deleteDoc, doc, updateDoc} from "firebase/firestore"
// import { db } from '@/app/config/firebase'

// const showingCate =  () => {
    
//   const [students, setStudents] = useState([])
//   const fetchData = async () =>{
//     try {
//         const StudentsCollection =   collection(db,'StudentsData')
//         const StudentsInfo = await getDocs(StudentsCollection)
//         const  infoStudents = []
//         StudentsInfo.forEach((e)=>{
//             infoStudents.push({
//                 id:e.id,
//                 course:e.course,
//                 ...e.data()
//             })
//         })
//         setStudents(infoStudents)
//         console.log("students",infoStudents)
//      } 
//      catch (error) {
//         console.log("error",error);
//   }
//   useEffect(() => {
//     fetchData()
//    }, [])
//   return (
//     <div>
     
//             <div>

//             <h1>List of students</h1>
      
//             <table>
//               <tr>
//                 <td>id</td>
//                 <td>Student Name</td>
//                 <td>Student email</td>
//                 <td>Student course</td>
//                 <td>Student delete</td>
//                 <td>Student update</td>
//               </tr>
//                {
//                 students.map((student)=>{
//                   return (
//                     <tr>
//                       <td>{students.id}</td>
//                       <td>{students.name}</td>
//                       <td>{student.email}</td>
//                       <td>{student.course}</td>
//                       {/* <td><button onClick={()=>onDeletHandler(student.id)}>  { student.id == id && loading ? "loading...":"delete"}</button></td>
//                       <td><button onClick={()=>onUpdateHandler(student.id)}>  { student.id == id && loading ? "loading...":"update"}</button></td> */}
      
//                     </tr>
//                   )
//                 })
//                }
//             </table>
      
//           </div>
//     </div>
//   )
// }
// }

// export default showingCate
'use client'

import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import 'src/app/showingCate/style.css'
import Link from "next/link";

const showingCate = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = collection(db, "categories");
        const categoriesInfo = await getDocs(categories);
        const cateInfo = [];
        categoriesInfo.forEach((e) => {
            cateInfo.push({
            ...e.data(),
          });
        });
        setCate(cateInfo);
        console.log("cate", cateInfo);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div  className="w-full">
        <div className="max-w-7xl py-16 px-4 mx-auto">

       
        <h1>List of students</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      
          {cate.map((student) => {
            return (
                <div>
                    <Link  href='/StudentForm'>
                    <div className="ag-courses_item  " >
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg " style={{ backgroundColor: student.colour }}></div>
        
                <div className="ag-courses-item_title ">
                    <div className='flex items-center justify-center  rounded-full object-cover mt-3' >
                    {student.name}
                        </div>
                {/* <Image width={70} height={10}  src=alt=""/> */}
                </div>
        
                <div className="ag-courses-item_date-box max-w-[350px] ">
                  Skills:
                  <span className="ag-courses-item_date  " >
                  {student.detail}
                  </span>
                </div>
              </a>
            </div>
                    </Link>
              
                </div>
              
              
            );
          })}
      </div>
    </div>
    </div>
    </div>
  );
};

export default showingCate;
