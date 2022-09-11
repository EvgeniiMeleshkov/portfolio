import socScreen from '../../assets/projectsScreens/samuraiSoc.png'
import todo from '../../assets/projectsScreens/todo.png'
import components from '../../assets/projectsScreens/components.png'
import counter from '../../assets/projectsScreens/counter1.png'

export const projects = [
    {
        name: 'Social network',
        description: 'Big complex app. Building a real social network...',
        background: {
            backgroundImage: `url(${socScreen})`,
            backgroundSize: 'cover'
        }
    },
    {
        name: 'Productivity App',
        description: 'Production developed complex App. Complex todo-list.',
        background: {
            backgroundImage: `url(${todo})`,
            backgroundSize: 'cover'
        }
    },
    {
        name: 'Components',
        description: 'Self-created components library for further usage.',
        background: {
            backgroundImage: `url(${components})`,
            backgroundSize: 'cover'
        }
    },
    {
        name: 'Counter',
        description: 'Simple counter with settings. Looks good..)',
        background: {
            backgroundImage: `url(${counter})`,
            backgroundSize: 'cover'
        }
    },

]