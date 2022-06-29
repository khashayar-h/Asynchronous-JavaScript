
  async function notifyCustomer(){
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...')
      }
  }

  notifyCustomer();
  
  function getCustomer(id) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Khashayar Haghighi', 
              isGold: true, 
              email: 'xerxes.2000a@gmail.com' 
            });
          }, 4000);  
    });
  }
  
  function getTopMovies() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
    });
  }