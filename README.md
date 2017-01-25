# ts-xlsx

A working XLSX Library for typescript (Rebuild of the original xlsx):
https://github.com/SheetJS/js-xlsx/

Tested to be working with Angular 2!!!

How to install:
-----------
All you need to do is to install the library:
```
    npm install --save ts-xlsx
```

And then the typings for the library:
```
	typings install --save --global dt~xlsx
```
or
```
	npm install --save @types/xlsx
```

And then you can use it :)

How to use:
-----------
Just import the functions and use them.

``` typescript
/* You can use as namespace: */
import * as XLSX from 'ts-xlsx';
let wb: XLSX.IWorkBook = XLSX.read(...)
```
``` typescript
/* Or straight forward import */
import { read, IWorkBook } from 'ts-xlsx';
let wb: IWorkBook = read(...)
```

Example Respository:
-----------
if you are having troubles integrating into Angular 2,
you can review this [Example Repository](https://github.com/florianschwanz/xlsx-drop-parse-demo) showing a working usecase of fileDrop.


more documentation is provided by the original author of the library,
as this is just a wrapper.
