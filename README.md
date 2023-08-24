
# @quentinm22/datepicker-react-cmp

PACKAGE datepicker




## Installation

Install Package in React project

```bash
  npm i @quentinm22/datepicker-react-cmp

  yarn add  @quentinm22/datepicker-react-cmp
```
    
### Update

```bash
  npm i @quentinm22/datepicker-react-cmp@latest

  yarn add  @quentinm22/datepicker-react-cmp@latest
```

## Usage/Examples

```javascript
import React, { useState } from "react"
import DatePicker from "@quentinm22/datepicker-react-cmp"

function App() {
  const [startDate, setStartDate] = useState("")

  return (
    <DatePicker
      idInput="start-date"
      className="error-input"
      setState={setStartDate}
      state={startDate}
    />
  )
}

export default App;

```


| Props  | Value |
| ------------- | ------------- |
| maxDate  | string or nothing  |
| idInput  | string or nothing  |
| className  | string or nothing  |
| setState | (value: string) => void |
| state | string |
## Authors

- [@quentinM22](https://github.com/quentinM22)

