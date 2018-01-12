var getUser = (id, callback) => {
    var user = {
        id,
        name: "Thiago"
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(55, (user) => {
    console.log(user);
});