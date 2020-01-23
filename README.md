# Career Portal Backend Part 1

> This is the first part of the serverless backend

- This is the first part of the backend for the Career Portal Application. An app, which allows graduates of an institution
to connect, create a profile with all their credentials and information, communicate with each other and find their dream job.

---

## Table of Contents (Optional)

> If your `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)


---

## Installation

```npm i -g serverless```

### Clone

```git clone https://github.com/gerasimosgakis/teithe-career-portal-api.git```

### Setup

```bash
# Change into the api directory
cd teithe-career-portal-api
# Install packages
npm install
```
### Use Services
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

6. **Fetch the Function Logs:**

Open up a separate tab in your console and stream all logs for a specific Function using this command.

```bash
serverless logs -f hello -t
```

7. **Remove the Service:**

Removes all Functions, Events and Resources from your AWS account.

```bash
serverless remove
```

### Functions

These are all the currently available services

- **Create Profile** - *method*: POST, *path*: /profiles, *body*: data object
- **Update Profile** - *method*: PUT, *path*: /profiles/{id}, *body*: data object
- **Delete Profile** - *method*: DELETE, *path*: /profiles/delete/{id}
- **List Profiles** - *method*: GET, *path*: /profiles
- **Get Profile By ID** - *method*: GET, *path*: /profile/{id}
- **Add Education** - *method*: POST, *path*: /educations, *body*: data object
- **Update Education** - *method*: PUT, *path*: /educations/update/{id}, *body*: data object
- **Delete Education** - *method*: DELETE, *path*: /educations/delete/{id}
- **Get Education By User** - *method*: GET, *path*: /educations/{userid}
- **Add Experience** - *method*: POST, *path*: /experiences, *body*: data object
- **Update Experience** - *method*: PUT, *path*: /experiences/update/{id}, *body*: data object
- **Delete Experience** - *method*: DELETE, *path*: /experiences/delete/{id}
- **Get Experience By User** - *method*: GET, *path*: /experiences/{userid}
- **Search Users** - *method*: POST, *path*: /search, *body*: search parameters object (name, handle, company, status, skills, githubusername, current, graduate_date_before, graduate_date_after, school, degree)

**Note**: the `serverless install` command will only work on V1.0 or later.
---

## Features
## Usage (Optional)
## Documentation (Optional)
## Tests (Optional)

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/joanaz/HireDot2.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/joanaz/HireDot2/compare/" target="_blank">`https://github.com/joanaz/HireDot2/compare/`</a>.
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://gerasimosgakis.com" target="_blank">Gerasimos Gakis</a>.
