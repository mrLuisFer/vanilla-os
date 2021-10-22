import {dateTextElement} from './htmlElements'

console.log(dateTextElement)

const getFormatDate = (): string => {
	let hours: number = new Date().getHours()
	let minutes: number = new Date().getMinutes()
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? 0 + minutes : minutes;
	const ampm: string = hours >= 12 ? 'pm' : 'am';
	console.log(`${hours}:${minutes}`)
	console.log(ampm)
	console.log(minutes)
	console.log(hours)

	return `${hours}:${minutes} ${ampm}`
}

window.addEventListener('load', () => {
	console.log('page loaded')
	dateTextElement.textContent = getFormatDate()
})