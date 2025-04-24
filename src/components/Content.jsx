import React from 'react';
import ContentHeader from './ContentHeader';
import '../styles/content.css';
import Card from '../components/Card';
import Teacherlist from './TeacherList';
const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <Card />
      <Teacherlist />


    </div>
  );
}

export default Content;