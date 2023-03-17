import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'


export default function SortableTable() {
	let sort;
	const jsonInfo = 'https://jsonplaceholder.typicode.com/users'
	const [userList, setUserList] = useState([]);
	const [sortMain, setSortMain] = useState([]);
	const [searchValue, setSearchValue]=useState('');
	const sortUsers = (field) => {
	const newData = userList.concat();
	if (sortMain) {
		sort = newData.sort(
			(a, b) => { 
				return a[field] > b[field] ? 1 : -1 }
		)
		} sort = newData.reverse(
			(a, b) => { return a[field] > b[field] ? 1 : -1 }
		)

		setUserList(sort);
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
			<Table userList={userList} sort={sort} />
		</div>
	</>
}



