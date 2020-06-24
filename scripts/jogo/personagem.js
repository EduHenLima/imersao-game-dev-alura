class Personagem extends Animacao{

  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.yBase = height - this.altura;
    this.y = this.yBase;
    this.velocidadePulo = 0;
    this.gravidade = 3
    
  }
  
  // função utilizada para fazer o pulo
  pula(){
    this.velocidadePulo = - 30;
  }
  
  // função utilizada para aplicar a gravidade do pulo
  aplicaGravidade(){
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y > this.yBase){
      this.y = this.yBase;
    }
  }

  estaColidindo(){
    // Utilizamos isso para Debbugar as posiçes que estamos passando
    // noFill();
    // rect(this.x,this.y,this.largura,this.altura)
    // rect(inimigo.x,inimigo.y,inimigo.largura,inimigo.altura)
    const precisao = .7;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    
    return colisao;
  }
  
}