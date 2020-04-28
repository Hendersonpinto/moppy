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
