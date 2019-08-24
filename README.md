# Glide Challenge

---

## Big Corp chart

### Overview

Your task is to build a webapp that can display an organization structure. You must use React as the
base framework but you can use any toolkit for the UI components.

### Data Sources

The data source for employees is the api: https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api

It supports four ways of querying:

- Returns all employees in the dataset
  https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api

* Supports limit and offset
  https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api?offset=5&limit=2

- Returns records with id=3, id=4, id=5
  https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api?id=3&id=4&id=5

* Returns records with manager = 4. Note: manager = 0 means the employee is a top-level one.
  I.e manager = 5 means that employee is managed by some other employee with id = 5
  https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api?manager=4

### App

Your app should display in a way that is clear and intuitive the organizational structure partially and navigable up to the fully expanded structure.

Yes, thatʼs all the instructions weʼre going to give you, the rest is entirely up to you.

### What is important / evaluation criteria

✅ How well your solution solves the problem, including performance (try not to make many requests to the api, as less as possible).
Will it work with more than a couple of dozens employees?

✅ Sense of design

✅ The architecture of your solution, the overall picture.

✅ Is it easy to install and run.

Good luck! Show us that youʼre good and weʼll be more than happy to welcome you to our team!

---

## Documentation Process

### Schemas

- Employee

```typescript
type Employee = {
  first: string
  last: string
  id: number
  manager: number
  department: number
  office: number | null
}
```

- Employees

```typescript
type Employees = Employee[]
```

### Endpoints

- Employees: [/EmployeesChart-Api]()

* Pagination: [/EmployeesChart-Api?offset=&limit=]()

- Employees by ids: [/EmployeesChart-Api?id=]()

* Employees by manager id: [/EmployeesChart-Api?manager=]()
