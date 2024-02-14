export async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
        //placeholder api
   
    if (!res.ok) {
      // This will activate the closest `error.js`
      // add error.js
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  //place for other user table manipulation reqiests