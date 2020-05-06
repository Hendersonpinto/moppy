import React, {useEffect, useState, useRef} from "react";
import {useSelector, useDispatch } from "react-redux";
import {getCategories,getTasks} from '../../redux/actions/Tasks/tasks';

const Tasks = () => {
  
  const tasks = useSelector(state => state.tasks);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function fetchData(){
      const categories = await dispatch(getCategories()); 
      const tasks = dispatch(getTasks());
    }
    fetchData(); 
    }, []);

  render() {
    return (
      <>
        <div className="container">

        </div>
      </>
    );
  }
}
export default Tasks;