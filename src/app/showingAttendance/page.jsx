// // "use client"
// // import { useState, useEffect } from "react"
// // import { getDocs, collection, query, where, deleteDoc, doc, updateDoc} from "firebase/firestore"
// // import { db } from '@/app/config/firebase'

// // const ShowStudentData =  () => {
    
// //   const [students, setStudents] = useState([])
// //   const fetchData = async () =>{
// //     try {
// //         const StudentsCollection =   collection(db,'StudentsData')
// //         const StudentsInfo = await getDocs(StudentsCollection)
// //         const  infoStudents = []
// //         StudentsInfo.forEach((e)=>{
// //             infoStudents.push({
// //                 id:e.id,
// //                 course:e.course,
// //                 ...e.data()
// //             })
// //         })
// //         setStudents(infoStudents)
// //         console.log("students",infoStudents)
// //      } 
// //      catch (error) {
// //         console.log("error",error);
// //   }
// //   useEffect(() => {
// //     fetchData()
// //    }, [])
// //   return (
// //     <div>
     
// //             <div>

// //             <h1>List of students</h1>
      
// //             <table>
// //               <tr>
// //                 <td>id</td>
// //                 <td>Student Name</td>
// //                 <td>Student email</td>
// //                 <td>Student course</td>
// //                 <td>Student delete</td>
// //                 <td>Student update</td>
// //               </tr>
// //                {
// //                 students.map((student)=>{
// //                   return (
// //                     <tr>
// //                       <td>{students.id}</td>
// //                       <td>{students.name}</td>
// //                       <td>{student.email}</td>
// //                       <td>{student.course}</td>
// //                       {/* <td><button onClick={()=>onDeletHandler(student.id)}>  { student.id == id && loading ? "loading...":"delete"}</button></td>
// //                       <td><button onClick={()=>onUpdateHandler(student.id)}>  { student.id == id && loading ? "loading...":"update"}</button></td> */}
      
// //                     </tr>
// //                   )
// //                 })
// //                }
// //             </table>
      
// //           </div>
// //     </div>
// //   )
// // }
// // }

// // export default ShowStudentData
// 'use client'
// import { useState, useEffect } from "react";
// import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
// import { db } from '@/app/config/firebase';

// const ShowStudentData = () => {
//   const [students, setStudents] = useState([]);
//   const [id, setId] = useState("")
//   const [loading, setLoading] = useState(false)

//   const deleteHandler = async (id) => {
//     const docRef = doc(db,'StudentsData',id)
//     try{
//         setId(id)
//         setLoading(true)
//         await deleteDoc(docRef)

//         const newStudents = students.filter((student)=>id !== student.id )
//         setLoading(false)
//         setStudents(newStudents)
//     }
//     catch (error) {
//         alert("error")
//        }
//   }

//   const fetchData = async () => {
//     try {
//       const StudentsCollection = collection(db, 'StudentsData');
//       const StudentsInfo = await getDocs(StudentsCollection);
//       const infoStudents = [];
//       StudentsInfo.forEach((e) => {
//         infoStudents.push({
//           id: e.id,
//           course: e.data().course, // Corrected property access
//           name: e.data().name, // Corrected property access
//           email: e.data().email, // Corrected property access
//           ...e.data()
//         });
//       });
//       setStudents(infoStudents);
//       console.log("students", infoStudents);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div   >
//         <h1>List of students</h1>
//         <table>
//           <tr  className="bg-slate-500">
//             <td>ID</td>
//             <td>Student Name</td>
//             <td>Student Email</td>
//             <td>Student Course</td>
//             {/* Add headers for delete and update */}
//             <td>Student Delete</td>
//             <td>Student Update</td>
//           </tr>
//           {students.map((student) => {
//             return (
//               <tr key={student.id} className="space-y-9 bg-slate-100 dark:bg-slate-600  border-2" >
//                 <td  >{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.course}</td>
//                 <td>{student.data}</td>
//                 {/* Add buttons for delete and update */}
//                 <td>
//                   <button onClick={() => deleteHandler(student.id)}>
//                     {student.id === id && loading ? "Loading..." : "Delete"}
//                   </button>
//                 </td>
//                 {/* <td>
//                   <button onClick={() => onUpdateHandler(student.id)}>
//                     {student.id === id && loading ? "Loading..." : "Update"}
//                   </button>
//                 </td> */}
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ShowStudentData;

"use client";
import { useState, useEffect } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from '@/app/config/firebase';

const ShowStudentData = () => {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const deleteHandler = async (id) => {
    const docRef = doc(db, 'Attendance', id);
    try {
      setId(id);
      setLoading(true);
      await deleteDoc(docRef);

      const newStudents = students.filter((student) => id !== student.id);
      setLoading(false);
      setStudents(newStudents);
    } catch (error) {
      alert("Error deleting student");
    }
  };

  const fetchData = async () => {
    try {
      const StudentsCollection = collection(db, 'Attendance');
      const StudentsInfo = await getDocs(StudentsCollection);
      const infoStudents = [];
      StudentsInfo.forEach((e) => {
        infoStudents.push({
          id: e.id,
          course: e.data().course,
          name: e.data().name,
          email: e.data().email,
          ...e.data(),
        });
      });
      setStudents(infoStudents);
      console.log("students", infoStudents);
    } catch (error) {
      console.log("Error fetching students", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-medium text-gray-900 mb-4">List of Students</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Student Name</th>
            <th className="p-2">Student Email</th>
            <th className="p-2">Student Attendance</th>
            {/* Add headers for delete and update */}
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr
                key={student.id}
                className="border-t border-gray-300 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800"
              >
                <td className="p-2">{student.id}</td>
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.email}</td>
                <td className="p-2">{student.date}</td>
                <td className="p-2">
                  <button
                    onClick={() => deleteHandler(student.id)}
                    className={`${
                      student.id === id && loading
                        ? "bg-red-500"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white px-2 py-1 rounded-full focus:outline-none`}
                  >
                    {student.id === id && loading ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStudentData;
