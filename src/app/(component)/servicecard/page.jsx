import React from 'react'
import 'src/app/(component)/servicecard/style.css'
export default function ServiceCard(props) {
  return (
    <div >
    <div className="ag-courses_item  ">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg " style={{ backgroundColor: props.bg }} ></div>

        <div className="ag-courses-item_title ">
            <div className='flex items-center justify-center  rounded-full object-cover mt-3' >
                {props.source}
                </div>
        {/* <Image width={70} height={10}  src=alt=""/> */}
        </div>

        <div className="ag-courses-item_date-box max-w-[350px] ">
          Skills:
          <span className="ag-courses-item_date  " >
            {props.txt1}
          </span>
        </div>
      </a>
    </div>
  </div>
  )
}
<div >
<div className="ag-courses_item  ">
  <a href="#" className="ag-courses-item_link">
    <div className="ag-courses-item_bg " style={{ backgroundColor: props.bg }} ></div>

    <div className="ag-courses-item_title ">
        <div className='flex items-center justify-center  rounded-full object-cover mt-3' >
            {props.source}
            </div>
    {/* <Image width={70} height={10}  src=alt=""/> */}
    </div>

    <div className="ag-courses-item_date-box max-w-[350px] ">
      Skills:
      <span className="ag-courses-item_date  " >
        {props.txt1}
      </span>
    </div>
  </a>
</div>
</div>