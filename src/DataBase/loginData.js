const login = [
  {
    username: "kalyani.admin",
    password: "admin@123",
    role: "ADMIN",
  },
  {
    username: "kalyani.staff",
    password: "staff@123",
    role: "STAFF",
  },
];

exports.findByUserName = function (userobj, cb) {
  process.nextTick(function () {
    login.forEach((user) => {
      if (user.username === userobj.username) {
        if (user.password === userobj.password) {
          return cb(null, user);
        }
      }
    });
    return cb(null, null);
  });
};
