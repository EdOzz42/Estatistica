let adicionar = document.querySelector('#adicionar')
let data = document.querySelector('#data')
let executar = document.querySelector('#exec')
let res = document.querySelector('#res')
let arrData = []
adicionar.addEventListener('click', addData)
executar.addEventListener('click', exec)

function IsNumber(numParam) {
    if (Number(numParam) >= 1) {
        return numParam
    }  else {
        return false
    }
}

function addData() {
    if (IsNumber(data.value)) {
        arrData.push(Number(data.value))
        let select = document.querySelector('#dataTable')
        let option = document.createElement('option')
        option.text = `Valor ${data.value} adicionado.`
        select.appendChild(option)
    } else {
        window.alert('[ERRO!] Valor inválido!')
    }

    data.value = ''
    data.focus()
}

function exec() {
    if (arrData == 0) {
        window.alert('[ERRO!] Adicione dados para prosseguir!')
    }
    else {
        let totalData = arrData.length
        let max = arrData[0]
        let min = arrData[0] 
        let soma = 0
        for (let pos in arrData) {
            soma += arrData[pos]
            if (arrData[pos] > max) 
                max = arrData[pos]
            if (arrData[pos] < min) 
                min = arrData[pos]  
        }
        let media = soma / totalData
        
        let rolArrData = arrData.sort((a, b) => a - b)
        let textRol = ' '
        for (let pos in rolArrData) {
            if (pos >= rolArrData.length - 1) {
                textRol += `${rolArrData[pos]}.`
            }
            else  {
                textRol += `${rolArrData[pos]}, `
            }
        }

        function medianaCalc() {
            if (rolArrData.length % 2 !== 0) {
                return rolArrData[Math.floor(rolArrData.length / 2)]    
            } else {
                med0 = rolArrData[rolArrData.length / 2]
                med1 = rolArrData[rolArrData.length / 2 - 1]
                return (med0 + med1) / 2 
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Rol dos dados (Crescente): ${textRol}</p>`
        res.innerHTML += `<p>Há ${totalData} dados brutos.</p>`
        res.innerHTML += `<p>A média desse rol de dados é ${media}.</p>`
        res.innerHTML += `<p>A mediana desse rol de dados é: ${medianaCalc()}</p>`
        res.innerHTML += `<p>Maior número: ${max}.</p>`
        res.innerHTML += `<p>Menor número: ${min}.</p>`
    }
}