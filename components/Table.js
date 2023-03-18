export default function Table({sortFrom, userList}) {
	return <>
		<div>
			<table className='table'>
				<thead>
					<tr>
	<th>Id</th>
	<th>Name</th>
	<th>Email</th>
	<th>Address</th>
	<th>Phone</th>
	<th>Site</th>
	<th>Company</th>
	<th>Удаление</th>	
					</tr>
				</thead>
				<tbody>{userList.map((item => (
						<tr key={item.id}>
 	<th>{item.id}</th>
	<th>{item.username}</th>
	<th>{item.email}</th>
	<th>{item.address.city}</th>
	<th>{item.phone}</th>
	<th>{item.website}</th>
	<th>{item.company.name}</th>
	<th><button className="close">X</button></th>
		</tr>
					)))}
				</tbody>
			</table>
		</div>
	</>
}