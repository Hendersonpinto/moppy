<!-- # README -->

<!-- Run two servers at the same time -->

foreman start -f Procfile.dev

<!-- Run two servers at the same time -->

!
!
!
!
!
!
!
!
!
!
!

<!-- Controllers Generation -->

< rails generate controller api/v1/Recipes index create show destroy -j=false -y=false --skip-template-engine --no-helper >

<!--


j=false which instructs Rails to skip generating associated JavaScript files.
-y=false which instructs Rails to skip generating associated stylesheet files.
--skip-template-engine, which instructs Rails to skip generating Rails view files, since React is handling your front-end needs.
--no-helper, which instructs Rails to skip generating a helper file for your controller.

<!-- Controllers Generation -->

!
!
!
!
!
!
!
!
!
!
!

<!-- AXIOS -->

<!--

WE NEED TO SEND OUR TOKEN IN POST, PUT AND PATCH METHODS
 -->

const csrfToken = document.querySelector("[name=csrf-token]").content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

<!--
Axios do not support nested queries for the get method,
So the external qs library is used for serializing
 -->

axios.defaults.paramsSerializer = (params) => {
return qs.stringify(params, { arrayFormat: "brackets", encode: false });

<!-- AXIOS -->

!
|
|
|
|
|
|
|
|
|
|
|

<!-- API RESPONSE -->

<!--

There are basically two ways to deal with the response from the API
 -->

<!--
1)  The response from the Rails server when an active relation is returned,
    The server sends an array of objects (read carefully). The first way to
    deal with this is by spreading the array into the state object returned
    by the reducer:

    action.payload = response from Rails = [{id:1, name:mark},{id:2, name:susan}]
 -->

return { ...state, ...action.payload }

<!--
    By spreading (...action.payload) we are basically taking all the elements inside
    of the array (action.payload) and adding them to a new object that is being returned
    The object returned is therefore an object of objects (read carefully)
 -->

<!--
2)  The response from the Rails server when an active relation is returned,
    The server sends an array of objects (read carefully). The second way to
    deal with this is by converting this array of objects into an object of objects
    by using:
    action.payload = response from Rails = [{id:23, name:mark},{id:24, name:susan}]
 -->

return { ...state, ...\_.mapKeys(action.payload, "id") };

<!--
    In this case we are using "lodash" library to use mapKeys method. This method transforms
    an array of objects into an object, which keys is defined by the second argument
    and the values are each of the elements of the array (the contained objects in this case).
    This method takes second argument as the keys of the resulting object, and the value is the
    whole object, as a result we get:
    {23:{id:23, name:mark}, 2:{id:2, name:susan}}
 -->

<!--
3)  Both cases, result in an object with keys equal to every active record from Rails,
    The difference is that by using the lodash method our keys are the same as the id
    contained in our records, so it might be easier to deal with state. (DONT KNOW THIS YET)

    However, when rendering a list of records we would like to have an array of objects
    not a object it self. we then use:
    const mapStateToProps = (state) => {
    return {
      sessions: Object.values(state.sessions),
      currentHost: state.hosts.current_host,
    };
    };

    By using Object.values(object). We take all the values from the object and construct
    and array out of them.

<!-- API RESPONSE -->

|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

<!-- HEROKU AND AXIOS -->

<!--

Problem: When I deployed to heroku, React was making the API calls to
"localhost:5000/api/v1/hosts_check_host" instead of calling them to the
heroku server "moppy-app.herokuapp.com".

Reason: The reason was on the Axios component. I have set the baseURL as a
hardcoded : localhost:5000/api/v1/.

Solution: In order to make call to the heroku server, I needed to define
a proxy: on package.json   "proxy": "http://localhost:5000/". And most important
I changed my axios component to a relative baseURL of "/api/v1".

With this, Heroku will handle the deployment and the right routing

 -->

const csrfToken = document.querySelector("[name=csrf-token]").content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

<!--
Axios do not support nested queries for the get method,
So the external qs library is used for serializing
 -->

export default axios.create({
baseURL: "/api/v1/hosts",
headers: {
common: {
"X-CSRF-TOKEN": csrfToken,
},
},
});

<!-- HEROKU AND AXIOS -->

!
|
|
|
|
|
|
|
|
|
|
|

|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

<!-- HEROKU -->

<!--

Problem: When I deployed to heroku, the app crashed. As a message I got a H10 crash error.
However, the heroku logs and the response from the server did not help at all to show me
what was really happening.

Reason: The reason was that I had a copy of one of the controllers files, with bad code that I
saved for my personal use. However, when deploying Rails consider every single file inside of the
controller folder as a controller (even though the file name ends in controller_copy2.rb).

Solution: In order to see what was happening I spent hours trying to configure bundlepacks, since
I read that this error was because heroku does not know how to handle both react and rails app.

I created two bundle packs:
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2

This way we are telling heroku that should run the nodejs for the react app first and then rails

However, this did not solve my problem, so I read another post where ppl said that if you
run rails console in heroku, you might get more detailed info about the problem:

heroku run rails console

THIS WAS THE BEST THING EVER, Rails showed me exactly which file (the controller copy) was causing
the problem when deployed so I just deleted the file and the app delpoyed successfully


 -->

heroku run rails console

<!-- HEROKU -->
