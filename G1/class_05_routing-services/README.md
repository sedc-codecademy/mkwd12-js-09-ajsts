# Module plan - Using Routing and Services

In this module, we will implement routing and navigation in our application. This is break some things in our application as it's dependant on the state of the main component which has the information about the rooms. We are going to fix this by implementing a service which will provide the rooms to any component that will inject this service.

## Commands to run

1. ng generate service rooms

## Useful links

- [Angular Routing](https://angular.io/guide/router)
- [Angular Services](https://angular.io/guide/architecture-services)