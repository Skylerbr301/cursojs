function aluno(nome,nota) {
      this.nome=nome
      this.nota=nota

      this.dados_anonimo=function(){
          setTimeout(function(){
             this.nome='x'
             this.nota=5
             console.log(this.nome)
             console.log(this.nota)
          },2000)
      }
}

const al1=new aluno('Bruno',100)
al1.dados_anonimo()
 