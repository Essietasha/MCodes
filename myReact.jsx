//React is a User Interface(UI) library. It is used for building user interfaces for web applications based on components.
//ReactJS is primarily a front-end JavaScript library used for building user interfaces (UI) in web applications. Build user interfaces out of individual pieces called components written in JavaScript.
//Features:
//JSX
//Components
//props
//Routes
//Hooks
//Effects
//States
//Animations
//Refs
//Classes etc.

//CREATE A REACT APP
//Install node.js.......cmd(system) enter 'npm install -g create-react-app' ... Create a folder, drag and drop the folder 'myapp' folder into Vscode. Open a new terminal, run ' npx create-react-app my-app' Follow prompt....... enter. Now, run 'npm start'
//React Manual https://www.codecademy.com/courses/react-101/articles/how-to-create-a-react-app
//https://kinsta.com/knowledgebase/install-react

//CREATE REACT using VITE
//Create a project folder. Drag into VSCode. Open terminal. Run 'npm create vite@latest react-app' ...Follow prompt by selecting 'React' as framework and 'Javascript' as variant....Now, Run 'cd react-app', 'npm install'. 'npm run dev'.
//Change port in vite.config file by adding  server: {port: 3000,}

//Install Tailwind: (https://tailwindcss.com/docs/installation) Run on a different terminal-bash and NOTE change directory into the actual poject first ..cd project-name

//Install React icons: on the bash terminal... Run 'npm i react-icons' (https://react-icons.github.io/react-icons/)
import { FaMapMarker } from 'react-icons/fa';
<FaMapMarker className='inline-mb mr1'/>

//ROUTER Package - to have multiple pages
//Install React Router : on the bash terminal... Run 'npm i react-router-dom'

//Install React Spinners : (https://www.npmjs.com/package/react-spinners)  (https://www.davidhu.io/react-spinners/) (https://github.com/davidhu2000/react-spinners) React Spinner: a package thst allow display spinner. Run 'npm i react-spinners'

//NPM: Node package manager (npm) is a package manager and a software register but it's also a place where developers can find, build and manage code packages.
//It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. 

//REACT TOASTIFY for Notification:2:46:12 (cd) npm i react-toastify
//Set Up: In the Layout Component, import ToastContainer from react-toastidy. Also import the css file: (import 'react-toastify/dist/ReactToastify.css') Then put the <ToastContainer anywhere within the container/>return./>
//To use this in any componnet, simply import { toast } from 'react-toastify'; and call it using toast.success e.g toast.success('Job Deleted Successfully');

//Ctrl + c to stop running the React app in your command line.

