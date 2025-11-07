function calcular(){
      var txtv = window.document.querySelector('input#txtquan')    
        var res = window.document.querySelector('div#res') 
        if(txtv.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
        var fsex = document.getElementsByName('radepi')
        var epi =  ''
        var quan = Number(txtquan.value) 
        if (fsex[0].checked){
            epi = 'oculos de proteção'
        if (quan >= 1 && quan < 4){
            res.innerHTML += `${quan} ${epi} selecionados tenha um bom dia` 
        } else {
       res.innerHTML += `<p>Você selecionou <strong> ${quan} ${epi} </strong> Voce não pode selecionar essa quantidade</p>`
        }
    }
        if (fsex[1].checked) {
        epi = 'protetor auricular'
        if (quan >= 1 && quan <= 4){
            res.innerHTML += `${quan} ${epi} selecionados tenha um bom dia`
        } else {
            res.innerHTML += `<p>Você selecionou <strong> ${quan}   ${epi}</strong> Voce não pode selecionar essa quantidade</p>`
        }
    }

       else if (fsex[2].checked) {
        epi = 'capacete'
        if (quan >=1 && quan < 4){
          res.innerHTML += `${quan} ${epi} selecionados tenha um bom dia`
        } else{
            res.innerHTML += `<p>Você selecionou <strong> ${quan} ${epi}s </strong> Voce não pode selecionar essa quantidade</p>`
        }
    }
        res.innerHTML += `<p> Obrigado por confiar na CyberShield Systems</p>`
}
}