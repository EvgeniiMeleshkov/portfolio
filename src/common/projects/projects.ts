import socScreen from '../../assets/projectsScreens/samuraiSoc.png'
import todo from '../../assets/projectsScreens/todo.png'
import components from '../../assets/projectsScreens/components.png'
import counter from '../../assets/projectsScreens/counter1.png'
import dragon from '../../assets/projectsScreens/dragon.png'
import searchAndNav from '../../assets/projectsScreens/search&nav.png'
import turing from '../../assets/projectsScreens/turing.png'

export const projects = [
    {
        name: 'Social network',
        description: 'Big complex app. Building a real social network...',
        href: 'https://evgeniimeleshkov.github.io/Samuray_Way/',
        background: {
            backgroundImage: `url(${socScreen})`,
            backgroundSize: 'cover'
        }
    },
    {
        name: 'Productivity App',
        description: 'Production developed complex App. Complex todo-list.',
        href: 'https://evgeniimeleshkov.github.io/my_todo/',
        background: {
            backgroundImage: `url(${todo})`,
            backgroundSize: 'cover'
        }
    },
    {
        name: 'Components',
        description: 'Self-created components library for further usage.',
        href: 'https://evgeniimeleshkov.github.io/ts_tasks_from_i/',
        background: {
            backgroundImage: `url(${components})`,
            backgroundSize: 'cover'
        }
    },
    {
        name: 'Counter',
        description: 'Simple counter with settings. Looks good..)',
        href: 'https://evgeniimeleshkov.github.io/counter_ts/',
        background: {
            backgroundImage: `url(${counter})`,
            backgroundSize: 'cover'
        }
    },
    {
        name: 'Dragon-quiz',
        description: 'Big and complex app for education. It`s in progress now.',
        href: 'https://evgeniimeleshkov.github.io/my-dragon-quiz/',
        background: {
            backgroundImage: `url(${dragon})`,
            backgroundSize: 'cover',
            width: '95%',
            marginTop: '5px',
            borderRadius: '5px'
        }
    },
    {
        name: 'Search & Nav NoteBook',
        description: 'It`s was a test task from one of the companies',
        href: 'https://evgeniimeleshkov.github.io/tasks-test-app',
        background: {
            backgroundImage: `url(${searchAndNav})`,
            backgroundSize: 'cover',
            width: '95%',
            marginTop: '5px',
            borderRadius: '5px'
        }
    },
    {
        name: 'Turing fake machine',
        description: 'This is the fake behavior of the Turing machine (only UI & animations)',
        href: 'https://evgeniimeleshkov.github.io/turing-fake-ui/',
        background: {
            backgroundImage: `url(${turing})`,
            backgroundSize: 'cover',
            width: '95%',
            marginTop: '5px',
            borderRadius: '5px'
        }
    },
]