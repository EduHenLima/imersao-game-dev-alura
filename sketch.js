// instanciando a variavel da imagem
let imagemCenario;
// instanciando a variavel do personagem
let imagemPersonagem
// instanciando cenarioi da classe
let somDoJogo
let cenario;
let personagem;


function preload() {
  // Chamando o cenario
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  // Chamando o personagem
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  // Chamando o som do jogo
  somDoJogo = loadSound('sons/trilha_jogo.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);

  // setamos o frame por segundo
  frameRate(40)
  // Chama o som do jogo. Descomentar no fim.
  // somDoJogo.loop()
}

function draw() {
  // chama a função do cenário, faz a mesma função que um while ou for, ele fica chamando varias vezes o que está aqui dentro.
  cenario.exibe();
  cenario.move();
  personagem.exibe();

}

