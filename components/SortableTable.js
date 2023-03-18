import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'


export default function SortableTable() {
	
	const jsonInfo = 'https://jsonplaceholder.typicode.com/users'
	const [userList, setUserList] = useState([]);
	const [sortMain, setSortMain] = useState([]);
	const [searchValue, setSearchValue]=useState('');
	
	function sortFrom (el) {
	const newData = userList.concat();
	let sortFrom;
	if (sortMain) {
		sortFrom = newData.sort(
			(a, b) => { 
				return a[el] > b[el] ? 1 : -1 }
		)
		} 
		setUserList(sortFrom);
		setSortMain(!sortMain);
	}
	useEffect(() => {
		axios.get(jsonInfo)
			.then(
				(res) => {
					setUserList(res.data)
				}
			)
	}, [])

	return <>
		<div className='table-block'>
			<Table userList={userList} sortFrom={sortFrom} />
		</div>
	</>
}



