# Assignment 1 - API

This assignment is split up into several parts. The first part will be to create
a module to interact with the [WhoIsMyRepresentative API][repapi]. You will
create a module that will expose methods to call the different endpoints. The
second part will be to expose an express app api around your reps module. After
that, we will use express middleware to do other things such as using a
templating engine.

# Part 1

In the file `lib/reps.js`, export 5 methods that implement the 5 different api
endpoints described [here][repapi].

Here are the methods you should implement:

* `allByZip(zip, callback)` - corresponds with `getall_mems.php?zip={zip}`

* `repsByName(name, callback)` - corresponds with `getall_reps_byname.php?name={name}`

* `repsByState(state, callback)` - corresponds with `getall_reps_bystate.php?state={state}`

* `sensByName(name, callback)` - corresponds with `getall_sens_byname.php?name={name}`

* `sensByState(state, callback)` - corresponds with `getall_sens_bystate.php?state={state}`

In all of the above examples, the second parameter will always be a function
which accepts two parameters: and `err` object, and the results of the api call
as the second.

Use an http request module such as [`superagent`][superagent] or
[`request`][request] to make http calls to the whoismyrepresentative api.

Example usage:

```js
// reps is the module that you will develop. The following is how it would be
// used in other modules.
var reps = require('./lib/reps');

reps.allByZip('84043', function(err, results) {
  if (err) return console.log(err);
  console.log(results);
});

reps.sensByState('Hatch', function(err, results) {
  if (err) return console.log(err);
  console.log(results);
});
```

To run the tests, run:

```sh
npm run test:unit
```

# Part 2

Using the [`express`][express] module, write a json api that wraps your module
methods. Create the following endpoints:

* `/all/by-zip/:zip` - maps to `reps.allByZip(zip, cb)`
* `/reps/by-name/:name` - maps to `reps.repsByName(name, cb)`
* `/reps/by-state/:state` - maps to `reps.repsByState(state, cb)`
* `/sens/by-name/:name` - maps to `reps.sensByName(name, cb)`
* `/sens/by-state/:state` - maps to `reps.sensByState(name, cb)`

To run the tests, run:

```sh
npm run test:api
```

# Part 3

We will talk about part 3 at a later time.

[request]: https://github.com/request/request
[superagent]: http://visionmedia.github.io/superagent/
[repapi]: http://whoismyrepresentative.com/api
[express]: http://expressjs.com/en/guide/routing.html
