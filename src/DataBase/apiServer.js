const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "node_modules/json-server/dist",
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const loginData = require("./loginData");
const facebookStrategy = require("passport-facebook");
const googleStretegy = require("passport-google-oauth").OAuth2Strategy;
const session = require("express-session");
const { MemoryStore } = require("express-session");

server.use(
  session({
    secret: "SECRET",
    key: "user",
    resave: true,
    saveUninitialized: true,
    store: new MemoryStore(),
    cookie: {
      expires: new Date(Date.now() + 30 * 86400 * 1000),
    },
  })
);

server.use(passport.initialize());

server.use(passport.session());

// Configure the Basic strategy for use by Passport.    // <2>
passport.use(
  "local",
  new Strategy(function (username, password, done) {
    loginData.findByUserName(
      { username: username, password: password },
      function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      }
    );
  })
);

passport.use(
  new googleStretegy(
    {
      clientID:
        "1052221751859-3akqpb4d4o4sv81ru3slmujl0cl3uuqs.apps.googleusercontent.com",
      clientSecret: "TQYuhxaqeIv1jQNTPA_mCqV_",
      callbackURL: "/api/auth/google/callback",
    },
    function (accessToken, refreshToken, user, cb) {
      return cb(null, user);
    }
  )
);

/** passport setup for Facebook login */
passport.use(
  new facebookStrategy(
    {
      clientID: 330112075031813,
      clientSecret: "579b840e3bbe82ad2e86d0476e94d82c",
      callbackURL: "/api/auth/facebook/callback",
      profileFields: ["id", "displayName", "email"],
      enableProof: true,
    },
    function (accessToken, refreshToken, user, cb) {
      return cb(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// localhost:3000/login     // <3>
server.post("/api/login", passport.authenticate("local"), function (req, res) {
  req.session.user = req.user;
  return res.send({ username: req.user.username, role: req.user.role });
});

server.get("/api/loginSuccess", function (req, res) {
  if (req.user || req.session.user) {
    return res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user ? req.user : req.session.user,
    });
  } else {
    return res
      .status(401)
      .send({ success: false, message: "user authentication failed" });
  }
});

const isAuthenticate = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/");
};

server.get("/api/PageNotFound", function (req, res) {
  return res.send({ Success: false });
});

server.get("/api/facebookLogIn", isAuthenticate, function (req, res) {
  return res.redirect("/");
});

server.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

server.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/PageNotFound" }),
  function (req, res) {
    // Successful authentication, redirect success.
    return res.redirect("/");
  }
);

server.get(
  "/api/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);

server.get(
  "/api/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/api/facebookLogIn",
    failureRedirect: "/PageNotFound",
  })
);

server.get("/api/logout", function (req, res) {
  req.logout();
  req.session.user = null;
  return res.redirect("/");
});

// Simulate delay on all requests
server.use(function (req, res, next) {
  setTimeout(next, 0);
});

server.use(router);
const port = 3001;
server.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});
