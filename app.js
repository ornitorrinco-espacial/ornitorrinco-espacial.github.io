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
				texto: 'A agricultura familiar representa 84,4% dos estabelecimentos agrícolas do país, ocupando uma área equivalente a mais de 4 milhões de estádios do Maracanã! (80,25 milhões de hectares)<br>Além disso, mais de 74% dos postos de trabalhos rurais estão sob regime de agricultura familiar.',
				imageSrc: 'img/icons/casa 1.png',
				imageAlt: 'Agricultura familiar'
			},
			{
				key: 'dado2',
				arrValor: 1,
				texto: 'A agricultura familiar é responsável por garantir boa parte da segurança alimentar do País, como importante fornecedora de alimentos para o mercado interno. <br>Mais de 80% da mandioca, 70% do feijão e quase 70% da prdução de leite vêm de estabelecimentos de agricultura familiar, além dela possuir participação importante em outros produtos.',
				imageSrc: 'img/icons/saco.png',
				imageAlt: 'Produção de café'
			},
			{
				key: 'dado3',
				arrValor: 2,
				texto: '30% do valor repassado pelo Programa Nacional de Alimentação Escolar (PNAE), é investido na compra direta de produtos da agricultura familiar, medida que estimula o desenvolvimento econômico e sustentável das comunidades.',
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
						posicao: 'left: 17vw; top: 1vh;'
					},
					{
						key: 'br02',
						classe: 'nuvem',
						posicao: 'left: 35vw; top: 17vh;'
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
						posicao: 'left: 30vw; top: 32vh;'
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
						posicao: 'left: 37vw; top: 35vh;'
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
						posicao: 'left: 52vw; top: 45vh;'
					},
					{
						key: 'br16',
						classe: 'casa1',
						posicao: 'left: 8vw; top: 21vh;'
					},
					{
						key: 'br17',
						classe: 'casa1',
						posicao: 'left: 29vw; top: 19vh;'
					},
					{
						key: 'br19',
						classe: 'saco_feijao',
						posicao: 'left: 48vw; top: 10vh;'
					},
					{
						key: 'br20',
						classe: 'galinha',
						posicao: 'left: 42vw; top: 32vh;'
					},
					{
						key: 'br22',
						classe: 'saco_milho',
						posicao: 'left: 20vw; top: 20vh;'
					},
					{
						key: 'br23',
						classe: 'soja',
						posicao: 'left: 27vw; top: 27vh;'
					}
				],
			no: [
					{
						key: 'no00',
						classe: 'mandioca',
						posicao: 'left: 30%; top: 50%;',
						infoIcone: 'A região é a líder em produção de mandioca no país, com aproximadamente 38% da produção nacional saindo dessa. O estado do Pará é o maior produtor de mandioca do Brasil. No ano de 2017 foram colhidos mais de 4 milhões de toneladas.'
					},
					{
						key: 'no01',
						classe: 'vaca',
						posicao: 'left: 70%; top: 20%;',
						infoIcone: 'O estado do Pará possui o quinto maior rebanho do Brasil, com mais de 20 milhões de cabeças de gado.'
					}
				],
			ne: [
					{
						key: 'ne00',
						classe: 'casa1',
						posicao: 'left: 30%; top: 30%;',
						infoIcone: 'Aproximadamente 50% dos estabelecimentos que se caracterizam como pertencentes a agricultura familiar estão no Nordeste. São mais de 2 milhões de hectares plantados na região.'
					},
					{
						key: 'ne01',
						classe: 'saco_feijao',
						posicao: 'left: 60%; top: 24%;',
						infoIcone: 'Apesar de possuir a maior área plantada, com mais de 1,5 milhão de hectares plantados, a região Nordeste fica em quarto lugar na produção do grão, com quase 650 mil toneladas do grão colhidas, devido ao baixo rendimento do plantio na região.'
					}
				],
			co: [
					{
						key: 'co00',
						classe: 'soja',
						posicao: 'left: 27%; top: 37%;',
						infoIcone: 'A região Centro-Oeste produz quase 50% de toda a safra da soja do país, com o estado de Mato Grosso sendo o maior produtor do país. Mais de 50 milhões de toneladas do grão são colhidas anualmente.'
					},
					{
						key: 'co01',
						classe: 'vaca',
						posicao: 'left: 48%; top: 14%;',
						infoIcone: 'Os três estados da região estão entre os cinco maiores detentores de rebanho bovino do país, com Mato Grosso possuindo quase 15% do total nacional.'
					},
					{
						key: 'co02',
						classe: 'casa2',
						posicao: 'left: 52%; top: 45%;',
						infoIcone: 'A região Centro-Oeste possui a maior disparidade de área entre a agricultura familiar e a não-familiar. A última ocupa uma área 10 vezes maior, com aproximadamente 96 milhões de hectares (área equivalente a 10 vezes o estado de Santa Catarina).'
					},
					{
						key: 'co03',
						classe: 'saco_milho',
						posicao: 'left: 64%; top: 30%;',
						infoIcone: 'A região Centro-Oeste é a maior produtora de milho do país, colhendo aproximadamente metade de todo o milho produzido no Brasil, estimado em 90 milhões de toneladas na última safra.'
					}
				],
			se: [
					{
						key: 'se00',
						classe: 'saco_cafe',
						posicao: 'left: 50%; top: 30%;',
						infoIcone: 'A região Sudeste é detentora de grande parte da produção de café no país, assim como é desde o período imperial. Ela sozinha possui mais de 85% de todas as áreas de plantio do país, que são estimadas em 2,2 milhões de hectares, o equivalente ao estado de Sergipe'
					},
					{
						key: 'se01',
						classe: 'vaca',
						posicao: 'left: 40%; top: 64%;',
						infoIcone: 'O estado de Minas Gerais é o segundo estado brasileiro com relação ao rebanho bovino, com mais de 23 milhões de cabeças de gado, perdendo apenas para o Mato Grosso.'
					},
					{
						key: 'se01',
						classe: 'leite',
						posicao: 'left: 60%; top: 20%;',
						infoIcone: 'A região Sudeste é a maior produtora de leite do país, sendo responsável por aproximadamente 40% da produção de leite nacional.'
					}
				],
			sul: [
					{
						key: 'su00',
						classe: 'saco',
						posicao: 'left: 50%; top: 55%;',
						infoIcone: 'A região Sul, sozinha, produz 4 vezes mais arroz que todas as outras regiões do país combinadas, com um total de mais de 9 milhões de toneladas do grão nas últimas safras.'
					},
					{
						key: 'su01',
						classe: 'mandioca',
						posicao: 'left: 60%; top: 42%',
						infoIcone: 'Mesmo possuindo uma área de plantação reduzida, o estado do Paraná é o segundo maior produtor de mandioca do país, perdendo apenas para o Pará. Foram colhidos mais de 3 milhões de toneladas no ano de 2017, o equivalente a mais de 3 milhões de carros populares juntos!'
					},
					{
						key: 'su02',
						classe: 'leite',
						posicao: 'left: 60%; top: 45%',
						infoIcone: 'Logo atrás da região Sudeste, a região Sul é a segunda maior produtora de leite do país.'
					},
					{
						key: 'su03',
						classe: 'soja',
						posicao: 'left: 55%; top: 20%',
						infoIcone: 'Favorecida pelo clima regular, a região Sul é a segunda maior produtora de soja do país, com aproximadamente 30% de toda a soja colhida no país vindo da região. Os estados do Paraná e Rio Grande do Sul são, respectivamente, o segundo e o terceiro maior produtor do país, perdendo apenas para Mato Grosso.'
					},
					{
						key: 'su04',
						classe: 'trigo',
						posicao: 'left: 40%; top: 35%',
						infoIcone: 'Devido ao clima ameno, propício a produção de trigo, a região Sul é a maior produtora do grão no país, com aproximadamente 85% de toda a produção nacional vindo dos seus três estados. O estado do Paraná é o maior produtor e detentor da maior área de plantio do grão no Brasil, possuindo quase 50% de toda a área plantada.'
					},
					{
						key: 'su04',
						classe: 'feijao',
						posicao: 'left: 41%; top: 28%',
						infoIcone: 'A região Sul é a maior produtora de feijão do país, detendo mais de 25% da produção nacional, com as região Sudeste, Centro-Oeste e Nordeste produzindo quantidades muito próximas também.'
					},
					{
						key: 'su04',
						classe: 'galinha',
						posicao: 'left: 52%; top: 24%',
						infoIcone: 'Os três estados do Sul são os maiores produtores de frango do país produzindo aproximadamente 8 milhões de toneladas da carne, tanto para o mercado interno como para o externo.'
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
				texto: 'A sua direita, temos um mapa do Brasil divido por regiões.',
				tempo: 1500,//ms,
				styles: 'animation: fala4 4s linear both; animation-iteration-count: 1;'
			},
			{
				key: 'fala5',
				texto: 'Por que não tenta navegar por elas?',
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
				return 'col-sm-10';
			}
			return 'col-sm-6';
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