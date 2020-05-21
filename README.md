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

Problem: I had change the migration scheme so I wanted to drop the DB and created again. In heroku you can't just use rails db:drop

Solution: Using the snippet below pg:reset instead. The next command runs migration and the seeding as well.

 -->

heroku restart && heroku pg:reset DATABASE --confirm moppy-app && heroku run rake db:migrate && heroku run rake db:seed

<!-- HEROKU -->

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

<!-- AFTER RAILS SUCCESFULLY DELETED A RECORD I NEEDED TO UPDATE MY STATE BY FILTERING THE CLEANING THAT WAS ERASED -->

<!--

Problem: My state is saved in REACT as an object, therefore I can't use .filter because is not an array.
         I could have used _.omit from lodash but I wanted to do it in plain JS. The goal is to filter
         an object based on a key (id in our case).

Solution: I am sending back from rails, a message when the delete is successful and the ID of the record that was deleted.
          I am using this id to basically remove the key value pair from my state so it can do a render only on the components that depend on the "unconfirmed"
          state. To do tis, I am spreading the whole state.unconfirmed (which represent my records before the deletion), From this state.unconfirmed, I am taking
          The key that matches the key from rails (action.payload.id) and calling it "whatever" it does not matter what I call it. The rest of the state,
          I mean those records without the one deleted in rails is saved in a variable called "filteredObject". This filtered object is now replacing the
          unconfirmed object in my state and therefore re rendering the dependant components.




 -->

case DELETE_CLEANING:
if (action.payload.status === 200) {
const {
[action.payload.id]: whatever,
...filteredObject
} = state.unconfirmed;
console.log(filteredObject);
return {
...state,
unconfirmed: filteredObject,
};
}
return { ...state, error: "Something happened in our servers" };

THIS IS WHERE I CAME UP WITH MY SOLUTION, FROM STACKOVERFLOW:

For a single key you can destructure the object, and use computed property with rest to create an object without the property:
const omitSingle = (key, { [key]: \_, ...obj }) => obj
const profile = { name: 'Maria', age: 30 }

const result = omitSingle('name', profile)

console.log(result)

THIS IS THE SAME BUT FILTERING SEVERAL KEYS AT THE SAME TIME

To omit multiple properties, you can convert the object to [key, value] pairs, filter the pairs according to the listed keys array, and then convert back to an object via Object.fromEntries():

const omit = (keys, obj) =>
Object.fromEntries(
Object.entries(obj)
.filter(([k]) => !keys.includes(k))
)

const profile = { name: 'Maria', gender: 'Female', age: 30 }

const result = omit(['name', 'gender'], profile)

console.log(result)

<!-- AFTER RAILS SUCCESFULLY DELETED A RECORD I NEEDED TO UPDATE MY STATE BY FILTERING THE CLEANING THAT WAS ERASED -->

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

<!-- DELETING A RECORD IN RAILS USING DELETE METHOD AND AXIOS -->

<!--

Problem: I had to delete a record in Rails, using axios. However I needed to send the params as option in my axios call

Solution: 1) I created a DELETE route in Rails that called the destroy method:

          2) In order to accept the params from the request, since the same controller is deleting sessions but also fetching all the cleanings
             for an specific host, I needed to accept both host_id and session_id params. I don't know if this is the best way but I created a
             if statement that if there is host in the params let them or if there is sessions permit them.

                        def session_params
                            if params[:host].present?
                            params.require(:host).permit(:host_id)
                            elsif params[:session].present?
                                params.require(:session).permit(:session_id)
                            end
                        end

           3) Since I needed to select the session with the id that is being passed, I use a method:

                        def set_cleaning_session
                         @session = CleaningSession.find(session_params[:session_id])
                        end

            4) Now the destroy method can succesfully destroy the record
                        def destroy
                            @session&.destroy!
                            p @session
                            render json: { message: 'Cleaning deleted succesfully!', id:session_params[:session_id] }
                        end

 -->

const response = await sessionsAxios.delete(
"/api/v1/cleaning_sessions/destroy",
{ params: { session: { session_id: cleaningId } } }
);

<!-- DELETING A RECORD IN RAILS USING DELETE METHOD AND AXIOS -->

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

npm install bit-bin -g

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

<!-- CREATING A RECORD IN RAILS USING POST METHOD AND AXIOS -->

<!--

Problem: I had to create a record in Rails, using axios. However when sending the parameters in the optional fields of axios. I got an error in Rails

Solution: The problem raised because when I used the get or delete method we need to specify "params" in our body. Instead, when using post method
            we don't need to specify "params" but pass the content of the params instead. (Below you can compare both methods)

            As you can see, we dropped the "params" key in the last line for the POST. The problem was that rails wanted to permit the
            params[:session] data but since we added a "params" in POST our params object lokked like this:

            params:{
                params:{
                    session:session
                }
            }
 -->

<!-- GET -->

const response = await sessionsAxios.get(
`/api/v1/cleaning_sessions/index`,
{ params: { host: { host_id: id } } }
);

<!-- DELETE -->

const response = await sessionsAxios.delete(
"/api/v1/cleaning_sessions/destroy",
{ params: { session: { session_id: cleaningId } } }
);

<!-- POST -->

const response = await sessionsAxios.post(
"/api/v1/cleaning_sessions/create",
{ session: session }
);

<!-- DELETING A RECORD IN RAILS USING DELETE METHOD AND AXIOS -->

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
