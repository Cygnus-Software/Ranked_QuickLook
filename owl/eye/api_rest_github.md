# GitHub REST API
# Index
- [What is it](#what-is-it)
- [Summary representations](#summary-representations)
- [Detailed representations](#detailed-representations)
- [Authentication](#authentication)
- [Failed login limit](#failed-login-limit)
- [Parameters](#parameters)
- [Root endpoint](#root-endpoint)
- [HTTP verbs](#http-verbs)
- [Libraries](#libraries)
- [Features](#features)
  - [Rate limiting](#rate-limiting)
  - [SCIM API](#scim-api)
    - [Authenticating calls to the SCIM API](#authenticating-calls-to-the-scim-api)
    - [Mapping of SAML and SCIM data](#mapping-of-saml-and-scim-data)
  - [Packages](#packages)
    - [How and what can you do with packages?](#how-and-what-can-you-do-with-packages)
  - [Issues](#issues)
    - [How and what can you do?](#how-and-what-can-you-do)
  - [Git database](#git-database)
    - [How and what can you do with database?](#how-and-what-can-you-do-with-database?)
## What is it?
Is an API (aplication protocol interface) to create calls to get the data you need to integrate with GitHub.

All API access is over HTTPS, and accessed from https://api.github.com. All data is sent and received as JSON.
```
$ curl -I https://api.github.com/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4987
> X-RateLimit-Reset: 1350085394
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```
Blank fields are included as null instead of being omitted.

## Summary representations

When you fetch a list of resources, the response includes a subset of the attributes for that resource. This is the "summary" representation of the resource.

Example: When you get a list of repositories, you get the summary representation of each repository. Here, we fetch the list of repositories owned by the octokit organization:
```
GET /orgs/octokit/repos
```
## Detailed representations

When you fetch an individual resource, the response typically includes all attributes for that resource. This is the "detailed" representation of the resource.

Example: When you get an individual repository, you get the detailed representation of the repository. Here, we fetch the octokit/octokit.rb repository:
```
GET /repos/octokit/octokit.rb
```
The documentation provides an example response for each API method. The example response illustrates all attributes that are returned by that method.

## Authentication

There are two ways to authenticate through GitHub REST API. Requests that require authentication will return 404 Not Found, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.
> Basic authentication:
```
$ curl -u "username" https://api.github.com
```
> OAuth2 token (sent in a header)

```
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```

## Failed login limit

Authenticating with invalid credentials will return 401 Unauthorized:
```
$ curl -I https://api.github.com -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "https://docs.github.com/rest"
> }
```
After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with 403 Forbidden:

```
$ curl -i https://api.github.com -u
-u valid_username:valid_token
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "https://docs.github.com/rest"
> }
```

# Parameters

Many API methods take optional parameters. For GET requests, any parameters not specified as a segment in the path can be passed as an HTTP query string parameter:
```
$ curl -i "https://api.github.com/repos/vmg/redcarpet/issues?state=closed"
```
In this example, the 'vmg' and 'redcarpet' values are provided for the :owner and :repo parameters in the path while :state is passed in the query string.

For POST, PATCH, PUT, and DELETE requests, parameters not included in the URL should be encoded as JSON with a Content-Type of 'application/json':
```
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' https://api.github.com/authorizations
```

## Root endpoint

You can issue a GET request to the root endpoint to get all the endpoint categories that the REST API supports:
```
$ curl
-u username:token https://api.github.com
```

## HTTP verbs
Where possible, API v3 strives to use appropriate HTTP verbs for each action.

- HEAD:	Can be issued against any resource to get just the HTTP header info.
- GET:	Used for retrieving resources.
- POST:	Used for creating resources.
- PATCH:	Used for updating resources with partial JSON data. For instance, an Issue resource has title and body attributes. A PATCH request may accept one or more of the attributes to update the resource.
- PUT:	Used for replacing resources or collections. For PUT requests with no body - attribute, be sure to set the Content-Length header to zero.
- DELETE:	Used for deleting resources.
## Libraries

You can use the official Octokit library and other third-party libraries to extend and simplify how you use the GitHub API.

Octokit comes in many flavors

Use the official Octokit library, or choose between any of the available third party libraries.

Ruby → octokit.rb

.NET → octokit.net

JavaScript → octokit/octokit.js

# Features
## Rate limiting

For API requests using Basic Authentication or OAuth, you can make up to 5.000 requests per hour.

For users that belong to a GitHub Enterprise Cloud account,have an increased limit of 15.000 requests per hour.

When using the built-in GITHUB_TOKEN in GitHub Actions, the rate limit is 1.000 requests per hour per repository. For organizations that belong to a GitHub Enterprise Cloud account, this limit is 15.000 requests per hour per repository.

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

Note that the Search API has custom rate limit rules.

The returned HTTP headers of any API request show your current rate limit status:
```
$ curl -I https://api.github.com/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

Header Name -	Description
- X-RateLimit-Limit	The maximum number of requests you're permitted to make per hour.
- X-RateLimit-Remaining	The number of requests remaining in the current rate limit window.
- X-RateLimit-Reset	The time at which the current rate limit window resets in UTC epoch seconds.

## SCIM API
You can control and manage your GitHub organization members access using SCIM API.

SCIM Provisioning for Organizations

The SCIM API is used by SCIM-enabled Identity Providers (IdPs) to automate provisioning of GitHub organization membership. The GitHub API is based on version 2.0 of the SCIM standard. The GitHub SCIM endpoint that an IdP should use is: https://api.github.com/scim/v2/organizations/{org}/.

### Authenticating calls to the SCIM API

You must authenticate as an owner of a GitHub organization to use its SCIM API. The API expects an OAuth 2.0 Bearer token to be included in the Authorization header. You may also use a personal access token, but you must first authorize it for use with your SAML SSO organization.
### Mapping of SAML and SCIM data

The SAML IdP and the SCIM client must use matching NameID and userName values for each user. This allows a user authenticating through SAML to be linked to their provisioned SCIM identity.

## Packages

The GitHub Packages API enables you to manage packages using the REST API.

To use this API, you must authenticate using a personal access token.

    To access package metadata, your token must include the read:packages scope.
    To delete packages and package versions, your token must include the read:packages and delete:packages scopes.
    To restore packages and package versions, your token must include the read:packages and write:packages scopes.

If your package_type is npm, maven, rubygems, or nuget, then your token must also include the repo scope since your package inherits permissions from a GitHub repository. If your package is in the Container registry, then your package_type is container and your token does not need the repo scope to access or manage this package_type. container packages offer granular permissions separate from a repository.

if you want to use the GitHub Packages API to access resources in an organization with SSO enabled, then you must enable SSO for your personal access token. For more information, see "Authorizing a personal access token for use with SAML single sign-on."

### How and what can you do with packages?

Create a package for an organization:
- GET /orgs/{org}/packages/{package_type}/{package_name}

Delete a package for an organization:
- DELETE /orgs/{org}/packages/{package_type}/{package_name}

Restore a package for an organization:
- POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore

Get a package for a user:
- GET /users/{username}/packages/{package_type}/{package_name}

Get all package versions for a package owned by a user:
- GET /users/{username}/packages/{package_type}/{package_name}/versions

Get a package version for a user:
- GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}

## Issues

The Issues API enables you to view and manage issues, including issue assignees, comments, labels, and milestones.

### How and what can you do?

List issues assigned to the authenticated user:
- GET /issues

List organization issues assigned to the authenticated user:
- GET /orgs/{org}/issues

List repository issues:
- GET /repos/{owner}/{repo}/pulls

Create a pull request:
- POST /repos/{owner}/{repo}/pulls

Get a pull request:
- GET /repos/{owner}/{repo}/pulls/{pull_number}

Update a pull request:
- PATCH /repos/{owner}/{repo}/pulls/{pull_number}ç

List commits on a pull request:
- GET /repos/{owner}/{repo}/pulls/{pull_number}/commits

List pull requests files
- GET /repos/{owner}/{repo}/pulls/{pull_number}/files

Check if a pull request has been merged:
- GET /repos/{owner}/{repo}/pulls/{pull_number}/merge

Merge a pull request:
- PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge

Update a pull request branch:
- PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch

List reviews for a pull request:
- GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews

Create a review for a pull request:
- POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews

Get a review for a pull request:
- GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}

Update a review for a pull request:
- PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}

Delete a pending review for a pull request:
- DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}

List comments for a pull request review:
- GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments

Dismiss a review for a pull request:
- PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals

Submit a review for a pull request:
- POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events

Review comments:
- GET /repos/{owner}/{repo}/pulls/comments

Get a review comment for a pull request:
- GET /repos/{owner}/{repo}/pulls/comments/{comment_id}

Update a review comment for a pull request:
- PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}

Delete a review comment for a pull request:
- DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}

List review comments on a pull request:
- GET /repos/{owner}/{repo}/pulls/{pull_number}/comments

Create a review comment for a pull request:
- POST /repos/{owner}/{repo}/pulls/{pull_number}/comments

Create a reply for a review comment:
- POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies

Review requests:
- GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers

Request reviewers for a pull request:
- POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers

Remove requested reviewers from a pull request:
- DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers

## Git database

The Git Database API enables you to read and write raw Git objects to your Git database on GitHub and to list and update Git references (branch heads and tags).

A Git blob (binary large object) is the object type used to store the contents of each file in a repository. The file's SHA-1 hash is computed and stored in the blob object. These endpoints allow you to read and write blob objects to your Git database on GitHub. Blobs leverage these custom media types. You can read more about the use of media types in the API here.
Custom media types for blobs

These are the supported media types for blobs.
```
application/json
application/vnd.github.VERSION.raw
```
### How and what can you do with database?

Create a blob:
- POST /repos/{owner}/{repo}/git/blobs

Get a blob:
- GET  /repos/{owner}/{repo}/git/blobs/{file_sha}

Commits:
- POST  /repos/{owner}/{repo}/git/commits

Get a commit:
- GET /repos/{owner}/{repo}/git/commits/{commit_sha}

List matching references:
- GET /repos/{owner}/{repo}/git/matching-refs/{ref}

Get a reference:
- GET /repos/{owner}/{repo}/git/ref/{ref}

Create a reference:
- POST /repos/{owner}/{repo}/git/refs

Update a reference:
- PATCH /repos/{owner}/{repo}/git/refs/{ref}

Delete a reference:
- DELETE /repos/{owner}/{repo}/git/refs/{ref}

Create a tag object:
- POST /repos/{owner}/{repo}/git/tags

Get a tag:
- GET /repos/{owner}/{repo}/git/tags/{tag_sha}

Create a tree:
- POST /repos/{owner}/{repo}/git/trees

Get a tree:
- GET /repos/{owner}/{repo}/git/trees/{tree_sha}