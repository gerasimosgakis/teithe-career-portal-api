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
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


---

## Example (Optional)

```javascript
// code away!

let generateProject = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    code.push(js);
  }
};
```

---

## Installation

```npm i -g serverless```

### Clone

```git clone https://github.com/gerasimosgakis/teithe-career-portal-api.git```

### Setup

```shell
$ cd teithe-career-portal-api
$ npm i
$ serverless offline
```

> update and install this package first

```shell
$ brew update
$ brew install fvcproductions
```
3. **Create a Service:**

You can create a new service or [install existing services](#how-to-install-a-service).

```bash
# Create a new Serverless Service/Project
serverless create --template aws-nodejs --path my-service
# Change into the newly created directory
cd my-service
```

4. **Deploy a Service:**

Use this when you have made changes to your Functions, Events or Resources in `serverless.yml` or you simply want to deploy all changes within your Service at the same time.

```bash
serverless deploy -v
```

5. **Deploy the Function:**

Use this to quickly upload and overwrite your AWS Lambda code on AWS, allowing you to develop faster.

```bash
serverless deploy function -f hello
```

6. **Invoke the Function on AWS:**

Invokes an AWS Lambda Function on AWS and returns logs.

```bash
serverless invoke -f hello -l
```

7. **Invoke the Function on your machine:**

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

### How to Install a Service:

This is a convenience method to install a pre-made Serverless Service locally by downloading the Github repo and unzipping it. Services are listed below.

```bash
serverless install -u https://github.com/your-url-to-the-serverless-service
```

Check out the [Serverless Framework Guide](./docs/providers/aws/guide/README.md) for more information.

## <a name="services"></a>Services (V1.0)

The following are services you can instantly install and use by running `serverless install --url <service-github-url>`

- [serverless-examples](https://github.com/serverless/examples)
- [CRUD](https://github.com/pmuens/serverless-crud) - CRUD service, [Scala Port](https://github.com/jahangirmohammed/serverless-crud-scala)
- [CRUD with FaunaDB](https://github.com/faunadb/serverless-crud) - CRUD service using FaunaDB
- [CRUD with S3](https://github.com/tscanlin/serverless-s3-crud) - CRUD service using S3
- [CRUD with Flask and SQLAlchemy](https://github.com/jetbridge/sls-flask) - Python [CRUD API service](https://blog.jetbridge.com/framework/) with Flask, SQLAlchemy and Swagger
- [GraphQL Boilerplate](https://github.com/serverless/serverless-graphql) - GraphQL application Boilerplate service
- [Authentication](https://github.com/laardee/serverless-authentication-boilerplate) - Authentication boilerplate service
- [Mailer](https://github.com/eahefnawy/serverless-mailer) - Service for sending emails
- [Kinesis streams](https://github.com/pmuens/serverless-kinesis-streams) - Service to showcase Kinesis stream support
- [DynamoDB streams](https://github.com/pmuens/serverless-dynamodb-streams) - Service to showcase DynamoDB stream support
- [Landingpage backend](https://github.com/pmuens/serverless-landingpage-backend) - Landingpage backend service to store E-Mail addresses
- [Facebook Messenger Chatbot](https://github.com/pmuens/serverless-facebook-messenger-bot) - Chatbot for the Facebook Messenger platform
- [Lambda chaining](https://github.com/pmuens/serverless-lambda-chaining) - Service which chains Lambdas through SNS
- [Secured API](https://github.com/pmuens/serverless-secured-api) - Service which exposes an API key accessible API
- [Authorizer](https://github.com/eahefnawy/serverless-authorizer) - Service that uses API Gateway custom authorizers
- [Thumbnails](https://github.com/eahefnawy/serverless-thumbnails) - Service that takes an image url and returns a 100x100 thumbnail
- [Boilerplate](https://github.com/eahefnawy/serverless-boilerplate) - Opinionated boilerplate
- [ES6 + Jest](https://github.com/americansystems/serverless-es6-jest) - ES6 + Jest Boilerplate
- [PHP](https://github.com/ZeroSharp/serverless-php) - Call a PHP function from your lambda
- [Ruby](https://github.com/stewartlord/serverless-ruby) - Call a Ruby function from your lambda
- [Slack App](https://github.com/johnagan/serverless-slack-app) - Slack App Boilerplate with OAuth and Bot actions
- [Swift](https://github.com/choefele/swift-lambda-app) - Full-featured project template to develop Lambda functions in Swift
- [Cloudwatch Alerts on Slack](https://github.com/dav009/serverless-aws-alarms-notifier) - Get AWS Cloudwatch alerts notifications on Slack

**Note**: the `serverless install` command will only work on V1.0 or later.

## <a name="features"></a>Features

- Supports Node.js, Python, Java, Go, C#, Ruby, Swift, Kotlin, PHP, Scala, & F#
- Manages the lifecycle of your serverless architecture (build, deploy, update, delete).
- Safely deploy functions, events and their required resources together via provider resource managers (e.g., AWS CloudFormation).
- Functions can be grouped ("serverless services") for easy management of code, resources & processes, across large projects & teams.
- Minimal configuration and scaffolding.
- Built-in support for multiple stages.
- Optimized for CI/CD workflows.
- Loaded with automation, optimization and best practices.
- 100% Extensible: Extend or modify the Framework and its operations via Plugins.
- An ecosystem of serverless services and plugins.
- A passionate and welcoming community!

## <a name="contributing"></a>Contributing

We love our contributors! Please read our [Contributing Document](CONTRIBUTING.md) to learn how you can start working on the Framework yourself.

Check out our [help wanted](https://github.com/serverless/serverless/labels/help%20wanted) or [good first issue](https://github.com/serverless/serverless/labels/good%20first%20issue) labels to find issues we want to move forward on with your help.

## <a name="community"></a>Community

- [Email Updates](http://eepurl.com/b8dv4P)
- [Serverless Forum](http://forum.serverless.com)
- [Gitter Chatroom](https://gitter.im/serverless/serverless)
- [Serverless Meetups](http://www.meetup.com/serverless/)
- [Stackoverflow](http://stackoverflow.com/questions/tagged/serverless-framework)
- [Facebook](https://www.facebook.com/serverless)
- [Twitter](https://twitter.com/goserverless)
- [Contact Us](mailto:hello@serverless.com)

## <a name="consultants"></a>Consultants

These consultants use the Serverless Framework and can help you build your serverless projects.

- [Andrew Griffiths](https://www.andrewgriffithsonline.com/) - Independent consultant specialising in serverless technology
- [Trek10](https://www.trek10.com/)
- [Parallax](https://parall.ax/) – they also built the [David Guetta Campaign](https://serverlesscode.com/post/david-guetta-online-recording-with-lambda/)
- [Geniusee](https://geniusee.com)
- [Nordcloud](https://nordcloud.com) - they created [several plugins](https://github.com/nordcloud?utf8=%E2%9C%93&q=serverless&type=&language=), sponsor [Serverless Days Helsinki](https://helsinki.serverlessdays.io/) and regularly host [Serverless Finland](https://www.meetup.com/Serverless-Finland/) Meetups.
- [Carrot Creative](https://carrot.is)
- [microapps](http://microapps.com)
- [Apiwise](http://www.apiwise.nl)
- [Useful IO](http://useful.io) - and [Hail Messaging](http://hail.io)
- [WhaleTech](https://whaletech.co/)
- [Hop Labs](http://www.hoplabs.com)
- [Webscale](https://webscale.fi/briefly-in-english/)
- [API talent](http://www.apitalent.co.nz) - who also run [Serverless-Auckland Meetup](http://www.meetup.com/Serverless-Auckland)
- [Branded Crate](https://www.brandedcrate.com/)
- [cloudonaut](https://cloudonaut.io/serverless-consulting/)
- [PromptWorks](https://www.promptworks.com/serverless/)
- [Craftship](https://craftship.io)
- [EPX Labs](http://www.epxlabs.com/) - runs [Serverless NYC Meetup](https://www.meetup.com/Serverless-NYC/)
- [Red Badger](https://red-badger.com)
- [Langa](http://langa.io/?utm_source=gh-serverless&utm_medium=github) - They built [Trails.js](http://github.com/trailsjs/trails)
- [Emerging Technology Advisors](https://www.emergingtechnologyadvisors.com)
- [OneSpeed](https://onespeed.io/)
- [Seraro](http://www.seraro.com/) - Who also runs Atlanta Serverless Meetup (https://www.meetup.com/Atlanta-CABI-Camp-Cloud-AI-Blockchain-IOT) and Delhi Serverless Meetup (https://www.meetup.com/Delhi-NCR-Serverless-Architecture-Meetup/)
- [superluminar](https://superluminar.io) - runs serverlessdays Hamburg and Serverless Meetup Hamburg
- [Onica](https://www.onica.com/aws-cloud-native-developers/) - AWS Premier Consulting Partner for Cloud Native Development and host of [eleven regional Meetup groups](https://www.onica.com/events/).
- [null](https://null.tc/) - maintains [Bref](https://bref.sh/) to create serverless PHP applications
- [Theodo](https://www.theodo.co.uk) - full stack teams passionate about Serverless that also run the Serverless Transformation Newsletter & Blog.
- [JetBridge](https://jetbridge.com) - cloud-native and serverless application development services.

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

## Team

> Or Contributors/People

| <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> |
| :---: |:---:| :---:|
| [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)    | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)  |
| <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> |

- You can just grab their GitHub profile image URL
- You should probably resize their picture using `?s=200` at the end of the image URL.

---

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://fvcproductions.com" target="_blank">`fvcproductions.com`</a>
- Twitter at <a href="http://twitter.com/fvcproductions" target="_blank">`@fvcproductions`</a>
- Insert more social links here.

---

## Donations (Optional)

- You could include a <a href="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png" target="_blank">Gratipay</a> link as well.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/fvcproductions/)


---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
