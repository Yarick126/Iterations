import './assets/styles/global.scss'
import layout from './components/layout/layout'

const app = document.getElementById('app')

app.appendChild( new layout().render())
