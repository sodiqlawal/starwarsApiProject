
const imageLoop = (name) => {
  // if(`{./starwars/${name}.jpg}`){
  //   console.log(true);
  // }
    let path = '' 
    try {
      require(`../starwars/${name}.jpg`);
      path = name + '.jpg';
      return path;
    } catch (err) {
        // console.log('error')
        try {
          require(`../starwars/${name}.png`)
          path = name + '.png'
          return path;
        } catch (err) {
          // path = 'default.png'
          return path;
          // console.log('error')
        }
    }

  }

  export default imageLoop;