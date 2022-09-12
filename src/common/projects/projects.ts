import socScreen from '../../assets/projectsScreens/samuraiSoc.png'
import todo from '../../assets/projectsScreens/todo.png'
import components from '../../assets/projectsScreens/components.png'
import counter from '../../assets/projectsScreens/counter1.png'

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

]