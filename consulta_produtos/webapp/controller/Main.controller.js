sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function () {},
         
            onPressBusca: function(){
            let input;
           input = this.byId("inpBuscar");
           let valor = input.getValue();
           alert(valor);
          } 
        });
    });
