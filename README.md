# ========== intorduction ==========
    https://bw-family-cookbook.herokuapp.com/

## ========== dependencies ==========
    (need text)

## ========== how to run the backend ==========

* download the project onto your local computer

* create a ".env" file and add the "NODE_ENV=development" into ".env" file

* run "npm i" to install node and related libraries

* make sure the PostgreSQL is installed

* make sure the PG Admin is installed

* make sure the PostgreSQL has the username "postgres" and password "P@$$w0rd" configured

* make sure the running server has a database called "cookbook" for development, with username "postgres", password "P@$$w0rd", and connect of "127.0.0.1'

* make sure the running server has a database called "cookbook_test" for testing, with username "postgres", password "P@$$w0rd", and connect of "127.0.0.1'


## ========== troubleshooting ==========
    (need text)

## ========== response code ==========
    
    Status Code | Description
    --- | --- 
    200 | request successfully processed 
    201 | successfully created the new record
    400 | the request could not be understood by the server
    401 | unauthorized request from an unknown user
    403 | unauthorized request from a known user
    404 | the request resource is not found on the server
    500 | unknown and/or unexpected error occurred
    503 | the server is not ready to handle this request

## Endpoint Summary

### API Auth Endpoint
<table border="1" cellpadding="4" cellspacing="0">
        <thead>
                <tr>
                        <th align="center">Method</th>
                        <th align="center">Endpoint</th>
                        <th align="center">Body (require)</th>
                        <th align="center">Body (optional)</th>
                        <th align="center">Notes</th>
                </tr>
        </thead>
        <tbody>
                <tr valign="top">
                        <td align="center">POST</td>
                        <td align="center">/api/auth/register</td>
                        <td align="center">username, password</td>
                        <td align="center">N/A</td>
                        <td align="left">* all inputs are string</td>
                </tr>
                <tr valign="top">
                        <td align="center">POST</td>
                        <td align="center">/api/auth/login</td>
                        <td align="center">username, password</td>
                        <td align="center">N/A</td>
                        <td align="left">* all inputs are string</td>
                </tr>
        </tbody>
</table>
</br>

### API Users Endpoint
<table border="1" cellpadding="4" cellspacing="0">
        <thead>
                <tr>
                        <th align="center">Method</th>
                        <th align="center">Endpoint</th>
                        <th align="center">Body (require)</th>
                        <th align="center">Body (optional)</th>
                        <th align="center">Notes</th>
                </tr>
        </thead>
        <tbody>
                <tr valign="top">
                        <td align="center">GET</td>
                        <td align="center">/api/users/</td>
                        <td align="center">N/A</td>
                        <td align="center">N/A</td>
                        <td align="left"></td>
                </tr>
                <tr valign="top">
                        <td align="center">GET</td>
                        <td align="center">/api/users/:user_id</td>
                        <td align="center">N/A</td>
                        <td align="center">N/A</td>
                        <td align="left"></td>
                </tr>
        </tbody>
</table>
</br>

### API Recipes Endpoint
<table border="1" cellpadding="4" cellspacing="0">
        <thead>
                <tr>
                        <th align="center">Method</th>
                        <th align="center">Endpoint</th>
                        <th align="center">Body (require)</th>
                        <th align="center">Body (optional)</th>
                        <th align="center">Notes</th>
                </tr>
        </thead>
        <tbody>
                <tr valign="top">
                        <td align="center">GET</td>
                        <td align="center">/api/recipes/</td>
                        <td align="center">N/A</td>
                        <td align="center">N/A</td>
                        <td align="left"></td>
                </tr>
                <tr valign="top">
                        <td align="center">GET</td>
                        <td align="center">/api/recipes/:recipe_id</td>
                        <td align="center">N/A</td>
                        <td align="center">N/A</td>
                        <td align="left"></td>
                </tr>
                <tr valign="top">
                        <td align="center">POST</td>
                        <td align="center">/api/recipes/</td>
                        <td align="center">N/A</td>
                        <td align="center">recipe_name, source, ingredients, steps</td>
                        <td align="left">* all inputs are string</td>
                </tr>
                <tr valign="top">
                        <td align="center">PUT</td>
                        <td align="center">/api/recipes/:recipe_id</td>
                        <td align="center">N/A</td>
                        <td align="center">recipe_name, source, ingredients, steps</td>
                        <td align="left">* all inputs are string</td>
                </tr>
                <tr valign="top">
                        <td align="center">DELETE</td>
                        <td align="center">/api/recipes/:recipe_id</td>
                        <td align="center">N/A</td>
                        <td align="center">N/A</td>
                        <td align="left"></td>
                </tr>
        </tbody>
</table>
</br>