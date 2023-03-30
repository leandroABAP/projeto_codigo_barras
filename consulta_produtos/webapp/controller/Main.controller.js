sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // Incluir nova biblioteca SAP chamada library 
    "sap/m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    // Após incluir a biblioteca, devemos inicializa-la 
    function (Controller, library) {
        "use strict";
        // Ponto de declaração das variaveis globais, nesse caso utiliza o VAR
        var urlObject = library.URLHelper;

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function(){ },
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
                //Variável de tipo texto
                let material = "Água Mineral Natural";
                //Variável de tipo numerico
                let peso = 500;
                let uom = 'ml';
                //numerico com casas decimais
                let qtdsodio = 15.66;
                //booleano - abap_bool
                let conteudoliquido = true;

                //tabela interna no Java script - array
                // tebela interna de 4 registros
                let composicao = ["bicarbonato", "magnesio","sulfato","brometo"];
                //estrutura - tipo com varias propriedades - ou também chamado de objeto
                let produto = { 
                    descricao : "chá verde",
                    marca     : "quaker",
                    peso : 130,
                    uom : "g"
                }



            }
        });
    });
