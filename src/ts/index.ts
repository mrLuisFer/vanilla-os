import {dateTextElement} from './htmlElements'
import {getFormatDate} from './utils'

window.addEventListener('load', () => {
	console.log('page loaded')
	dateTextElement.textContent = getFormatDate()
})
