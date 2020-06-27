let textTale = ["Жили-были {var1} да {var2}. ",
			"Была у них {var3}. ",
			"Снесла {var3} {var4}, не простое - золотое. ","<br>",
			"- {var1} бил, бил - не разбил, ","<br>",
			"- {var2} била, била - не разбила. ","<br>",
			"{var5} бежала, {var6} задела, {var4} упало и разбилось. ",
			"{var1} плачет, {var2} плачет, а {var3} кудахчет: ",
			"{speach}", "."];


const tempVars = ['{var1}', '{var2}', '{var3}', '{var4}', '{var5}', '{var6}', '{speach}'];

const idVars = ['#inputVar1', '#inputVar2', '#inputVar3', '#inputVar4', '#inputVar5', '#inputVar6', '#inputSpeach'];

var finalText = '';

function showText(tex) {
	let tempText = '';
	for (let i = 0; i < tex.length; i++) {
		tempText += tex[i];
	}
	document.querySelector('.text-tale').innerHTML = tempText;	
	finalText = tempText;	
}

function changeVars(tex) {
	for (let i = 0; i < tempVars.length; i++) {
		const varElem = document.querySelector(idVars[i]);
		// varElem.style.color = "green";
		tex = tex.split(tempVars[i]).join(varElem.value);
		

	}
	document.querySelector('.text-tale').innerHTML = tex;
}


