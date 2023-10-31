import './assets/styles/global.scss'
import Layout from './components/layout/layout'

const app = document.getElementById('app')

app.appendChild( new Layout().render())
