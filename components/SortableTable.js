import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'

export default function FetchTable (){
const [userList, setUserList] = useState([]);
const URL = 'https://jsonplaceholder.typicode.com/users'
const fetchUserList = async() => {
    try {
      let response = await fetch(URL)
      let userList = await response.json()
      setUserList(userList)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchUserList()
  }, [])

//   function getFn(obj, fn) {
// 	return fn(obj)
//   }

//   function sortArrayByFn(array, fn) {
// 	return[...array.sort(
// 		typeof fn(array[0]==='string'
// 		? (a,b)=>fn(a).localeCompare(fn(b))
// 		:(a,b)=>fn(a)-fn(b))
// 	)
// 	];
//   }

//разные виды сортировок
  const numAscending = [...userList].sort((a, b) => a.id - b.id);
  console.log(numAscending);

  const numDescending = [...userList].sort((a, b) => b.id - a.id);
  console.log(numDescending);

  const strAscending = [...userList].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );
  console.log(strAscending);

  const strDescending = [...userList].sort((a, b) =>
    a.name > b.name ? -1 : 1,
  );
  console.log(strDescending);
	return <>
		<div className='table-block'>
			<Table userList={userList}  />
		</div>
	</>
}



