# class-validator example project

This project has been created to provide an example for the issue
[question: Class Validator throws ',' expected when I run "tsc" #881](https://github.com/typestack/class-validator/issues/881)

## Provide a simple example to test `class-validator` 0.13.x

All the tests have been executed with the following config:

```
MacOS 11.2.1 (Big Sur)
NodeJS: v14.16.0
npm: 6.14.11
```

To provide a good example, I modified the code in "app.component.ts" file as follows:

````typescript

/* Basic */
import { Component } from '@angular/core';
import { isIn } from 'class-validator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ngx';
    myArray = ['1', '2', '3'];

    constructor() {
        console.log('Is in ? ', isIn('1', this.myArray));
    }
}

````

### Angular 7 - TypeScript 3.2.4

After adding the code above, we can run the command `npm run tsc`. It gives the following error:

```bash
$ npm run tsc

> ng7@0.0.0 tsc /Users/username/dev/temp/class-validator-ts-issue/ng7
> tsc

node_modules/class-validator/types/decorator/common/IsIn.d.ts:6:71 - error TS1005: ',' expected.

6 export declare function isIn(value: unknown, possibleValues: readonly unknown[]): boolean;
                                                                        ~~~~~~~

node_modules/class-validator/types/decorator/common/IsIn.d.ts:6:78 - error TS1005: ',' expected.

6 export declare function isIn(value: unknown, possibleValues: readonly unknown[]): boolean;
                                                                               ~

node_modules/class-validator/types/decorator/common/IsIn.d.ts:10:47 - error TS1005: ',' expected.

10 export declare function IsIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator;
                                                 ~~~

node_modules/class-validator/types/decorator/common/IsIn.d.ts:10:50 - error TS1005: ',' expected.

10 export declare function IsIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator;
                                                    ~

node_modules/class-validator/types/decorator/common/IsNotIn.d.ts:6:74 - error TS1005: ',' expected.

6 export declare function isNotIn(value: unknown, possibleValues: readonly unknown[]): boolean;
                                                                           ~~~~~~~

node_modules/class-validator/types/decorator/common/IsNotIn.d.ts:6:81 - error TS1005: ',' expected.

6 export declare function isNotIn(value: unknown, possibleValues: readonly unknown[]): boolean;
                                                                                  ~

node_modules/class-validator/types/decorator/common/IsNotIn.d.ts:10:50 - error TS1005: ',' expected.

10 export declare function IsNotIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator;
                                                    ~~~

node_modules/class-validator/types/decorator/common/IsNotIn.d.ts:10:53 - error TS1005: ',' expected.

10 export declare function IsNotIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator;
                                                       ~


Found 8 errors.

npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! ng7@0.0.0 tsc: `tsc`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the ng7@0.0.0 tsc script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/username/.npm/_logs/2021-03-06T22_30_42_116Z-debug.log
```

### Angular 8 - TypeScript 3.5.3

After adding the code above, we can run the command `npm run tsc`. It gives the following error:

```bash
$ npm run tsc

> ng8@0.0.0 tsc /Users/username/dev/temp/class-validator-ts-issue/ng8
> tsc

node_modules/class-validator/types/metadata/ConstraintMetadata.d.ts:22:9 - error TS1086: An accessor cannot be declared in an ambient context.

22     get instance(): ValidatorConstraintInterface;
           ~~~~~~~~

node_modules/class-validator/types/metadata/MetadataStorage.d.ts:10:9 - error TS1086: An accessor cannot be declared in an ambient context.

10     get hasValidationMetaData(): boolean;
           ~~~~~~~~~~~~~~~~~~~~~


Found 2 errors.

npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! ng8@0.0.0 tsc: `tsc`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the ng8@0.0.0 tsc script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/username/.npm/_logs/2021-03-06T22_34_43_445Z-debug.log
```

### Angular 9 - TypeScript 3.8.3

After adding the code above, we can run the command `npm run tsc`. It does not give any error.
