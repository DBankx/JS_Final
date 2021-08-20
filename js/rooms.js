// Worked on by Hundeyin Oluwadamilola
// Student Number: 8734970
// Description: This file maps through the rooms Data as given and displays them in the page

//-------------------------------------------

// Data for the rooms
const roomsData = [
    {
        id: 1,
        name: 'Double Room',
        price: 199,
        size: 45,
        capacity: 4,
        bedSize: 'Double',
        services: ['Wifi', 'Television', 'Bathroom', 'Breakfast', 'Kettles', 'Toaster', 'Microwave', 'Safe', 'Hair Dryer', 'Fridge'],
        images: ['https://cdn.traveltripper.io/site-assets/512_863_12597/media/2018-02-22-041437/large_DDBDB.jpg', 'https://lh6.googleusercontent.com/LAbDs9JrwGjxAAQoHT1lNnKt4a5_OXDqw7S3hZQajGS30XvPwjynPOA8-afixA6QqxL_g7iPn12dRWTO40GhEyPS7n7CDzRYg61Ib334yCK6ZIPjLNZbZExrLk_8BPvf83fq1Qte', 'https://cdn.traveltripper.io/site-assets/512_855_12327/media/2018-02-27-080006/large_ex-double-2.jpg'],
        securityDeposit: 50
    },
    {
        id: 2,
        name: 'Premium King Room',
        price: 159,
        size: 30,
        capacity: 2,
        bedSize: 'King',
        services: ['Wifi', 'Television', 'Bathroom', 'Breakfast', 'Kettles', 'Toaster', 'Microwave', 'Safe', 'Fridge', 'Room Service'],
        images: ['https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/room_photo/001/623/426/sutton-place-s1k-01-wide.jpg', 'https://www.pantageshotel.com/wp-content/uploads/2019/06/PantagesApril5-11a-1-1600x1119.jpg', 'https://blog.travala.com/wp-content/uploads/2020/03/blockchain-revolution-1.jpg'],
        securityDeposit: 100
    },
    {
        id: 3,
        name: 'Deluxe Room',
        price: 250,
        size: 60,
        capacity: 4,
        bedSize: 'Queen XL',
        services: ['Wifi', 'Television', 'Bathroom', 'Breakfast', 'Kettles', 'Toaster', 'Microwave', 'Safe', 'Room Service', 'Heater'],
        images: ['https://www.plazahotelcasino.com/wp-content/uploads/2014/11/DeluxeRoom-Hero-1.jpg', 'https://www.plazahotelcasino.com/wp-content/uploads/2019/02/MiniSuite-Hero-768x339.jpg'],
        securityDeposit: 150
    }
]



// loop through roomsData and add the rooms to the rooms showcase div
for(var i = 0; i < roomsData.length; i++){
    // store each room in a variable
    let room = roomsData[i];
    // create html elements for each table and append it to the rooms_showcase id element
    $('#rooms_showcase').append(
       `<div class='col-lg-4 col-md-6 col-sm-1'>
						<div class='card'>
							<img class='card-img-top card-img-full'
									src='${room !== undefined && room.images[0]}' alt='room-image' />
							<div class='card-body'>
								<h4 class='card-title text-center text-bold'>${room.name}</h4>
								<p class='card-title text-center'><span class='pricing'>$${room.price}</span>/pernight</p>
								<div class='card-text mt-2'>
									<table>
										<tbody>
										<tr>
											<td class="r-o">Size:</td>
											<td>${room.size} ft</td>
										</tr>
										<tr>
											<td class="r-o">Capacity:</td>
											<td>Max persion ${room.capacity}</td>
										</tr>
										<tr>
											<td class="r-o">Bed:</td>
											<td>${room.bedSize} Bed</td>
										</tr>
										<tr>
											<td class="r-o">Deposit:</td>
											<td>$${room.securityDeposit}</td>
										</tr>
										</tbody>
									</table>

									<div class='services mt-4'>
										<p class='text-blue text-sm text-left'>Services</p>
										<ul id='services-list-box'>
                                        <!--Map through the rooms and display a li element-->
										${room.services.map(service => `<li class='services-list'>${service}</li>`).join('')}
										</ul>
									</div>
									<a href="reservations.html" class="btn book-room btn-block">Book Room</a>
								</div>
							</div>
						</div>
					</div>`
    );
}