

const finalbox =document.getElementById('country')

countries_data.forEach((count,index)=>{
 // creating elements 
	let divElement=document.createElement('div')// div contain text and img 
	let h1Element= document.createElement('h1') // h1 element 
	let pElementForCapital=document.createElement('p')//p element 
	let pElementForContinent=document.createElement('p')//p element 
	let imageElement= document.createElement('img')// img elements
	let hrElement = document.createElement('hr') // hr element

	// getting text for div
	let getting_text_count=document.createTextNode(`Country : ${count.name}`)
	let getting_text_capital= document.createTextNode(`Capital :${count.capital}`)
	let getting_text_continent=document.createTextNode(`Continent :${count.region}`)
	
	// adding src to img  
	imageElement.src=`${count.flag}`
	
	// adding class to div 
	divElement.className='divElement'
	
	//filling the text pic  	
	h1Element.appendChild(getting_text_count)
	pElementForCapital.appendChild(getting_text_capital)
	pElementForContinent.appendChild(getting_text_continent)
	
	//document flow 
	divElement.appendChild(imageElement)// print img 
	divElement.appendChild(hrElement)   //then hr  
	divElement.appendChild(h1Element)   // then h1 
	divElement.appendChild(pElementForCapital)// then p and p elements 
	divElement.appendChild(pElementForContinent)
	
	// final filling 
	finalbox.appendChild(divElement);
})