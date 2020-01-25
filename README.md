# Career Portal Backend Part 1

> This is the first part of the serverless backend

- This is the first part of the backend for the Career Portal Application. An app, which allows graduates of an institution
  to connect, create a profile with all their credentials and information, communicate with each other and find their dream job.

---

## Table of Contents (Optional)

> If your `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Use Services](#services)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

`npm i -g serverless`

### Clone

`git clone https://github.com/gerasimosgakis/teithe-career-portal-api.git`

### Setup

```bash
# Change into the api directory
cd teithe-career-portal-api
# Install packages
npm install
```

## <a name="services"></a>Use Services

1. **Run all the services offline**

```bash
# Run serverless offline
serverless offline
```

2. **Deploy the Service:**

Use this when you have made changes to your Functions, Events or Resources in `serverless.yml` or you simply want to deploy all changes within your Service at the same time.

```bash
serverless deploy -v
```

3. **Deploy a Function:**

Use this to quickly upload and overwrite your AWS Lambda code on AWS, allowing you to develop faster.

```bash
serverless deploy function -f hello
```

4. **Invoke the Function on AWS:**

Invokes an AWS Lambda Function on AWS and returns logs.

```bash
serverless invoke -f hello -l
```

5. **Invoke the Function on your machine:**

Invokes an AWS Lambda Function on your local machine and returns logs.

```bash
serverless invoke local -f hello -l
```

8. **Fetch the Function Logs:**

Open up a separate tab in your console and stream all logs for a specific Function using this command.

```bash
serverless logs -f hello -t
```

9. **Remove the Service:**

Removes all Functions, Events and Resources from your AWS account.

```bash
serverless remove
```

## Functions

These are all the currently available services

- **Create Profile** - _method_: POST, _path_: /profiles, _body_: data object
- **Update Profile** - _method_: PUT, _path_: /profiles/{id}, _body_: data object
- **Delete Profile** - _method_: DELETE, _path_: /profiles/delete/{id}
- **List Profiles** - _method_: GET, _path_: /profiles
- **Get Profile By ID** - _method_: GET, _path_: /profile/{id}
- **Add Education** - _method_: POST, _path_: /educations, _body_: data object
- **Update Education** - _method_: PUT, _path_: /educations/update/{id}, _body_: data object
- **Delete Education** - _method_: DELETE, _path_: /educations/delete/{id}
- **Get Education By User** - _method_: GET, _path_: /educations/{userid}
- **Add Experience** - _method_: POST, _path_: /experiences, _body_: data object
- **Update Experience** - _method_: PUT, _path_: /experiences/update/{id}, _body_: data object
- **Delete Experience** - _method_: DELETE, _path_: /experiences/delete/{id}
- **Get Experience By User** - _method_: GET, _path_: /experiences/{userid}
- **Search Users** - _method_: POST, _path_: /search, _body_: search parameters object (name, handle, company, status, skills, githubusername, current, graduate_date_before, graduate_date_after, school, degree)
- **Add Favourite Job** - _method_: POST, _path_: /favorite-job, _body_: data object (including user id)
- **List Favourite Jobs** - _method_: GET, _path_: /favorite-jobs/{userid}, _body_: data object
- **Remove Favourite Job** - _method_: DELETE, _path_: /favorite-jobs/remove/{jobid}
- **Add CV** - _method_: PUT, _path_: /add-cv/{userid}, _body_: data object

---

## Contributing

> To get started...

### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://github.com/gerasimosgakis/teithe-career-portal-api.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/gerasimosgakis/teithe-career-portal-api/compare" target="_blank">`https://github.com/gerasimosgakis/teithe-career-portal-api/compare`</a>.

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://gerasimosgakis.com" target="_blank">Gerasimos Gakis</a>.
