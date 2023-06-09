sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // Incluir nova biblioteca SAP chamada library 
    "sap/m/library",
    //Model é responsável por exibir conteudo na tela
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    // Após incluir a biblioteca, devemos inicializa-la 
    function (Controller, library, JSONModel) {
        "use strict";
        // Ponto de declaração das variaveis globais, nesse caso utiliza o VAR
        var urlObject = library.URLHelper;

        return Controller.extend("consultaprodutos.controller.Main", {
            // onInit equivale ao Inicialization no ABAP
            onInit: function(){ 
                //1 - variavel objeto vazio
                let produto = {};
                //2- Instanciar o modelo, o parametro construtor será a var produto
                let productModel = new JSONModel(produto);

                //3- Atribui o modelo a tela
                //this no Javascript eigual ao ME no ABAP e utilizar 
                //3.1 getView e o metodo para recer a instancia da tela
                let view = this.getView();
                //3.2 - Atribuir o modelo a instancia da tela atraves da variavel view
                // o nome ModeloProduto é o ID ou apelido do modelo que tem que ser criado
                view.setModel(productModel, "ModeloProduto");
            },
            

            // Evento do click da imágem criado no MainView
            onClickImage: function(oEvent){
                //A clausula true faz com que a imagem seja aberta em uma nova janela
                urlObject.redirect(oEvent.getSource().getSrc(), true );
            },
            // Evento do click dd botão criado no MainView
            onPressBusca: function(){
                let input;
                input = this.byId("inpBuscar");
                let valor = input.getValue();
                alert(valor);

                //Buscar dados na API externa da open food fact

                //passar os parametros de chamadas da API
                let parameters = {
                    url : "https://world.openfoodfacts.org/api/v2/product/" + valor,
                    method : "GET",
                    async : true,
                    crossDomain : true
                };
                
                //executar a chamada da API no servidor
                //promise = quando uma função retorna como parametro de exportação 
                //outra função 
                $.ajax(parameters)
                .done(function (resposta_api){
                    
                    // Obter a instancia da View criado no SET acima já com os dados 
                    // recebidos da API
                    let oProdutoModel = this.getView().getModel("ModeloProduto");
                    //clear - limpar dados antigos da tela
                    oProdutoModel.setData({});
                    oProdutoModel.refresh();
                    //Enviar os dados recebidos da API para a tela
                    oProdutoModel.setData(resposta_api);
                    oProdutoModel.refresh();
                }.bind(this) ) //o bind permite acesso dos dados da função externa sejam enxergados dentro desta função
                
                //retona parametros quando executado com sucesso
                .fail(function (){
                    debugger
                }); //retorna parametros quando erro - equivae ao exception no ABAP
                
                //Variável de tipo texto
                ///let material = "Água Mineral Natural";
                //Variável de tipo numerico
                //let peso = 500;
                //let uom = 'ml';
                //numerico com casas decimais
                //let qtdsodio = 15.66;
                //booleano - abap_bool
                //let conteudoliquido = true;

                //tabela interna no Java script - array
                // tebela interna de 4 registros
                //let composicao = ["bicarbonato", "magnesio","sulfato","brometo"];
                //estrutura - tipo com varias propriedades - ou também chamado de objeto
                //let produto = { 
                //    descricao : "chá verde",
                //    marca     : "quaker",
                //    peso : 130,
                //    uom : "g"
                //}
            }
        });
    });
