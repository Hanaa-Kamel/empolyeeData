export class User {
  constructor(public id: number,
// tslint:disable-next-line: variable-name
              public employee_name: string,
// tslint:disable-next-line: variable-name
              public employee_salary: number,
// tslint:disable-next-line: variable-name
              public employee_age: number
// tslint:disable-next-line: variable-name
    ,         public profile_image?: string

    ) { }
}
