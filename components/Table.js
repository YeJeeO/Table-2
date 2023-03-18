export default function Table({numAscending,numDescending, strAscending, userList}) {
	return <>
		<div>
			<table className='table'>
				<thead>
					<tr>
	<th onClick={numDescending}>Id</th>
	<th>Name</th>
	<th>Email</th>
	<th>Address</th>
	<th>Phone</th>
	<th>Site</th>
	<th>Company</th>
	<th>Удаление</th>	
					</tr>
				</thead>
				<tbody>{numDescending.map((userList => {
					return(
						<tr key={userList.id}>
 	<th>{userList.id}</th>
	<th>{userList.username}</th>
	<th>{userList.email}</th>
	<th>{userList.address.city}</th>
	<th>{userList.phone}</th>
	<th>{userList.website}</th>
	<th>{userList.company.name}</th>
	<th><button className="close">X</button></th>
		</tr>
					)
				}
				))}

				</tbody>
			</table>
		</div>
	</>
}