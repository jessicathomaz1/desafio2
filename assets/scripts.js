const form = document.getElementById('form');
const taskList = document.getElementById('campeonato');

form.onsubmit = function (e) {
	e.preventDefault();
	const valor1 = document.getElementById('valor1');
	const valor2 = document.getElementById('valor2');

	addTask(valor1.value, valor2.value);
	
    
    form.reset();
};

function addTask(placar1, placar2) {

    if(placar1 > placar2) {
        const container = document.createElement('div');
        const label = document.createElement('label');
        const descriptionNode = document.createTextNode(placar1 + ':'+ placar2 + ' = ganhou 3 pontos');

        label.appendChild(descriptionNode);

        container.appendChild(label);

        taskList.appendChild(container);

    } else if (placar1 < placar2) {
        const container = document.createElement('div');
        const label = document.createElement('label');
        const descriptionNode = document.createTextNode(placar1 + ':'+ placar2 + ' = ganhou 0 pontos');

        label.appendChild(descriptionNode);

        container.appendChild(label);

        taskList.appendChild(container);
    } else if(placar1 == placar2) {
        if (placar1 == '' || placar2 == '') {
            alert('Valor inválido')
        } else {
            const container = document.createElement('div');
            const label = document.createElement('label');
            const descriptionNode = document.createTextNode(placar1 + ':'+ placar2 + ' = ganhou 1 pontos');
    
            label.appendChild(descriptionNode);
    
            container.appendChild(label);
    
            taskList.appendChild(container);
        }
    }
	
}