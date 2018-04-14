// Códigos únicos para as direções
var DIRECAO_ESQUERDA = 1;
var DIRECAO_DIREITA = 2;

function Heroi(contexto, teclado, animacao) {
   this.contexto = contexto;
   this.teclado = teclado;
   this.animacao = animacao;
   this.x = 0;
   this.y = 0;
   this.direcao = DIRECAO_DIREITA;
}
Heroi.prototype = {
   atualizar: function() {
      if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
         this.direcao = DIRECAO_ESQUERDA;
         this.x -= 10;
      }
      else if (this.teclado.pressionada(SETA_DIREITA) && 
               this.x < this.contexto.canvas.width - 20) {
         this.direcao = DIRECAO_DIREITA;
         this.x += 10;
      }
   },
   desenhar: function() {
      var imagem = new Image();
      imagem.src = 'img/ovni.png';
      this.contexto.drawImage(imagem, this.x, this.y,64,32);
   },
   atirar: function() {
      var tiro = new Bola(this.contexto);
      tiro.x = this.x + 10;
      tiro.y = this.y + 10;
      tiro.raio = 2;
      tiro.cor = 'red';

       
      tiro.velocidadeY = -20;

      this.animacao.novoSprite(tiro);
   }
}
