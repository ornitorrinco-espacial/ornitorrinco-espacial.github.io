Vue.component('iconesmapa',
	{
		props: ['ico'],
		template: `<span class="icons" :class="ico.classe" :style="ico.posicao"></span>`
	}
)

Vue.component('iconesregiao',
	{
		props: ['ico', 'clique'],
		template: `<span class="icons" :class="ico.classe" :style="ico.posicao" @click="clique(ico)"></span>`
	}
)
var vm = new Vue({
	el: '#ecoDados',
	data: {
		dadosGerais: [
			{
				key: 'dado1',
				arrValor: 0,
				texto: 'A agricultura familiar representa 84,4% dos estabelecimentos agrícolas do país, ocupando uma área equivalente a mais de 4 milhões de estádios do Maracanã! (80,25 milhões de hectares)',
				imageSrc: 'img/icons/casa 1.png',
				imageAlt: 'Agricultura familiar'
			},
			{
				key: 'dado2',
				arrValor: 1,
				texto: 'A produção de café na região Sudeste foi a mais importante atividade economica do Brasil no início do século XX, correspondendo a mais de 30% do PIB nacional na época. Contudo, as duas grandes guerras e revoluções que ocorreram em diversos países causou uma grande queda em sua produção, até mesmo ao ponto de queimarem café e jogarem sacas no mar para não causar uma desvalorização excessiva do produto.',
				imageSrc: 'img/icons/café.png',
				imageAlt: 'Produção de café'
			},
			{
				key: 'dado3',
				arrValor: 2,
				texto: 'A produção de café na região Sudeste foi a mais importante atividade economica do Brasil no início do século XX, correspondendo a mais de 30% do PIB nacional na época. Contudo, as duas grandes guerras e revoluções que ocorreram em diversos países causou uma grande queda em sua produção, até mesmo ao ponto de queimarem café e jogarem sacas no mar para não causar uma desvalorização excessiva do produto.',
				imageSrc: 'img/icons/café.png',
				imageAlt: 'Produção de café'
			}
		],
		mapas: [
			{
				key: 0,
				id: 'no',
				mapaSrc: 'img/mapas/norte.png'
			},
			{
				key: 1,
				id: 'ne',
				mapaSrc: 'img/mapas/nordeste.png'
			},
			{
				key: 2,
				id: 'co',
				mapaSrc: 'img/mapas/centroOeste.png'
			},
			{
				key: 3,
				id: 'se',
				mapaSrc: 'img/mapas/sudeste.png'
			},
			{
				key: 4,
				id: 'sul',
				mapaSrc: 'img/mapas/sul.png'
			}
		],
		icones: {
			br: [
					{
						key: 'br00',
						classe: 'mandioca',
						posicao: 'left: 20vw; top: 16vh;'
					},
					{
						key: 'br01',
						classe: 'nuvem',
						posicao: 'left: 4vw; top: 10vh;'
					},
					{
						key: 'br02',
						classe: 'nuvem',
						posicao: 'left: 40vw; top: 20vh;'
					},
					{
						key: 'br03',
						classe: 'planta',
						posicao: 'left: 7vw; top: 25vh;'
					},
					{
						key: 'br04',
						classe: 'arvore1',
						posicao: 'left: 10vw; top: 35vh;'
					},
					{
						key: 'br05',
						classe: 'arvore2',
						posicao: 'left: 23vw; top: 30vh;'
					},
					{
						key: 'br06',
						classe: 'soja',
						posicao: 'left: 7vw; top: 7vh;'
					},
					{
						key: 'br07',
						classe: 'trigo',
						posicao: 'left: 30vw; top: 30vh;'
					},
					{
						key: 'br08',
						classe: 'saco',
						posicao: 'left: 19vw; top: 13vh;'
					},
					{
						key: 'br09',
						classe: 'vaca',
						posicao: 'left: 48vw; top: 36vh;'
					},
					{
						key: 'br10',
						classe: 'porco',
						posicao: 'left: 41vw; top: 28vh;'
					},
					{
						key: 'br11',
						classe: 'casa1',
						posicao: 'left: 45vw; top: 2vh;'
					},
					{
						key: 'br12',
						classe: 'casa2',
						posicao: 'left: 37vw; top: 43vh;'
					},
					{
						key: 'br13',
						classe: 'saco_cafe',
						posicao: 'left: 45vw; top: 36vh;'
					},
					{
						key: 'br14',
						classe: 'saco_feijao',
						posicao: 'left: 50vw; top: 17vh;'
					},
					{
						key: 'br15',
						classe: 'leite',
						posicao: 'left: 5vw; top: 6vh;'
					},
					{
						key: 'br16',
						classe: 'casa1',
						posicao: 'left: 6vw; top: 7vh;'
					},
					{
						key: 'br17',
						classe: 'casa1',
						posicao: 'left: 7vw; top: 8vh;'
					},
					{
						key: 'br18',
						classe: 'casa2',
						posicao: 'left: 8vw; top: 9vh;'
					},
					{
						key: 'br19',
						classe: 'feijao',
						posicao: 'left: 9vw; top: 10vh;'
					},
					{
						key: 'br20',
						classe: 'galinha',
						posicao: 'left: 10vw; top: 11vh;'
					},
					{
						key: 'br21',
						classe: 'trigo',
						posicao: 'left: 2vw; top: 4vh;'
					},
					{
						key: 'br22',
						classe: 'milho',
						posicao: 'left: 4vw; top: 6vh;'
					},
					{
						key: 'br23',
						classe: 'soja',
						posicao: 'left: 6vw; top: 8vh;'
					}
				],
			no: [
					{
						key: 'no00',
						classe: '',
						posicao: '',
						infoIcone: ''
					}
				],
			ne: [
					{
						key: '',
						classe: '',
						posicao: '',
						infoIcone: ''
					}
				],
			co: [
					{
						key: 'co00',
						classe: 'soja',
						posicao: 'left: 10%; top: 15%;',
						infoIcone: 'A região Centro-Oeste do país é responsável por quase metade da produção de soja nacional, produzindo mais de 50 milhões de toneladas do grão. (Fonte: Conab)'
					},
					{
						key: 'co01',
						classe: 'vaca',
						posicao: 'left: 12%; top: 12%;',
						infoIcone: 'Os três estados da região estão entre os cinco maiores detentores de rebanho bovino do país, com Mato Grosso possuindo quase 15% do total nacional.'
					},
					{
						key: 'co02',
						classe: 'casa2',
						posicao: 'left: 50%; top: 50%;',
						infoIcone: 'A região Centro-Oeste possui a maior disparidade de área entre a agricultura familiar e a não-familiar. A última ocupa uma área 10 vezes maior, com aproximadamente 96 milhões de hectares.'
					},
					{
						key: 'co03',
						classe: 'soja',
						posicao: 'left: 64%; top: 30%;',
						infoIcone: 'A região Centro-Oeste do país é responsável por quase metade da produção de soja nacional, produzindo mais de 50 milhões de toneladas do grão. (Fonte: Conab)'
					},
					{
						key: 'co04',
						classe: 'soja',
						posicao: 'left: 15%; top: 60%;',
						infoIcone: 'A região Centro-Oeste do país é responsável por quase metade da produção de soja nacional, produzindo mais de 50 milhões de toneladas do grão. (Fonte: Conab)'
					},
					{
						key: 'co05',
						classe: 'soja',
						posicao: 'left: 25%; top: 27%;',
						infoIcone: 'A região Centro-Oeste do país é responsável por quase metade da produção de soja nacional, produzindo mais de 50 milhões de toneladas do grão. (Fonte: Conab)'
					}
				],
			se: [
					{
						key: '',
						classe: '',
						posicao: '',
						infoIcone: ''
					}
				],
			sul: [
					{
						key: '',
						classe: '',
						posicao: '',
						infoIcone: ''
					}
				]
		},
		falas: [
			{
				key: 'fala0',
				texto: 'Olá!',
				tempo: 1500,//ms,
				styles: 'animation: fala0 0.8s linear both; animation-iteration-count: 1; animation-delay: 2s;'
			},
			{
				key: 'fala1',
				texto: 'Meu nome é João e irei te guiar pelo infográfico.',
				tempo: 4500,//ms,
				styles: 'animation: fala1 3s linear both; animation-iteration-count: 1;'
			},
			{
				key: 'fala2',
				texto: 'A agricultura familiar é muito importante,',
				tempo: 1500,//ms,
				styles: 'animation: fala2 2.8s linear both; animation-iteration-count: 1;'
			},
			{
				key: 'fala3',
				texto: 'Gera muitos empregos e leva comida a casa de todos.',
				tempo: 1500,//ms,
				styles: 'animation: fala3 3.6s linear both; animation-iteration-count: 1;'
			},
			{
				key: 'fala4',
				texto: 'A sua direita, temos um mapa do Brasil divido por regiões',
				tempo: 1500,//ms,
				styles: 'animation: fala4 4s linear both; animation-iteration-count: 1;'
			},
			{
				key: 'fala5',
				texto: 'Por que não tenta navegar pelas regiões?',
				tempo: 1500,//ms,
				styles: 'animation: fala5 3.2s linear both; animation-iteration-count: 1;'
			},
			{
				key: 'fala6',
				texto: 'Você pode encontrar várias informações legais.',
				tempo: 1500,//ms,
				styles: 'animation: fala6 3.4s linear both; animation-iteration-count: 1;'
			},
		],
		status: 1,
		regiaoSelecionada: {},
		iconesRegiao: {},
		iconeSelecionado: {},
		isExpand: [false, false, false],
		isHide: [false, false, false],
		agricultorAtivo: false,
		agricultorFala: false,
		contadorFala: 0,
		timer: ''
	},
	methods: {
		objVazio: function(objeto) {
			//Verifica se um objeto está vazio
			for(var key in objeto) {
		        if(objeto.hasOwnProperty(key))
		            return false;
		    }
		    return true;
		},
		arrValor: function(arr, value) {
			//Verifica se um array possui certo valor
			for(var i = 0; i < arr.length; i++){
				if(arr[i] == value){
					return true;
				}
			}
			return false;
		},
		mostrarInfo: function(key) {
			//Mostrar as informações contidas nas informações gerais, mudando os valores dos arrays para implementar classes
			if(!this.arrValor(this.isExpand, true)){
				for(var i = 0; i < this.isExpand.length; i++){
					if(i == key){
						this.isExpand.splice(i, 1, true);
					} else {
						this.isHide.splice(i, 1, true);
					}
				}
			} else {
				for(var i = 0; i < this.isExpand.length; i++){
					this.isExpand.splice(i, 1, false);
					this.isHide.splice(i, 1, false);
				}
			}
		},
		selecionarRegiao: function(sel) {
			//Verifica se já não há uma região selecionada e adiciona no objeto os dados da nova regiao
			if(!this.objVazio(this.regiaoSelecionada)){
				this.regiaoSelecionada = {}
			}
			this.regiaoSelecionada = this.mapas[sel],
			this.status++,
			console.log(this.regiaoSelecionada);
			this.agricultorFala = false;
			this.agricultorAtivo = false;
			clearInterval(this.timer);
			this.iconesRegiao = this.icones[this.regiaoSelecionada['id']]
		},
		infoIcon: function(icon) {
			//Aciona o próximo estado, onde a informação aparece, e atribui o ícone selecionado
			if(this.status < 3) {
				this.iconSelecionado = icon,
				this.status++,
				console.log(this.iconSelecionado)
			} else {
				this.iconSelecionado = icon
			}
		},
		retornar: function() {
			//Retornar para a tela anterior
			if(this.status > 1) {
				this.status--
			}
		},
		fecharAgricultor: function() {
			this.agricultorAtivo = false
		},
		proximaFala: function() {
			if(this.contadorFala < 6){
				console.log(this.contadorFala);
				this.contadorFala++;
			} else {
				console.log("Fim");
				this.agricultorFala = false;
				this.agricultorAtivo = false;
				clearInterval(this.timer);
			}
		}
	},
	watch: {
		status: function() {
			if(this.status > 3 || this.status < 1 || (this.status != 1 && this.objVazio(this.regiaoSelecionada))){
				this.status = 1,
				this.regSelecionada = {}
			}
		}
	},
	computed: {
		classeMapaR: function(){
			if(this.status == 2) {
				return 'col-sm-12';
			}
			return 'col-sm-7';
		}
	},
	mounted: function () {
		this.$nextTick(function () {
			this.agricultorAtivo = true,
			this.agricultorFala = true,
			this.timer = setInterval(this.proximaFala, 4500)
		})
	}
});

$(document).ready(function(){
	//Ativador do popover da Logo da equipe
    $('#logoEquipe').popover({
    	title: '<h5>Ornitorrinco Espacial<h5>',
	 	content: '<h6>Equipe:</h6> <ul> <li>Daniela</li> <li>Guilherme</li> <li>João Victor</li> <li>Júnior</li> </ul>',
	  	html: true,
    	placement: 'left',
    	trigger: 'hover'
    });

    //Tooltip do ícone de ajuda
    $('#ajudar').tooltip({title: 'Sobre o infográfico', placement: 'right'});
});