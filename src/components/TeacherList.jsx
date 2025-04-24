import React from 'react';
import '../styles/teacherlist.css';
import Image1 from '../assets/ttrr.jpg';

const teachers =[
{
    image:Image1,
    name:'Prof. Debby Prisca',
    duration:'20 hours lesson',
    cost:'100',
},
{
  image:Image1,
  name:'Prof. Debby Prisca',
  duration:'20 hours lesson',
  cost:'100',
},
{
  image:Image1,
  name:'Prof. Debby Prisca',
  duration:'20 hours lesson',
  cost:'100',
},
{
  image:Image1,
  name:'Prof. Debby Prisca',
  duration:'20 hours lesson',
  cost:'100',
}
]


const Teacherlist = () => {
  return (
    <div className='teacher--list'>
      <div className='list--header'>
        <h2>Teachers</h2>
        <select>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
        </select>
      </div>
      <div className='list--container'>
        {teachers.map((teacher) => (
          <div className='list' key={teacher.id}> {/* Added key prop for React lists */}
            <div className='teacher--detail'>
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>${teacher.cost}hr.</span>
            <span className='teacher--todo'>:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacherlist;