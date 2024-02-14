export async function getUserDetails(userid) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
        //placeholder api
   
    if (!res.ok) {
      // This will activate the closest `error.js`
      // add error.js
      throw new Error('Failed to fetch user details data')
    }
   
    return res.json()
  }

  //Place for others user crud requests