//RUN AN EXISTING REACT FOLDER
//Note: DO NOT RUN 'npm create vite or npm install' except a new user who hasn't used react before or a third party openinig a zipped react file!
//Thus, to run an existing react folder. Open folder in VSCode.  Same day && Go to terminal, Run npm run dev. New day && Run 'cd react-app' 'npm run dev'.

  
  //ADDING ADDITIONAL PAGES IN YOUR PROJECT: Note, that can't be achieved with just react. Being a library, react doesn't have a way to add seperate pages. Hence, we will use the React Router which is a seperarte package, so we need to install it.
  //React Router Setup... On Terminal, run 'npm i react-router-dom' Enter. So, we'l put all the Routing stuff in the main App file, which is App.jsx.
  //How to Create Routes so you can have multiple pages.
  //Above the App.jsx, import the ffg at the top:
  import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
  import HomePagee from './Pages/HomePagee';
  import MainLayoutt from './layouts/MainLayoutt';

  const router = createBrowserRouter(createRoutesFromElements(
      <Route index element={<Homepagee/>} />)
    );

    const App = () => {
      return <RouterProvider router={router}/>;
    }; //   export default App
  
  //PAGES: Create a seperate folder called 'Pages' for the pages.Within, create a HomePage.jsx file.  Although they are still componnets, but should not put them in the same folder as the regular UI component. Now, import Homepage within App.jsx and render it within the routeprovider. Now, import all needed components, use within the return st into the Hompage and it'll be displayed on the screen.
  
  //LAYOUT: This is mostly used for Navbars and Footers i.e elements we always want to show on all pages. So, create a layout folder in the src folder. Note: you can have multiple layouts. To use layout, import it(MainLayout.jsx) into App.jsx //Now, create a Rarent Route to the rest of our routes i.e other routes where we want the navbar and footer to always display will be embedded in this parent route. Set the path as well. (Line 89 but extended below): So basically, any route put in there will use the layout.
  <Route path='/' element={<MainLayoutt />}>
        <Route index element={<HomePagee />} />
        <Route path='/jobs' element={<JobsPagee />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
  
  //HOW TO PASS STATE DATA FROM ONE COMPONENT TO ANOTHER: (https://medium.com/@babux1/how-to-pass-state-data-from-one-component-to-another-in-react-js-9b4850887163#:~:text=One%20of%20the%20main%20methods,child%20component%20as%20an%20attribute.)
  //One of the main methods to pass state to another component in React is via props. Props are read-only data that are passed from a parent component to a child component. 
  //NOTE: To pass state data as props, we need to define the state in the parent component and pass it to the child component as an attribute.
  //OR To pass a state variable to another component that is not related, you will need to lift the state up to a common ancestor component and then pass it down as a prop to the desired component.
  //OR For passing the data from the child component to the parent component, we have to create a callback function in the parent component and then pass the callback function to the child component as a prop. This callback function will retrieve the data from the child component.
  

  //LINKS: React works a little bit different. We don't use the anchor ref <a tags, we use the Link to tabs. Now, the href or to element here should go to the path defined in the router.. in this case... href="/jobs" as defined in the App.jsx router.
  //Another reason we don't use the a tag is because it does a complete page refresh which the link tag will avoid, making things very fast. So, in the Navbar, import Link: And change all a tags to Link tags and change the href to to=.
  import { Link } from 'react-router-dom';
    //NAVLink: Works the same way with Link tag except that it adds a class to the active link. Now we can change all the link tags in the navbar to Navlink as well as the import name above. To manually add a classLink to an active link or button, create a function above the return st within desired component and set className of the Navlink within the return st to the function. Check Navbar.jsx for ref.
  

  //FETCHING DATA FROM BACKEND rather than just bringing in a json file..
  //JSON SERVER: Use json Server: A libray that lets you create a mock API and you can send get post put patch delete request so you can create CRUD 'Create, Read, Update, Delete' functionality. All you have to do is create a json file and you can put any type of resource you want in it.
  //JSON File://(https://www.npmjs.com/package/json-server) (https://blog.hubspot.com/website/json-files) A JSON file stores data in key-value pairs and arrays; the software it was made for then accesses the data. JSON allows developers to store various data types as human-readable code, with the keys serving as names and the values containing related data. JSON syntax is derived from JavaScript object notation syntax:
  //The most common use of JSON data and files is to read data from a server for a website or web application to display — and change data given the correct permissions.
                // Data is in key/value pairs
                // Data is separated by commas
                // Curly braces hold objects
                // Square brackets hold arrays
  //Keys must be strings, and values must be a valid JSON data type, i.e String, Number, Object, Array, Boolean, Null.            
  //What are IDEs? An integrated development environment (IDE) is a software application that helps programmers develop software code efficiently.
  
  //INSTALL JSON SERVER: (on bash terminal, rem to cd into the project directory) install json server: Run 'npm install json-server' (or as dev dependency 'npm i -D json-server'). And inside the package.json file, within script, beneath preview, add ... "server": "json-server --watch src/jobs.json --port 8000" .
  //And run it using 'npm run server' on same terminal.. Copy link on the Endpoint and paste in the broswer..data is being displayed in the browser. So, we essentially now have a backend. 
  //Set LIMIT of backend data being fetched : 'http://localhost:8000/jobs?_limit=3'
  //RUN backend(json) SERVER: On terminal, cd into project directory... 'npm run server'
  //TRY CATCH: The try statement allows you to define a block of code to be tested for errors while it is being executed. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
  //res.json: The res. json() function sends the response as JSON format. It automatically converts the JavaScript object into a JSON-formatted string. The parameter body can be of any JSON type, which includes object, array, string, Boolean, number, or null.
  
  //The useEffect: It helps in performng side effects in components. For instance, in fetching data. It takes two arguments; a function and a dependency. Learnt that this hook runs on every render; whenever there's a change in the dependency which can actually cause an unending loop, in that case, it's preferable to inlude the second argument which in most cases is an empty array.This makes the useeffect run only on the first render.
  
  //CREATE PROXY: Mostly for project deployment..A proxy server is a server application that acts as an intermediary between a client requesting a resource and the server providing that . To create a proxy, do that within the vite.confif file ... In the server object beneath the port, add :
  // proxy: {
  //   '/api': {           i.e if it's prefix with slash api, we want to use this target object...
  //     target: 'http://localhost:8000',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ''),
  //   }
  // }
  //useParams: To get the id of the each job page, use the use Params Hooks from react router dom. Import useParams...
  
  //DATA LOADER from React Router: With a data loader, we basically create a function within a file and then export and use it in other areas i.e as a gloabal state and use in other componenets.
  
  //WORKING WITH FORM
  //Adding a piece of state for every field in the form; when there's a change in the input/field, the state is being changed as well.
  //Adding a piece of state item for each field. Can be done two ways: 
  //A, have a single object in the state and have all the fields in that object or B, do a seperate piece of state for every field. Then, we can use the useState hook. 
  //Import the useState..Create diff states for diff fields. Add a value attribute to each fields in the return jsx ,set value to the piece of state i.e value={type}
  //NOTE: To make the form update with state, rm to add the onChange event handler.. Set this onChange event to a function that will take in an event param. this param has on it, a target.value which will be whatever is selected or typed in the field.
  //Then, setType(function to run the state) to e.target.value.
  // value={type} 
  //   onChange={(e) =>setType(e.target.value)}>
  
  //Form Submission: React19:'action attribute'
  //To submit a form, use the onSubmit Function..can set it to a created function that will take in an event parameter.. rm e.preventDefault to stop the behaviour.
  //Construct an object from the form field that we want to submit to the api.
  
  //Set a Form's DEFAULT field value: add the default field value within the html tag to the state default value.
  
  //MAKE REQUEST TO THE BACK-END; EDIT, DELETE, ADD, SUBMIT..
  //The POST (Add)method sends data to the server which may modify the server's state i.e that is designed to send loads of data to a server from a specified resource. POST is used to send data to a server to create/update a resource. It's best to have the post request in the main app file; the edit, delete and submit. 
  //UseNavigate: |REDIRECT|
  //After submission, to redirect user to the job page, use useNavigate hook from raect-router-dom. To use this useNavigate, first initialize it as a var and set to useNavigate() below the state..Then, simply return navigate and whr to redirect to. e.g return navigate('/jobs');
  //Since the addJobSubmit is being passed in as a prop, in the main app.jsx route within the AppJobPage comp, insert the addJobSubmit with value set to a function (addjob) and then create the 'addjob' function above the routes and it will take in the newJob
  
  //GET REQUESTS: GET requests are intended to retrieve data from a server and do not modify the server's state.

  //PUT REQUEST(EDIT): PUT method is used to create a new resource or replace a resource.

  //DELETE REQUEST
  //(This 'deleteJob' request function will be passed into the single jobPage router below as a prop and to the JobPage component as a prop as well. And on the button, run a function onClick set to another function called onDeleteClick and pass in the job.id.. JoPage line 101). 
  //Write the onDeleteClick function above in the Jobpage, pass in the 'jobId', add a confirmation to the delete using window.confirm JobPage.jsx line 12...
  //Actual delete Request to the Api ...App.jsx line 29
  
  //REACT TOASTIFY for Notification:2:46:12 (cd) npm i react-toastify
  //Set Up: In the Layout Component, import ToastContainer from react-toastidy. Also import the css file: (import 'react-toastify/dist/ReactToastify.css') Then put the <ToastContainer anywhere within the container/>return./>
  //To use this in any componnet, simply import { tosst } from 'react-toastify'; and call it using toast.success. error JobPage line 20... e.g toast.success('Job Deleted Successfully');  
  
  
  //DEPLOYMENT: Production version of the site
  //Close the development/local server.. Then, run 'npm run build' ..This will create a new folder called dist. Dist is the production build.
  //Can run this with vite. Now run 'npm run preview'..Now, the dist folder is what will be deployed. However, the jobs will not be shown in deployement as we are using a local json server. To correct this, create an API with express or....
  
  //STRUCTURE:
    // index Html: is the single page since our applicatio is a single page application
    // The src folder is our react application
    // main.jsx file is the entry point
     

  
  //Writing JSX
  //JSX stands for JavaScript XML. It is a syntax extension for javascript. The part that looks like HTML, <h1>Hello world</h1>, is something called JSX.
  //A basic unit of JSX is called a JSX element. JSX elements looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.
  const p1 = <p id='large'>Large Font</p>;
  const p2 = <p id='small'>Small Font</p>;
  // JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array…
  // JSX elements can have attributes, just like how HTML elements can.  A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes.
  // You can nest JSX elements inside of other JSX elements, just like in HTML.
  // NOTE: If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it: 
  (
      <a href="https://www.example.com">
          <h1>
              Click Here!
          </h1>
      </a>
  );
  
  // Nested JSX expressions can be saved as variables, passed to functions and so on, just like non-nested JSX expressions can! Here’s an example of a nested JSX expression being saved as a variable:
  const theExample = (
      <a href="https://www.example.com">
        <h1>
          Click Here!!!
        </h1>
      </a>
    );
  
  const myDiv = (
      <div>
          <h1>Hello World</h1>
      </div>
  );
  
  // JSX Outer Elements: There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element. The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!.
  // If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a <div> element.
  
  //Rendering JSX
  //To render a JSX expression means to make it appear on screen.
  
  // It is essential to understand that React relies on two things to render: what content to render and where to place the content.
  // Use the document object which represents our web page.
  // Uses the getElementById() method of document to get the Element object representing the HTML element with the passed in id(app).
  // Stores the element in container.
  // We use createRoot() from the react-dom/client library, which creates a React root from container and stores it in root. root can be used to render a JSX expression. This is the “where to place the content” part of React rendering.
  // Lastly,uses the render() method of root to render the content passed in as an argument. Here we pass an <h1> element, which displays Hello world. This is the “what content to render” part of React rendering.
  

  
  //class vs className
  //In HTML, it’s common to use class as an attribute name. In JSX, you can’t use the word class! You have to use className instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
  
  //Self-Closing Tags: in JSX, you have to include the slash(/). If you write a self-closing tag in JSX and forget the slash, you will raise an error: <br /> <img src ="" />
  
  //JavaScript In Your JSX In Your JavaScript: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.
  //Curly Braces in JSX: Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn’t add numbers—it reads them as text, just like HTML. You can do this by wrapping your code in curly braces.
  (<h1>{2 + 3}</h1>)
  
  //Variables in JSX
  //When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file. That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.
  const name = 'Gerdo';
  // Access your variable inside of a JSX expression:
  const greeting = <p>Hello, {name}!</p>;
    
  //Variable Attributes in JSX
  //When writing JSX, it’s common to use variables to set attributes.
  
  const sideLength = "200px";
  
  const pandda = (
    <img 
      src="images/panda.jpg" 
      alt="panda" 
      height={sideLength} 
      width={sideLength}/>
  );
  //Object properties are also often used to set attributes:
  const pics = {
    panda: "http://bit.ly/1Tqltv5"
  }; 
  
  const panda = (
    <img 
      src={pics.panda} 
      alt="Lazy Panda" />
  );


  
  // STYLING REACT APPS {CSS}:     // - Static and Dynamic(Conditional) Styling

    //1. Styling with Vanilla - Css files; CONS: Styles are not scoped to specific component. Solution: Inline Styling
    //2. Inline styling CSS - uses curly braces
        <> <p style={{
            color: 'red'}}>
          </p>
        
          <h2 style={{backgroundColor: isSelected ? 'green' : 'gray' }}>Hello React Developer</h2>
        </>
    
    //3. Adding a className Conditionally, ternary approach and always define an else st using undefined if you don't have one:
      </> 
      <>
      <p className={ isActive && 'bg-red'  }/>
      <p className={ isActive => isActive ? 'bg-red' : undefined }/>
      <p className={`p-6 ${isActive ? 'bg-red' : ''}`}/>
      </>

    //4. Scoping styles with CSS Modules: Allows one to write vanilla css styles which are scoped to component files, making classNames unique per file for component files and component. i.e classes will be transformed by build process and unique classes will be provided. CSS module is not a default feature, rather it has to be implemented.
        //Name Files: [Header.module.css] as components
        //Importing: [import classes from './Header.module.css]
         </> <p className={classes.bigParagrapgh}></p>
         </> <p className={`p-6 ${classes.bigParagrapgh}`}></p>
         </> <p className={isActive ? classes.bigParagrapgh : 'bg'}></p>
       
    //5. CSS-in-JS styling with 'styled components' package
          //Install: In terminal: 'npm install styled-components'
          //Import: iomport { styled } from 'styled-components';
          styled.input`
          display: flex;
          gap: 1.5rem;
          `;
          //Now you can assign this to a variable and create as a component to use it.
          //Accepts props in a unique way Plus Conditionals; set props in the created styled component, now accept prop in the style definition tag and set it conditionally and dynamically using a function.
          //Using/prefixing the Dollar sign to props - so they don't clash with built-in props.
          //Handling Children tags styles: Ampersand & and white space. To include other classes to a parent tag e.g div, header, p or any other tag
          //Handling media queries with styled components: Ampersand &
          //Psuedo-selectors with styled components
          const ControlDiv =  styled.div`
          display: flex;
          gap: 1.5rem;
          margin: 2rem;
          color: ${({$invalid}) => $invalid ? '#fffeee' : 'ffffff' };

          &:hover{
            color: grey;
          };

          & img {
            object-fit: contain;
            width: 8rem;
          }

          & h1 {
            font-size: 1.5rem;
            font-family: 'Pacifico', cursive;
          }

          @media (min-width: 768px) {
            & {
              margin-bottom: 1rem;
            }

            & h1 {
              font-size: 2.25rem;
            }
          }
          `;
          <ControlDiv $invalid={emailValid}>
            <p>My Text</p>
          </ControlDiv>



    //Tailwind CSS - Framework - Applying predefined CSS rules - Utility classes - Follow directives(https://tailwindcss.com/docs/guides/vite)
    //On terminal development - Ctrl C - Quit running project
    //On bash - cd into project directory - Follow all directives from tailwind.css website(https://tailwindcss.com/docs/guides/vite)
    //npm run dev
      //Customizing Tailwind
        //1.Add custom classes  beneath the definded tailwind classes-index.css. Foe example body{margin:0} etc
        //2.Extend in tailwind.config.js file - To add more custom classes and then use these classes as named/defined in our project. Foe example create utility classes to use custom fonts.
        //3.Media queries  <h1 className='md:text-4xl' >ReactArt</h1>
        //4.Pseudo selectors <h1 className='hover:text-4xl focus:bg-amber-500' >ReactArt</h1>
      
      //DYNAMIC/CONDITIONAL STYLES WITH Tailwind - Above the component return statement.
        let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300';
        if(invalid){
          labelClasses = ' text-red-300 block mb-2 text-xs font-bold tracking-wide uppercase'
        }
        <label className={labelClasses}>React is Beautiful</label>

        //Or set a base styling; mindful of white space insertions
        let labelClass = 'block mb-2 text-xs font-bold tracking-wide uppercase';
        let inputClass = "w-full px-3 py-2 leading-tight border rounded shadow";
        
        if(invalid){
          labelClass += ' text-stone-400';
          inputClass += ' text-red-500 bg-stone-100';
        } else {
          labelClass += ' text-stone-300';
          inputClass += ' text-gray-700 bg-stone-300';
        }
        <>
        <label className={labelClass}>React is Beautiful</label>
        <input className={inputClass} placeholder='Enter full name'></input>
        </>

      //RE-USABLE TAG COMPONENTS -  You can create reusable components(tag components - label, input, div etc.) with defined classes and then export/import them to where desired and even receive/send props in them.
  
  
  //INTERACTING WITH THE DOM IN REACT   //Event Listener and Event Handlers in a Component:
  //In react, add event listeners to elements by adding special attribute to those elements; also called special props. E.g onClick={handleClick or clickHandler} The value provided within these curly braces should be a function; defined inside the component function.
  //JSX elements can have event listeners, just like HTML elements can. You create an event listener by giving a JSX element a special attribute. Here’s an example:
  //An event listener attribute’s value should be a function and it would only work if the function is a valid function that had been defined elsewhere.
  function clickAlert() {
      alert('You clicked this image!');
  } 
  <img onClick={clickAlert} /> 
  //Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.
  
  //Function components can include event handlers. With event handlers, we can run some code in response to interactions with the interface, such as clicking.
  function MyComponent(){
    function handleHover() {
      alert('Stop it.  Stop hovering.');
    }
    return <div onHover={handleHover}></div>;
  }//In the above example, the event handler is handleHover(). It is passed as a prop to the JSX element <div>. Understand that props are information passed to a JSX tag.
  //Event handler functions are defined inside the function component and, by convention, start with the word “handle” followed by the type of event it is handling.
  //The handleHover() function is passed without the parentheses we would typically see when calling a function. This is because passing it as handleHover indicates it should only be called once the event has happened. Passing it as handleHover() would trigger the function immediately, so be careful!


  
  //JSX Conditionals: If Statements That Don't Work: Here’s a rule that you need to know: you can not inject an if statement into a JSX expression.
  //This code will not work
                      // (    <h1>
                      //       {if (purchase.complete) {
                      //           'Thank you for placing an order!'
                      //         } }
                      //     </h1>)
  
  //How can you write a conditional if you can’t inject an if statement into JSX?
  //One option is to write an if statement and not inject it into JSX. It will work if the words if and else are not injected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.
  if (coinToss() === "heads"){
      img = <img src={pics.kitty} />
    } else{
      img = <img src={pics.doggy} />
    }    
  
  //JSX Conditionals: The Ternary Operator. The ternary operator is a simplified conditional operator like if / else . Syntax: condition ? <expression if true> : <expression if false>.
  //Recall how it works: you write x ? y : z, where x, y, and z are all JavaScript expressions. When your code is executed, x is evaluated as either “truthy” or “falsy”. If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z.
  //Here’s how you might use the ternary operator in a JSX expression:
  const headline = (
      <h1>
        { age >= drinkingAge? 'Buy Drink' : 'Do Teen Stuff' };
        {loggedIn ? <h1>Hello Member</h1> : <h2>Hello Guest</h2>};
        { loggedIn && <h1>Hello Member</h1>}
      </h1>
  );
  
  //The LOGICAL && Operator: The logical AND && operator for a set of boolean operands will be true if and only if both or all the operands/conditions are true . Otherwise it will be false .
  const tasty = (
      <ul>
        <li>Applesauce</li>
        { !baby && <li>Pizza</li> }
        { age > 15 && <li>Brussels Sprouts</li> }
        { age > 20 && <li>Oysters</li> }
        { age > 25 && <li>Grappa</li> }
      </ul>
  );

  //Return Statement with conditionals - with this line of code, the code beneath(comp and jsx) will not be executed if this condition isn't met.
  if(results.length === 0){
    return <p>Please eneter a valid number</p>
  }

//Mapping through an array and returning a JSX file; use () after the arrow function not {} / Creating a List Item
    const names = ['Tom', 'Brad', 'Jesse'];
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>

//Mapping / Looping through an array with the map method - will take in a function and return a JSX file: 1:04
  import jobs from '../jobs.json';
  <div>
    {jobs.map((job) => (
      <div key={job.id}>
        <h2>{ job.title }</h2>
        <h4>{ job.company.name }</h4>
        <h6>{ job.description }</h6>
        <Link to={`/job/${job.id}`}>Read More</Link>
      </div>
    ))}
  </div>
  
  
  //.map in JSX: The .map() array method comes up often in React. It’s good to get in the habit of using it alongside JSX. If you want to create a list of JSX elements, then using .map() is often the most efficient way. It can look odd at first:
  const containerr = document.getElementById('app');
  const rroot = createRoot(containerr);
  const mystrings = ['Home', 'Shop', 'About Me'];
  const listItems = mystrings.map(eachstring => <li>{eachstring}</li>);
  <ul>{listItems}</ul>
  
  rroot.render(<ul>{listItems}</ul>);
  
  
  //KEYS: When you make a list in JSX, sometimes your list will need to include something called keys. A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.
  //keys don’t do anything visible! React uses them internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list items into the wrong order.
  //Not all lists need to have keys. A list needs keys if either of the following is true:
  //A. The list items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
  //B. A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next. If neither of these conditions is true, then you don’t have to worry about keys. If you aren’t sure, then it never hurts to use them!
  <ul>
    <li key="li-01">Example1</li>
    <li key="li-02">Example2</li>
    <li key="li-03">Example3</li>
  </ul >
  
  
//React Components: React applications are made of components.
  //What’s a component? A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML and re-render it whenever some data changes.
  //It’s useful to think of components as smaller pieces of our interface. Combined, they are the building blocks that make up a React application. In a website, we can create a component for the search bar, another component for the navigation bar, and another component for the dashboard content itself.
  //Components in React are great because they are reusable. We can keep our component pieces separated, organized, and reusable by putting them into separate files and exporting them to where we need them.
    function MyComponent() {
      return <h1>Hello world</h1>;
    }
    ReactDOM.createRoot(
    document.getElementById('app')
    ).render(<MyComponent />); 
  //Function Component: Using JavaScript functions to define a new React component. In the past, React components were defined using Javascript classes. But since the introduction of Hooks, function components have become the standard in modern React applications.
  //After we define our functional component, we can use it to create as many instances of that component as we want.
  function MyComponent() {
    return <h1>Hello, I'm a functional React Component!</h1>;
  }  
  
  
  //Importing and Exporting React Components: A React application typically has two core files: App.js and index.js. App.js file is the top level of your application, and index.js is the entry point.
  //Using and Rendering a Component
  //We can use it with an HTML-like syntax that resembles a self-closing tag: //If you need to nest other components in between, you may also use an opening and corresponding closing tag structure:       
  <><MyComponent />   
        <MyComponent>
          <OtherComponent />
        </MyComponent>
        </>
  //However, to render our component to the browser, we must rely on the .createRoot() and .render() methods from the react-dom library. This should be done in our entry point, index.js. First, we call the createRoot method to create a React root container for displaying content. React applications typically have a single root DOM node, and everything inside it is managed by React DOM.
  //Breaking it down a bit further: document.getElementById('app') returns a DOM element from index.html. .createRoot() receives the DOM element as the first argument and creates a root for it. .createRoot() returns a reference to the root container on which you can call methods like .render(). After the root is created, all that’s left to do is call the .render() method on the returned root and display the React component like so:
  ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);
  
  
  //Use a Variable Attribute in a Component
  import React from 'react';
  
  const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width:  '200px'
  };
  
  function RedPanda(){
      return (
        <div>
          <h1>Cute Red Panda</h1>
          <img 
            src={redPanda.src}
            alt={redPanda.alt}
            width={redPanda.width} />
        </div>
      );
  }  

  
  
  //COMPONENTS RENDER OTHER COMPONENTS
  //Components Interact: A React application can contain dozens, or even hundreds, of components. Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.
  
  //Returning Another Component: As we’ve seen before, each React component is responsible for one piece of the interface. As the application grows in complexity, components need to be able to interact with each other to support the features needed. So far, we’ve explored components that return JSX elements, such as:
         //We can have components interact with each other by passing information or even returning other components i.e
  function PurchaseButton() {
    return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
  }
  
  function ItemBox() {
    return (
      <div>
        <h1>50% Sale</h1>
        <h2>Item: Small Shirt</h2>
        <PurchaseButton />
      </div>
    );
  }
  
  
  //Apply a Component in a Render Function
  import Button from './Button'
  
  function App() {
    return <Button />;
  }

  //PROPS
  //We use props in React to pass data from one component to another (from a parent component to a child component(s)).
  //Informations that gets passed from one component to another is known as props. Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.    //AND, PROPS can be used in the child component alone without having to use it in the parent component.
  //Props in React travel in a one-way direction, from the top to bottom, parent to child. Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.

  //How to set DEFAULT values for props
  function LoginPage({name, age}) {
    return <h1>My name is {name}</h1> ;
  }
  LoginPage.defaultProps = {
    name: "Designer",
    age: "Sixteen"
  }
      
  //Access a Component's props: Every component has something called props. A component’s props is an object. It holds information about that component. E.g type, value of a button element. To access a component’s props object, you can reference the props object and the dot notation for its properties. E.g props.name
  //Pass props to a Component:  Pass information to a component’s props object by giving the component an attribute:
  // To pass information that isn’t a string, then wrap that information in curly braces. Even arrays as seen below. 
  <>
  <Greeting name="Jamal" /> </>
  <SloganDisplay message="We're great!" /> </>
  <Greeting myInfo={["Astronaut", "Narek", "43"]} /> </>
  <Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />
 
   
  
  //RENDER A COMPONENT'S PROPS:
  //You will often want a component to display the information that you pass. The most common use of props is to pass information to a component from a different component. NOTE: To make sure that a function component can use the props object, define your function component with props as the parameter:
  function Button(props) {
    return <button>{props.displayText}</button>;
  }         //in the example, props is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (object.propertyName).
 
  //Object Destructuring: Alternatively, since props is an object, you can also use destructuring syntax like so:
  function Button({displayText}) {
    return <button>{displayText}</button>;
  }
  
  //Smart Watch App - Product.js
  //Object destructuring: function Product({price, rating, image}) {}
  function Product(props) {
    return (
      <div>
        <li>
          <img src={props.image} alt="" />
          <h3>{props.price}</h3>
          <p>{props.rating}</p>
        </li>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <h3>{props.rating}</h3>
      </div>       
    );
  }
  
  //App.js
  import Product from './Product'
  
  function App() {
    return (<>
    <ul>
    <Product name="Apple Watch" price = {399} rating = "4.8/5.0" image={myImages}/>;
    <Product name="Google Watch" price = {299} rating = "4.7/5.0" image={myImages}/>;
    <Product name="Zara Watch" price = {199} rating = "4.6/5.0" image={myImages}/>;
    </ul>
    </>)
  }

  
  //ATTRIBUTE PROPS:
  function BigButton({label}) {
    return <button>{label}</button>;
  }

  import BigButton  from './BigButton';
  function Appp(){
    <BigButton label='Submit'></BigButton>
  }


   //PROPS.children Children props contains whichever contents between a component opening and closing tags
  //Every component’s props object has a property named children. So far, all of the components that you’ve seen have been self-closing tags, e.g <MyFunctionComponent />. They don’t have to be! You could write <MyFunctionComponent></MyFunctionComponent>, and it would still work props.children will return everything in between a component’s opening and closing JSX tags. E.g <MyFunctionComponent> <MyFunctionComponent/> By using props.children, we can separate the outer component, MyFunctionComponent in this case, from the content, which makes it flexible and reusable.  
  //If a component has more than one child between its JSX tags, then props.children will return those children in an array. However, if a component has only one child, then props.children will return the single child, not wrapped in an array.
  
  function BigButton(props) {
    return <button>{props.children}</button>;
  }

    import LilButton  from './LilButton';
    <>
    <BigButton>
      <LilButton />
    </BigButton>

    //OR 
    <BigButton>
    <div>Submit</div>
    </BigButton>
    </>

  //More on props.children and adding classes via props
  const TabButton = ({children, onSelect, isSelected}) => {
    return (
      <li><button  className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button></li>
    )
  }
  //In the other component
  <>
  <LogPage />
  <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} >Components</TabButton>
  <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
  <MarketPage />
  </>


  //More on Using PROPS TO PASS CLASS NAMES and can change it as desired
  const Tab = ({children, bigFont = 'big-font-red'}) => {
    return (
      <li><button className={`${bigFont} p-6 gridCont`}>{children}</button></li>
    )
  };
  //Can change, edit or update the clas name in the other component as desired
  <LogPage />
  <Tab>Components</Tab>
  <Tab bigFont='big-font-blue'>JSX</Tab>
  <MarketPage />
  </>


  //Moree on Using PROPS TO PASS CLASS NAMES and can change it as desired
  //Using NavLink -  Works the same way with Link tag but that it adds a class to the active link.
  <NavLink className={({ isActive }) => isActive ? 'bg-red' : 'bg-white' }/>

  //OR use a variable
  const linkClass = ({ isActive }) => isActive ? 'bg-red' : 'bg-white';
  <NavLink className={ linkClass }/>;



  //React Hooks
  //STATE:  State generally refers to data or properties that need to be tracking in an application. The state is a built-in React object that is used to contain data or information about the component.   //State is like a little storage box. It holds information that can change over time.
              //The state object holds data in a component that is expected to change over time. It is created and maintained by the component itself, and when it changes, the component re-renders; rememeber componenets only render once intially. Update UI;
              //Two Types: Component State. App Level or Global State.
  //HOOKS: are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.
  //Hooks allow function components to have access to state and other React features.
  //Hooks are functions that let developers "hook into" the React state and lifecycle methods from a functional component.
  //React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef().

  //useState is a special function in React that helps you create and manage that storage box. It gives you a place to store a value and a way to change that value.
  //When we call the useState() function, it returns an array with two values:
                                                  //1. The current state: The current value of this state.
                                                  //2. The state setter: A function that we can use to update the value of this state.
  //Steps:
  //1. Import useState 
  import React, { useState } from "react";

  //2. Initialize State: Next, you create a storage box with useState. You give it an initial value (the value it starts with). This is like saying, "I have a counter, and it starts at 0."
       //const [count, setCount] = useState(0);
            //count - is the current value in your storage box.
            //setCount - is a function you can use to update the state i.e the initial value which is count.
            //useState(0) - tells React that count starts at 0.
  //3. Using State: You can now use count to show the current value and setCount to update it.
      const [count, setCount] = useState(0);
        return (
          <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                  Click me
              </button>
          </div>
      );


    //UPDATING useSTATE BASED ON PREVIOUS VALUE OF THE STATE - YOU should pass a FUNCTION to the state updating function instead of the new state value you want to have. Like below:
    //1. This doesn't gets the immediate available state
    setIsEditing(!isEditing);
    //2. This also doesn't gets the immediate available state
    setIsEditing(isEditing ? false : true);
    //3. This gets the latest available state: i.e runs a function and set the state to opposite of what it was using the Previous state value
    setIsEditing((editing) => !editing);
    setIsEditing((prevState) => !prevState);


    //useState in Array and Object: (Reference values) - Create a copy of the old state i.e a new object or new array and then change or update that copy.
    function handleGameClick(eachRowIndex, colIndex){
      setGameBoard((prevGameBoard) => {
          const updatedBoard = [...prevGameBoard.map((updatedPreArray => [...updatedPreArray]))];
          updatedBoard[eachRowIndex][colIndex] = 'X';
          return updatedBoard;
      }); };



    //Display dynamic button content based on state
      const Job = () => {
        const [showDescription, setShowDescription] = useState(false);
        return (
          <li><button>{ showDescription ? 'Less' : 'More' }</button></li>
        )
      }
    //Setting/Getting NAME Values -        (UseRef can also be used for the below)
    const Player = () => {
      const [userName, setUserName] = useState('');
      const [submitted, setSubmitted] = useState(false);
  
      function handleChange(event) {
          setUserName(event.target.value);     }
  
      function handleClick() {
          setSubmitted(true);}
      
    return (
      <section id="player">
          <h2>Welcome { submitted ? userName : 'User'}</h2>
          <p>
              <input type="text" value={userName} onChange={handleChange}/>
              <button onClick={handleClick}>Set Name</button>
          </p>
      </section>)}
     
    //SETTING AND UPDATING STATES USING FALSE/TRUTHY VALUES AND UPDATING UI BASED ON THESE VALUES AND USEREF
      const TimerChallenge = ( {title, targetTime} ) => {
        const [timerExpired, setTimerExpired] = useState(false);
        const [timerStarted, setTimerStarted] = useState(false);
        const timer = useRef();
    
        function handleStart(){
            timer.current = setTimeout(() => {
                setTimerExpired(true);
            }, targetTime * 1000);
               setTimerStarted(true);
        };
    
        function handleStop (){
            clearTimeout(timer.current);
        };
    
      return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You Lost</p>}
            <p className='challenge-time'>
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>
            <p> <button onClick={timerStarted ? handleStop : handleStart}> {timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
            <p className={timerStarted ? 'active' : undefined}> {timerStarted ? 'Timer running' : 'Timer Inactive!'}</p>
        </section>
      )
    }

    //States can be passed in as props.

    //LIFTING STATE UP: Manage the state in the closest Ancestor component that has access to both (child) components that needs that information.
      //The Parent component will then pass the needed information to both child components via PROPS.



    //DERIVING STATE

  //FETCHING DATA with useEffect
  //The useEffect: Is used in performng side effects in components; fetching data from an API. It takes two arguments; a function and a dependency array. Learnt that this hook runs on every render; whenever there's a change in the dependency which can actually cause an unending loop, in that case, it's preferable to inlude the second argument which in most cases is an empty array.This makes the useeffect run only on the first render.
  import { useEffect } from 'react';
  useEffect(() => {
    // function line of code here ... rmb to call the function there after below.
  }, []);

  //useParams: To get the id of a data - use Params Hooks from react router dom. Import useParams... Then destructure from useParams.
  import { useParams } from 'react';
  const { id } = useParams();


  //Fetching Data using React DATA LOADER from React Router: With a data loader, we basically create a function within a file and then export and use it in other areas i.e as a gloabal state and use in other componenets.

  //DEBUGGING REACT APPs
  //Debugging Broswer
  //Breakpoints
  //Error messages
  //Stack trace 
      //Return Statement with conditionals - with this line of code, the code beneath(comp and jsx) will not be executed if this condition isn't met.
      if(results.length === 0){
        return <p>Please eneter a valid number</p>
      }
  //Handling Logical errors
  //React Strict mode- initially executes every component twice. Reveals immediate underlying errors.
  //React Developer Tools


  //REFS and PORTALS
  //Advances DOM Access & Value Management
      //Accessing DOM Elements with Refs
      //Managing Values with Refs / Getting values - that isn't really a state-to be re-executed
      //Exposing API Functions from Components
      //Detaching DOM Rendering from JSX Structure with Portals.
      //Getting access to nested functions

  //HOW useRef Works    
  //REFS: Can be connected to the a jsx element using the ref prop
  //NOTE: Whenever a Ref value changes, the component's function does not re-execute like State but also value from the ref is not lost.
      //1. import
      //2. initialize to a variable
      //3. connect to an element
      //4. use to set state - (refname.current.property)
      //5. use conditionally if need be.
        import { useState, useRef } from 'react';

        const Playr = () => {
            const [userName, setUserName] = useState('');
            const playerName = useRef();

            function handleClick() {
                setUserName( playerName.current.value);
                // playerName.current.value = ''; 
            }           
         return (
            <section id="player">
                <h2>Welcome { userName ? userName : 'User'}</h2>
                <p>
                    <input ref={playerName} type="text"/>
                    <button onClick={handleClick}>Set Name</button>
                </p>
            </section>)};

    //FORWARDING REFS: forwardRef - a special function provided by React
    //Refs not accepted and destructured exact way as prop, rather as the next property received after props - not within the props curly braces, but after.
          //1-3
          //4. import { forwardRef } from 'react';
          //5. Nest the entire component receiving this ref in the forwardRef function
          //6. Destructure ref after props not within it with a comma
          //7. Use ref now within the receiving component having set it on the parent component
                        
    //USEIMPERATIVEHANDLE HOOK: useImperativeHandle(); - Useful for bigger react projects- To expose callable functions within a componenet - Meant to work together with forwardRef;
          //To build a component in a way that it exposes/shows its own functions that can be called with help of a ref outside of that(its) component. This will make the component work irrespective of how the jsx code that change in the future. For example, switchin from a dialog tag to a div tag.
          //Call this hook to define properties and methods that should be accessible on a component from outside the component. 
          //Needs two argument: 1. ref 2. A function that returns an object which groups all the properties and methods that should be exposed bby the component to other component
          //CLOSE MODAL: Use the inbuild form tag within the firm with a button and set method on form to 'dialog'
          import { forwardRef, useImperativeHandle, useRef } from 'react';
          const ResultModal = forwardRef(( {result, targetTime}, ref ) => {
            const dialog = useRef();
            useImperativeHandle (ref, () => {
              return{
                open() {
                  dialog.current.showModal();
                } };});
            return (
              <dialog className='result-modal' ref={dialog}>
                  <h2>You {result}</h2>
                  <p>The target time was <strong>{targetTime} seconds.</strong></p>
                  <p>You stopped at <strong>X seconds left</strong></p>
                  <form method='dialog'> <button>Close</button> </form>
              </dialog>
            );
          });
              //The open() method is what to be called on the other(maybe parent) component where this created child omponent is used..              
                  function handleStart(){
                     setTimeout(() => {
                          dialog.current.open();
                      }, targetTime * 1000); };
          
          //MORE EXAMPLE: seRef, forwardRef, useImperativeHandle, showModal, dialog...
          import {createPortal} from 'react-dom';
          import { forwardRef, useImperativeHandle, useRef } from 'react';

            const Modal = forwardRef(({children}, ref) => {
                const dialog = useRef();
                useImperativeHandle(ref, () => {
                    return{
                        open() {
                            dialog.current.showModal();
                        }
                    }
                });
              return createPortal(
                <dialog ref={dialog}>
                    {children}
                </dialog>,document.getElementById('modal-root')
              );
            })
            export default Modal;

