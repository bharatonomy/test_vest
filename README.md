# Test Driven Development

![](./assets/tdd)

It is advised to not write tests when the changes are fast for example frontend code.

Projects with clear requirements are better with TDD.

- Unit Testing: Writing code to test the component of application.
- Integration Testing: Collectively test the components and their interaction.
- End-to-End Testing: Runs application in a simulated enviroment. jest-puppeteer, cypress are the libraries that can be used.

Some other familiar terms:

- Acceptance Testing: Test meets clients and users requirements.
- System Testing: Testing how everything works on hardware.
- Sanity, Smoke, Functional, Performance, Usability, Security, Stress, Failover Testing.

Jest has set of helper functions that can help in preventing code duplication in a test suite

You can also write code coverage report by adding `--coverage` at the end of jest command.

100% code coverage is a myth

Unit testing is fast and simple. E2E testing is complex integrations

While end to end testing firebase can be used to for mock database and authentication.
