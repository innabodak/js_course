// Переписать функцию состоящую из обратных вызовов(callbacks) с помощью промисов(promises)


// const checkAuth = (callback) => {
//   setTimeout(() => {
//     callback( {isAuth: true} );
//   }, 2000);
// };


// const getUser = (authInfo, callback) => {
//   if (!authInfo.isAuth) {
//     callback(null);
//     return;
//   }
//   setTimeout(() => {
//     callback( {name: 'Max'} );
//   }, 2000);
// };


// checkAuth((authInfo) => {
//   getUser(authInfo, (user) => {
//     console.log(user.name);
//   });
// });

// ANSWER
const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({isAuth: true});
    }, 2000); 
  });
}

const getUser = (authInfo) => {
	return new Promise((resolve, reject) => {
		if (!authInfo.isAuth) {
			reject(null);
			return;
		}

		setTimeout(() => {
			resolve( {name: 'Max'} );
		}, 2000);
	});
};

checkAuth()
	.then((res) => getUser(res)) /*.then((res) => {return getUser(res);})*/
	.then((res) => {
		console.log(res.name);
	});

