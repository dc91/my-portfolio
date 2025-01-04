import ToDoLy1 from '../../assets/ToDoLy1.svg';
import AssetTracker from '../../assets/AssetTracker.png';
import CV from '../../assets/CV.png';
import Munamii from '../../assets/Munamii.png';
import PeopleManager from '../../assets/PeopleManager.png';
import HeaderBlack from '../../assets/HeaderBlack.svg';

const projects = [
  {
    name: 'ToDoLy',
    image: ToDoLy1,
    repo: 'https://github.com/dc91/ToDoLy',
    content: 
      <p>
        This is a simple To-Do List console app, which allows users to Add/Edit/Remove and Save tasks to file. 
        <br /> The project is written in C#. It consists of three main parts: <br /><br />
        <b>Main Menu</b><br />
        <b>Add Task</b><br />
        <b>Edit Tasks</b><br /><br />
        The user is able to sort, search and filter tasks in various ways, in the Edit Menu.
        <br /><br />
        <img className='project-snap' src={ToDoLy1} alt={`ToDoLy Thumbnail`} />
        <br />
        It has some responsive design as well as a user-friendly design, allowing for fast navigation.
        Check it out on GitHub, if you wanna give it a go! <br /><br />
      </p>
    ,
  },
  {
    name: 'Asset Tracker',
    image: AssetTracker,
    repo: 'https://github.com/dc91/MiniProject3',
    content: (
      <p>
        An asset tracker for a company with three offices, with different currencies. The currencies are fetched at load.
        <br /><br />
        <img className='project-snap' src={AssetTracker} alt={`Asset Tracker Thumbnail`} />
        <br /><br />
        Check it out on GitHub!
        <br /><br />
      </p>
    ),
  },
  {
    name: 'CV',
    image: CV,
    repo: 'https://github.com/dc91/CV',
    content: (
      <p>
        Just a classic CV made with HTML and CSS. No JavaScript. A copy made from the first search result when I googled "CV".
        <br /><br />
        <img className='project-snap' src={CV} alt={`CV Thumbnail`} />
        <br /><br />
        Feel free to snatch the code from GitHub and change it to your needs. <br /><br />
      </p>
    ),
  },
  {
    name: 'Munamii',
    image: Munamii,
    repo: 'https://github.com/dc91/Munamii',
    content: (
      <p>
        A mock website for a bakery called "Munamii", using HTML and CSS. No JavaScript. It works on Mobile and PC.
        <br /><br />
        <img className='project-snap' src={Munamii} alt={`Munamii Thumbnail`} />
        <br /><br />
        See the full design at GitHub.
        <br /><br />
      </p>
    ),
  },
  {
    name: 'People Manager',
    image: PeopleManager,
    repo: 'https://github.com/dc91/Ex3',
    content: (
      <p>
        A bare minimum console app.
        <br /><br />
        <img className='project-snap' src={PeopleManager} alt={`People Manager Thumbnail`} />
        <br /><br />
        Copy it from GitHub and improve it!
        <br /><br />
      </p>
    ),
  },
  {
    name: 'This Site',
    image: HeaderBlack,
    repo: 'https://github.com/dc91/my-portfolio',
    content: (
      <p>
        HTML, CSS and React.js
        <br /><br />
        <img className='project-snap' src={HeaderBlack} alt={`Portfolio Thumbnail`} />
        <br /><br />
        Hope you like it!
        <br /><br />
      </p>
    ),
  },
];

export default projects;
