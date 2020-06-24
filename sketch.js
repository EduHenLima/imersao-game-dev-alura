// instanciando a variavel da imagem
let imagemCenario;
// instanciando a variavel do personagem
let imagemPersonagem
// instanciando cenarioi da classe
let somDoJogo
let cenario;
let personagem;

let inimigo
let imagemInimigo

let somPulo;
const matrizInimiga = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 400],
  [104, 400],
  [208, 400],
  [312, 400],
  [0, 504],
  [104, 504],
  [208, 504],
  [312, 504],
  [0, 608],
  [104, 608],
  [208, 608],
  [312, 608],
];
const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];

function preload() {
  // Chamando o cenario
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  // Chamando o personagem
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  // chamando o inimigo
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  // Chamando o som do jogo
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  
  personagem = new Personagem(matrizPersonagem,imagemPersonagem, 0, 110,135,220,270);

  inimigo = new Inimigo(matrizInimiga, imagemInimigo, width -52, 52, 52, 104, 104);
  
  // setamos o frame por segundo
  frameRate(40)
  // Chama o som do jogo. Descomentar no fim.
  somDoJogo.loop()
}

function keyPressed(){
  
  if(key == 'ArrowUp'){
    personagem.pula();
    somDoPulo.play();
  }
  
}

function draw() {
  // chama a função do cenário, faz a mesma função que um while ou for, ele fica chamando varias vezes o que está aqui dentro.
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  if(personagem.estaColidindo(inimigo)){
       console.log('colidiu');
    noLoop();
  }


}

