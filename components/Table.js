export default function Table({sortFrom, userList}) {
	return <>
		<div>
			<table className='table'>
				<thead>
					<tr>
	<th onClick={() => { 
		sortFrom('id') }}>Id</th>
	<th onClick={() => { 
		sortFrom('username') }}>Name</th>
	<th onClick={() => { 
		sortFrom('email') }}>Email</th>
	<th onClick={() => { 
		sortFrom('address.city') }}>Address</th>
	<th onClick={() => { 
		sortFrom('phone') }}>Phone</th>
	<th onClick={() => { 
		sortFrom('website') }}>Site</th>
	<th onClick={() => { 
		sortFrom('company.name') }}>Company</th>
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