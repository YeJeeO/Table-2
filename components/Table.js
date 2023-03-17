export default function Table({sort, userList}) {
	return <>
		<div>
			<table className='table'>
				<thead>
					<tr>
	<th onClick={() => { 
		sort('id') }}>Id</th>
	<th onClick={() => { 
		sort('username') }}>Name</th>
	<th onClick={() => { 
		sort('email') }}>Email</th>
	<th onClick={() => { 
		sort('address.city') }}>Address</th>
	<th onClick={() => { 
		sort('phone') }}>Phone</th>
	<th onClick={() => { 
		sort('website') }}>Site</th>
	<th onClick={() => { 
		sort('company.name') }}>Company</th>
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