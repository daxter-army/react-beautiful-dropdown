# react-beautiful-dropdown

### 🏗️ Online Demo
* Visit [Npm package](https://www.npmjs.com/package/react-beautiful-dropdown) Homepage.
* Visit [Project Homepage](https://www.github.com/daxter-army/react-dropdown) to see live demo.

### 🚀 Getting Started
- **Compatibility**
  - This package uses `@emotion/styled": "^11.10.6` & `react-icons: "^4.7.1"` as peer dependencies.

- **Installation**

  - Install it via npm, by using

  ```sh
      npm install react-beautiful-dropdown
  ```

  - or via yarn, by hitting

  ```sh
      yarn add react-beautiful-dropdown
  ```

- **Importing**

  - Import it in your project, by using

  ```sh
      import ReactDropdown from "react-beautiful-dropdown"
  ```

- **Using**
  - Use it by adding,
  ```javascript
		<ReactDropdown
			value={string}
			options={options}
			valueHandler={inputHandler}
			placeholder="Type or select value here. . ."
			error={{ isError: false, errorText: "Error" }}
			// customInputStyles={{}}
			// customDropdownItemStyles={{}}
		/>
  ```
### Code Snippet Example

```javascript
import ReactDropdown from "react-beautiful-dropdown";

const App = () => {
 const [string, setString] = useState("")

  const [options,] = useState([
    { id: '1', label: 'Grinning face 😀' },
    { id: '2', label: 'Grinning face with big eyes 😃	' },
    { id: '3', label: 'Beaming face with smiling eyes 😁' },
    { id: '4', label: 'Smiling face with halo 😇' },
    { id: '5', label: 'Star-struck 🤩' },
    { id: '6', label: 'Crazy face with tongue out 🤪' },
    { id: '7', label: 'Face in clouds 😶‍🌫️' },
    { id: '8', label: 'Relieved face 😌' },
    { id: '9', label: 'Miling face with sunglasses 😎' },
    { id: '10', label: 'Alien monster 👾' },
  ])

  const inputHandler = (val: string) => {
    // console.log(val)
    setString(val)
  }

  // ...other code

  return <ReactDropdown
		value={string}
		options={options}
		valueHandler={inputHandler}
		placeholder="Type or select value here. . ."
		error={{ isError: false, errorText: "Error" }}
		// customInputStyles={{}}
		// customDropdownItemStyles={{}}
	/>;
};
```

#### Props

| Prop name | Description | Type | Default value |
| :-------: | :---------: | :--: | :-----------: |
| `value`   | Input string to show | `string` | `"Sample value"` |
| `valueHandler` | Callback function that gives back you the updated inputn string value | `(value: string) => void` | `() => void` |
| `placeholder` | Placeholder to show | `string` | `Placeholder` |
| `error` | An error object, containing props for when to show error string and error string | `{ isError: boolean, errorText: string }` | `{ isError: false, errorText: '' }` | 
| `customInputStyles` | CSS style object | `React.CSSProperties` | `undefined` |
| `customDropdownItemStyles` | CSS style object | `React.CSSProperties` | `undefined` |

### 🐞 Issues

- Issues: [Issues](https://github.com/daxter-army/react-beautiful-dropdown/issues)

### 🏆 Author

<table>
  <tr>
    <td>
      <img src="https://github.com/daxter-army.png?s=100" width="100">
    </td>
    <td>
      Mehul Singh Teya<br />
      <a href="mailto:mehulsinghteya@gmail.com">mehulsinghteya@gmail.com</a><br />
      <a href="https://daxter-army.github.io">https://daxter-army.github.io</a>
    </td>
  </tr>
</table>

        